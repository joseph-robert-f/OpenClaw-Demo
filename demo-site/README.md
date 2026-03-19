# OpenClaw Demo Site (Mock)

A lightweight static site to demonstrate an OpenClaw multi-agent workflow.

- No real checkout
- No payments
- Cart is UI-only

## Run locally (quick)

If you have Python:

```bash
cd demo-site
python3 -m http.server 8080
```

Then open:

- http://localhost:8080

## Host it (common options)

### Option A: Nginx on a VPS
1. Copy the `demo-site/` directory to your server, e.g. `/var/www/openclaw-demo`.
2. Configure an Nginx server block with that directory as the `root`.

### Option B: GitHub Pages / Cloudflare Pages / Netlify
- Deploy the `demo-site/` folder as a static site.

