# EmailJS Setup Instructions

## Overview
The contact form now uses EmailJS to send emails directly to `karolinalukac@gmail.com`. Follow these steps to set it up:

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Connect your email account (karolinalukac@gmail.com)
5. Note the Service ID (it will look like `service_xxxxxx`)

## Step 3: Create Email Template
1. In EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Use these template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{service_type}}` - Selected service
   - `{{message}}` - Message content
   - `{{attachment}}` - Attachment filename
   - `{{to_email}}` - Recipient email

4. Template example:
```
Subject: New Contact Form Submission from {{from_name}}

You have received a new message from your contact form:

Name: {{from_name}}
Email: {{from_email}}
Service: {{service_type}}
Attachment: {{attachment}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

5. Save the template and note the Template ID (it will look like `template_xxxxxx`)

## Step 4: Get Your Public Key
1. In EmailJS dashboard, click "Account"
2. Copy your Public Key (it will look like `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update the JavaScript
Open `script.js` and replace the placeholder values:

```javascript
// Replace these with your actual EmailJS credentials
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    // ... template variables
});

// And update the initialization
emailjs.init("YOUR_PUBLIC_KEY");
```

## Step 6: Test the Form
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email (including spam folder)

## Important Notes
- The free EmailJS plan allows 200 emails per month
- Emails are sent from your connected email account
- Make sure to replace all placeholder IDs with your actual IDs
- Test thoroughly before deploying to production

## Troubleshooting
- If emails don't send, check the browser console for errors
- Make sure all EmailJS IDs are correctly copied
- Verify your email service is properly connected
- Check that the template variables match the form fields
