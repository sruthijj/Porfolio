# Deployment Guide: Ubuntu AWS EC2 with Nginx

This guide walks you through deploying the production build of **Sruthij S Nair's Portfolio** to your Ubuntu AWS EC2 instance running Nginx.

---

## 1. Prerequisites Checklist
- [x] AWS EC2 Ubuntu instance running and accessible via SSH
- [x] Security Group configured with inbound rules:
  - **Port 22** (SSH) from your IP
  - **Port 80** (HTTP) from `0.0.0.0/0`
  - **Port 443** (HTTPS) from `0.0.0.0/0` (if using custom domain with SSL)
- [x] Nginx installed on your Ubuntu server

---

## 2. Build the Production Bundle Locally
Run the following build command on your local machine:
```bash
npm run build
```
This generates the optimized production bundle inside the `dist/` directory.

---

## 3. Prepare the Server Directory
Connect to your EC2 instance via SSH:
```bash
ssh -i /path/to/your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

Create the web root directory and adjust ownership:
```bash
sudo mkdir -p /var/www/sruthij-portfolio
sudo chown -R $USER:$USER /var/www/sruthij-portfolio
sudo chmod -R 755 /var/www/sruthij-portfolio
```

---

## 4. Copy Build Files to the Server
From your local terminal (run inside the project root `d:/FLUTTER/Porfolio`):

Using `scp`:
```bash
scp -i /path/to/your-key.pem -r dist/* ubuntu@YOUR_EC2_PUBLIC_IP:/var/www/sruthij-portfolio/
```

Or using `rsync` (faster for subsequent deployments):
```bash
rsync -avz -e "ssh -i /path/to/your-key.pem" dist/ ubuntu@YOUR_EC2_PUBLIC_IP:/var/www/sruthij-portfolio/
```

---

## 5. Configure Nginx Server Block
On your EC2 server, create a dedicated server block configuration:
```bash
sudo nano /etc/nginx/sites-available/sruthij-portfolio
```

Paste the following configuration (replace `YOUR_DOMAIN_OR_PUBLIC_IP` with your actual domain or EC2 public IP):
```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name YOUR_DOMAIN_OR_PUBLIC_IP;

    root /var/www/sruthij-portfolio;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json image/svg+xml;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # React Router SPA Fallback (Prevents 404 on /work/lumina-health and /work/dentcare on refresh)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static Asset Caching
    location ~* \.(?:css|js|webp|svg|png|jpg|jpeg|gif|ico|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }
}
```

Enable the configuration by creating a symlink to `sites-enabled`:
```bash
sudo ln -s /etc/nginx/sites-available/sruthij-portfolio /etc/nginx/sites-enabled/
```

---

## 6. Test and Reload Nginx
Always test your Nginx configuration syntax before reloading to prevent downtime:
```bash
sudo nginx -t
```
You should see:
```text
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Reload Nginx:
```bash
sudo systemctl reload nginx
```

---

## 7. Optional: Configure Free SSL with Let's Encrypt (Certbot)
If you pointed a custom domain name (e.g. `portfolio.sruthij.dev`) to your EC2 public IP:
```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
```
Certbot will automatically modify your Nginx server block to handle HTTPS and redirect HTTP to HTTPS.

---

## 8. Updating the Portfolio in the Future
Whenever you update content or code:
1. Rebuild locally: `npm run build`
2. Sync the new `dist/` directory to `/var/www/sruthij-portfolio/`
3. No Nginx reload is needed for static content updates!
