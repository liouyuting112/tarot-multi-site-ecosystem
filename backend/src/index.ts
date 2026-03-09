// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    // Initialize Automation Config
    const authConfigs = await strapi.documents('api::automation-config.automation-config').findMany();
    if (authConfigs.length === 0) {
      await strapi.documents('api::automation-config.automation-config').create({
        data: {
          start_hour: 9,
          end_hour: 18,
          min_daily_articles: 1,
          max_daily_articles: 3,
          last_reset_date: '',
          daily_target_counts: { SiteA: 0, SiteB: 0, SiteC: 0 },
          daily_progress: { SiteA: 0, SiteB: 0, SiteC: 0 }
        }
      });
    }

    // Seed Site Configs
    const siteConfigs = await strapi.documents('api::site-config.site-config').findMany();
    if (siteConfigs.length === 0) {
      const defaultConfigs = [
        {
          site_id: 'SiteA',
          seo_default_title: 'TechNova Tarot - 量子機率與核心運算',
          seo_default_desc: '探究數據之下的命運邏輯，科技與神秘學的終極匯合點。',
          google_analytics_id: 'G-TECH123'
        },
        {
          site_id: 'SiteB',
          seo_default_title: 'Modern Insight - 現代生活的覺察之光',
          seo_default_desc: '用最溫柔的方式，在現代忙碌生活中找回內心的平靜。',
          google_analytics_id: 'G-MODERN456'
        },
        {
          site_id: 'SiteC',
          seo_default_title: 'Arcane Archive - 秘傳符號學與古典卷軸',
          seo_default_desc: '守護古老智慧的數位檔案庫，深研赫米斯與黃金黎明傳統。',
          google_analytics_id: 'G-ARCANE789'
        }
      ];
      for (const config of defaultConfigs) {
        await strapi.documents('api::site-config.site-config').create({ data: config });
      }
    }

    // Seed Initial Articles with Randomized Generator (1-3 articles per site)
    const articles = await strapi.documents('api::article.article').findMany();
    if (articles.length === 0) {
      const { generateRandomArticle } = require('./utils/content-generator');
      const { tarotCards } = require('./data/tarot-cards');

      const sites = ['SiteA', 'SiteB', 'SiteC'] as const;
      for (const site of sites) {
        const count = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < count; i++) {
          const articleData = await generateRandomArticle(site, tarotCards);
          await strapi.documents('api::article.article').create({
            data: articleData,
            status: 'published'
          });
        }
      }
    }
  },
};
