# 🚀 Vercel Deployment Guide

## Prerequisites

1. **Gmail Account Setup** (for nodemailer):
   - Enable 2-Factor Authentication
   - Generate App Password: Google Account → Security → 2-Step Verification → App passwords
   - Use this app password (not your regular Gmail password)

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

Update `.env.local` with your actual email credentials:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=your-admin-email@gmail.com
NEXTAUTH_URL=https://your-domain.vercel.app
```

## Step 3: Deploy to Vercel

### Option A: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add EMAIL_HOST
   vercel env add EMAIL_PORT
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add EMAIL_FROM
   vercel env add ADMIN_EMAIL
   ```

### Option B: Vercel Dashboard

1. **Connect GitHub Repository**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository

2. **Set Environment Variables** in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add all the variables from `.env.local`

## Step 4: Test Contact Form

1. Visit your deployed site
2. Fill out the contact form
3. Check both your email and the sender's email
4. Verify emails are received properly

## Email Configuration Options

### Gmail (Recommended)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Custom SMTP
```env
EMAIL_HOST=your-smtp-host.com
EMAIL_PORT=587
EMAIL_USER=your-username
EMAIL_PASS=your-password
```

## Troubleshooting

- **Email not sending**: Check environment variables are set correctly
- **Gmail authentication error**: Ensure 2FA is enabled and using app password
- **Build errors**: Run `npm run build` locally first to test
- **API route not working**: Check `/api/contact` endpoint in browser

## Features Included

✅ **Dual Email System**: Sends confirmation to user + notification to admin
✅ **Professional Templates**: Branded email templates with styling
✅ **Form Validation**: Client-side and server-side validation
✅ **Loading States**: Visual feedback during form submission
✅ **Error Handling**: Proper error messages and retry functionality
✅ **Responsive Design**: Works on all devices
✅ **Vercel Optimized**: Configured for Vercel's serverless functions
