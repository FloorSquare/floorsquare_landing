# FloorSquare landing (Next.js)

    npm install
    cp .env.example .env.local   # fill in values
    npm run dev

1. Supabase: create project, run supabase.sql in the SQL Editor.
2. Telegram: message @BotFather, /newbot, copy token. Send your bot any message, then open
   https://api.telegram.org/bot<TOKEN>/getUpdates and copy chat.id.
3. Deploy: push to GitHub, import in Vercel, add all env vars from .env.example.
