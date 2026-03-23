# TORMAME Website

Professional landing/pitch website for [tormame.dev](https://tormame.dev).

## Files

```
tormame_website/
├── index.html      # Main website
├── styles.css      # All styling
├── script.js       # Interactivity
└── README.md       # This file
```

## Setting Up the Contact Form (Pageclip)

You have **Pageclip** free via the GitHub Student Developer Pack.

1. Sign up at [pageclip.co](https://pageclip.co) using your GitHub account
2. Create a new **Site** and copy the action URL (looks like `https://send.pageclip.co/AbCdEfGhIjKl/contact`)
3. In `index.html`, find this line and replace the placeholder:
   ```html
   action="https://send.pageclip.co/YOUR_PAGECLIP_ACTION/contact"
   ```
4. In your Pageclip dashboard, go to **Settings → Notifications** and add `team@tormame.dev` as the notification email
5. Every form submission will be forwarded to your inbox

---

## Hosting Options (All Free)

### Option 1 — GitHub Pages (Recommended, simplest)

1. Push this repo to GitHub (repo name can be anything)
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. GitHub Pages URL will be `https://yourusername.github.io/reponame`

**Connect tormame.dev domain:**
1. In your repo root, create a file named `CNAME` containing exactly:
   ```
   tormame.dev
   ```
2. Go to **name.com** (your registrar), DNS settings for `tormame.dev`
3. Add these DNS records:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | yourusername.github.io. |

4. Back in GitHub Pages settings, enter `tormame.dev` in the custom domain field
5. Check **Enforce HTTPS** — GitHub provides a free SSL cert automatically

---

### Option 2 — Netlify (Drag & drop, zero config)

1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop the entire `tormame_website` folder onto the Netlify dashboard
3. It deploys instantly with a random URL
4. Go to **Domain settings → Add custom domain** → enter `tormame.dev`
5. In name.com DNS, point your nameservers to Netlify's (they provide these), or add A records that Netlify gives you
6. Free SSL is automatic

> Netlify also offers form handling as an alternative to Pageclip — add `netlify` attribute to your `<form>` tag.

---

### Option 3 — Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder and follow prompts
3. Or connect your GitHub repo at [vercel.com](https://vercel.com) — auto-deploys on every push
4. Add `tormame.dev` in Project → Settings → Domains
5. Vercel provides the DNS records to add in name.com

---

### Option 4 — DigitalOcean (via Student Pack — $200 credit)

1. Claim your $200 DigitalOcean credit from the GitHub Student Pack
2. Use **DigitalOcean App Platform** — connect your GitHub repo
3. Select "Static Site" — it's free even without the credit
4. Add `tormame.dev` as a custom domain and update name.com DNS

---

## Quickest Path to Live Site

```
1. Push to GitHub repo
2. Enable GitHub Pages → set custom domain to tormame.dev
3. Add CNAME file to repo root
4. Update DNS at name.com (A records → GitHub IPs)
5. Set up Pageclip for contact form
6. Done — live at tormame.dev with HTTPS
```

DNS propagation can take up to 48 hours but usually under 30 minutes.