# Formspree Setup Instructions

## Overview
The contact form now uses Formspree to send emails directly to `karolinalukac@gmail.com`. Follow these steps to set it up:

## Step 1: Create Formspree Account
1. Go to [Formspree](https://formspree.io/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create New Form
1. In Formspree dashboard, click "New Form"
2. Choose "HTML Form"
3. Give your form a name (e.g., "Karolina Prevodi Contact")
4. Set the recipient email to: `karolinalukac@gmail.com`

## Step 3: Get Your Form Endpoint
1. After creating the form, Formspree will give you an endpoint URL
2. It will look like: `https://formspree.io/f/xyz123`
3. Copy this endpoint URL

## Step 4: Update the HTML Form
Open `index.html` and replace the placeholder endpoint:

```html
<form id="contactForm" class="form" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
```

Replace `xyz123` with your actual Formspree endpoint.

## Step 5: Test the Form
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email at karolinalukac@gmail.com

## Important Notes
- The free Formspree plan allows 50 submissions per month
- Emails are sent directly to your specified email address
- No JavaScript configuration needed - works out of the box
- Formspree handles spam protection automatically
- You can customize email templates in Formspree dashboard

## Form Fields Included
- Name (required)
- Email (required)  
- Service Type
- Message (required)
- Attachment (optional)

## Troubleshooting
- If emails don't arrive, check spam folder
- Make sure the form endpoint URL is correct
- Verify your email is confirmed in Formspree
- Check Formspree dashboard for submission history

## Alternative: EmailJS
If you prefer EmailJS instead of Formspree, follow the EMAILJS_SETUP.md instructions.
