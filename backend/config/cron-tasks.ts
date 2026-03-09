
import { generateRandomArticle } from '../src/utils/content-generator';
import { tarotCards } from '../src/data/tarot-cards';

export default {
    'daily_update_cycle': {
        task: async ({ strapi }) => {
            console.log('[Cron] Execution cycle starting...');

            // 1. Fetch current config
            const config = await strapi.documents('api::automation-config.automation-config').findFirst();
            if (!config) return;

            const now = new Date();
            const today = now.toISOString().split('T')[0];
            const currentHour = now.getHours();

            let targetCounts = config.daily_target_counts || { SiteA: 0, SiteB: 0, SiteC: 0 };
            let progress = config.daily_progress || { SiteA: 0, SiteB: 0, SiteC: 0 };

            // 2. Check if we need to reset for a new day
            if (config.last_reset_date !== today) {
                console.log(`[Cron] New day detected (${today}). Resetting targets.`);
                const min = config.min_daily_articles || 1;
                const max = config.max_daily_articles || 3;

                targetCounts = {
                    SiteA: Math.floor(Math.random() * (max - min + 1)) + min,
                    SiteB: Math.floor(Math.random() * (max - min + 1)) + min,
                    SiteC: Math.floor(Math.random() * (max - min + 1)) + min
                };
                progress = { SiteA: 0, SiteB: 0, SiteC: 0 };

                await strapi.documents('api::automation-config.automation-config').update({
                    documentId: config.documentId,
                    data: {
                        last_reset_date: today,
                        daily_target_counts: targetCounts,
                        daily_progress: progress
                    }
                });
            }

            // 3. Check if within posting window
            if (currentHour < config.start_hour || currentHour >= config.end_hour) {
                console.log(`[Cron] Outside posting window (${config.start_hour}-${config.end_hour}). Current hour: ${currentHour}.`);
                return;
            }

            // 4. Try to post (Probability check)
            const remainingHours = config.end_hour - currentHour;
            const sites = ['SiteA', 'SiteB', 'SiteC'] as const;

            for (const site of sites) {
                const remainingNeeded = targetCounts[site] - progress[site];
                if (remainingNeeded <= 0) continue;

                // Probability calculation:
                // If we need 2 posts and have 4 hours left, probability per 30-min slot is ~ (2 / (4 * 2)) = 25%
                const slotsLeft = remainingHours * 2;
                const probability = remainingNeeded / slotsLeft;

                if (Math.random() < probability) {
                    console.log(`[Cron] Posting article for ${site} (Target: ${targetCounts[site]}, Progress: ${progress[site]})`);
                    const articleData = await generateRandomArticle(site, tarotCards);
                    await strapi.documents('api::article.article').create({
                        data: articleData,
                        status: 'published'
                    });

                    progress[site]++;
                    await strapi.documents('api::automation-config.automation-config').update({
                        documentId: config.documentId,
                        data: {
                            daily_progress: { ...progress }
                        }
                    });
                }
            }
        },
        options: {
            // Run every 30 minutes
            rule: '*/30 * * * *',
        },
    },
};
