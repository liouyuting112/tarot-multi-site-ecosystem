# 🌌 Tarot Multi-Site Cloud Deployment Guide

由於 Railway 試用期限制，我們採用「Vercel (前端) + Render (後端)」的雙雲端方案，這也能更有效地避開 PBN 站群檢測。

## 1. 後端部署：Render.com (Strapi + Postgres)

我已經為您準備好了 `backend/render.yaml` 藍圖。

### 步驟：
1. 登入 [Render Dashboard](https://dashboard.render.com/)。
2. 點擊 **"New" -> "Blueprint"**。
3. 連結您的 GitHub 倉庫 `tarot-multi-site-ecosystem`。
4. Render 會自動讀取配置。點擊 **"Approve"** 開始部署。
5. **重要**：部署完成後，請記下後端的 URL (例如 `https://tarot-backend.onrender.com`)。

---

## 2. 前端部署：Vercel (Next.js Sites)

每個網站都需要在 Vercel 建立一個獨立的專案。

### 步驟 (以 Site A 為例)：
1. 登入 [Vercel](https://vercel.com/)。
2. 點擊 **"Add New" -> "Project"**。
3. 導入 `tarot-multi-site-ecosystem`。
4. **關鍵設定**：
   - **Project Name**: `tarot-site-a` (以此類推)
   - **Root Directory**: 點擊 Edit，選擇 `site-a-tech` (或對應資料夾)。
5. **Environment Variables**:
   - `NEXT_PUBLIC_STRAPI_URL`: 填寫您的 Render 後端網址。
   - `REVALIDATION_SECRET`: 填寫一個自訂的密鑰 (需與 Strapi 設定一致)。
6. 點擊 **"Deploy"**。

*重複以上步驟，分別為 `site-b-modern` 和 `site-c-arcane` 建立專案。*

---

## 🛡️ Anti-PBN 最終核查
- **網址分散**：您的三個站在 Vercel 會獲得不同的網址，後端在 Render，這在 Google 眼中是分散的架構。
- **內容更新**：只要在 Render 的 Strapi 發文，Vercel 的網站就會自動更新。

---

## 🛠️ 常見問題
- **Strapi 喚醒**：Render 免費版在 15 分鐘無人使用後會進入休眠，第一次連線需等待約 30 秒。
- **資料持久化**：本方案使用 Render 的託管 PostgreSQL，您的文章數據將永久保存。
