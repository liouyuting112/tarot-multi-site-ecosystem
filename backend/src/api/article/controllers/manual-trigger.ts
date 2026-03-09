
import { generateRandomArticle } from '../../../utils/content-generator';
const { tarotCards } = require('../../../data/tarot-cards');

export default {
    async triggerPost(ctx) {
        const { site } = ctx.request.body;
        if (!site || !['SiteA', 'SiteB', 'SiteC'].includes(site)) {
            return ctx.badRequest('Please specify a valid site (SiteA, SiteB, or SiteC)');
        }

        try {
            console.log(`[Manual Trigger] Generating article for ${site}`);
            const articleData = await generateRandomArticle(site as any, tarotCards);

            const article = await strapi.documents('api::article.article').create({
                data: articleData,
                status: 'published'
            });

            return {
                message: `Successfully generated and published manual article for ${site}`,
                article: {
                    title: article.title,
                    slug: article.slug
                }
            };
        } catch (err) {
            return ctx.internalServerError('Failed to generate manual article');
        }
    }
};
