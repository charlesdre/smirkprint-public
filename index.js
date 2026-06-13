const express = require('express');
const app = express();

function htmlPage(title, bodyContent) {
  return [
    '<!DOCTYPE html><html lang="en"><head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>' + title + '</title>',
    '<style>body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:680px;margin:0 auto;padding:40px 20px;color:#1a1a1a;line-height:1.7;background:#fafaf8}h1{font-size:24px;font-weight:700;margin-bottom:8px}h2{font-size:16px;font-weight:600;margin-top:32px;margin-bottom:8px}p{margin-bottom:16px;color:#444}.updated{font-size:13px;color:#888;margin-bottom:32px}a{color:#1a1a1a}.card{background:white;border-radius:16px;padding:48px 40px;box-shadow:0 4px 24px rgba(0,0,0,0.08)}.phone-box{background:#f0f0ec;border-radius:12px;padding:20px 24px;margin:28px 0;text-align:center}.phone-label{font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:6px}.phone-number{font-size:28px;font-weight:800;letter-spacing:1px;color:#1a1a1a}.optin-box{background:#fff8e1;border:1px solid #ffe082;border-radius:10px;padding:16px 20px;margin:20px 0}.optin-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#b8860b;margin-bottom:8px}.footer-links{margin-top:28px;font-size:12px;text-align:center}.footer-links a{color:#999;text-decoration:none;margin:0 8px}.step{display:flex;gap:14px;align-items:flex-start;margin-bottom:16px}.step-num{background:#1a1a1a;color:white;width:26px;height:26px;border-radius:50%;font-size:13px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}.step-text{font-size:14px;color:#444;line-height:1.5}</style>',
    '</head><body>',
    bodyContent,
    '</body></html>'
  ].join('');
}

app.get('/', (req, res) => {
  const body = [
    '<div class="card">',
    '<div style="font-size:28px;font-weight:800;margin-bottom:8px">Smirk Print</div>',
    '<div style="font-size:15px;color:#888;margin-bottom:24px">No app. Just text.</div>',
    '<div class="optin-box" style="margin-bottom:24px">',
    '<div class="optin-title">SMS Opt-In — Free Shipping Included</div>',
    '<p style="font-size:13px;color:#555;margin:0 0 8px 0">Text <strong>START</strong> to <strong>(646) 248-6988</strong> to receive order updates and transactional messages from Smirk Print (SMIRK LLC). By texting us, you agree to receive SMS messages. Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to cancel anytime. Reply <strong>HELP</strong> for help.</p>',
    '<p style="font-size:12px;color:#888;margin:0"><a href="/privacy" style="color:#888">Privacy Policy</a> &middot; <a href="/terms" style="color:#888">Terms of Service</a></p>',
    '</div>',
    '<h1 style="font-size:22px;margin-bottom:12px">Print and mail your photos in 3-4 business days</h1>',
    '<p>Text 5-20 of your favorite photos and we will print them as real 4x6 prints and mail them straight to your door. Free shipping always included.</p>',
    '<div class="phone-box">',
    '<div class="phone-label">Text START to</div>',
    '<div class="phone-number">(646) 248-6988</div>',
    '</div>',
    '<div class="step"><div class="step-num">1</div><div class="step-text">Text <strong>START</strong> to <strong>(646) 248-6988</strong> to begin</div></div>',
    '<div class="step"><div class="step-num">2</div><div class="step-text">Send 5-20 photos, your mailing address, and your first name</div></div>',
    '<div class="step"><div class="step-num">3</div><div class="step-text">Pay securely via Stripe ($4.99 to $19.99)</div></div>',
    '<div class="step"><div class="step-num">4</div><div class="step-text">Your 4x6 prints arrive by mail in 3-4 business days — free shipping!</div></div>',
    '</div>',
    '<div style="margin-top:40px;font-size:12px;color:#bbb;text-align:center">Smirk Print by SMIRK LLC &middot; Brooklyn, NY</div>'
  ].join('');
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlPage('Smirk Print - No app. Just text.', body));
});

app.get('/privacy', (req, res) => {
  const body = [
    '<h1>Privacy Policy</h1>',
    '<p class="updated">Last updated: June 1, 2026</p>',
    '<p>Smirk Print is operated by SMIRK LLC, based in Brooklyn, NY. This Privacy Policy explains how we collect, use, and protect your information when you use our SMS-based photo printing service.</p>',
    '<h2>Information We Collect</h2>',
    '<p>When you use Smirk Print, we collect your mobile phone number, the photos you send us, your mailing address, your first name, and payment information processed securely through Stripe. We do not store your payment card details.</p>',
    '<h2>How We Use Your Information</h2>',
    '<p>We use your information solely to fulfill your photo printing order. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>',
    '<h2>SMS Messaging</h2>',
    '<p>By texting (646) 248-6988, you consent to receive transactional SMS messages from Smirk Print related to your order. Message and data rates may apply. Reply STOP at any time to unsubscribe. Reply HELP for assistance.</p>',
    '<h2>Data Retention</h2>',
    '<p>Your photos are stored only as long as needed to fulfill your order. You may request deletion of your data at any time by contacting us.</p>',
    '<h2>Third-Party Services</h2>',
    '<p>We use Twilio for SMS delivery, Stripe for payment processing, and Anthropic for AI-assisted messaging.</p>',
    '<h2>Contact Us</h2>',
    '<p>Email: charlesaugustdreyer@gmail.com | Text: (646) 248-6988</p>',
    '<p><a href="/">Back to Smirk Print</a></p>'
  ].join('');
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlPage('Privacy Policy - Smirk Print', body));
});

app.get('/terms', (req, res) => {
  const body = [
    '<h1>Terms of Service</h1>',
    '<p class="updated">Last updated: June 1, 2026</p>',
    '<p>These Terms of Service govern your use of Smirk Print, operated by SMIRK LLC, accessible by texting (646) 248-6988.</p>',
    '<h2>Service Description</h2>',
    '<p>Smirk Print is an SMS-based photo printing service. Customers text photos, provide a mailing address, and receive printed 4x6 photos by USPS mail within 3-4 business days domestically.</p>',
    '<h2>Ordering and Payment</h2>',
    '<p>Orders are placed via SMS by texting (646) 248-6988. Payment is processed through Stripe. Pricing ranges from $4.99 for 5 photos to $19.99 for 20 photos. A $7.00 surcharge applies for international shipments.</p>',
    '<h2>SMS Consent and Opt-Out</h2>',
    '<p>By texting (646) 248-6988, you consent to receive transactional SMS messages related to your order. Reply <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for assistance. Message and data rates may apply.</p>',
    '<h2>Acceptable Use</h2>',
    '<p>You agree not to submit photos that depict illegal content or explicit material. We reserve the right to cancel such orders and issue a refund.</p>',
    '<h2>Delivery</h2>',
    '<p>Domestic orders are delivered in 3-4 business days. International orders ship in 7-21 business days. We are not responsible for USPS delays.</p>',
    '<h2>Contact</h2>',
    '<p>Email: charlesaugustdreyer@gmail.com | Text: (646) 248-6988</p>',
    '<p><a href="/">Back to Smirk Print</a></p>'
  ].join('');
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlPage('Terms of Service - Smirk Print', body));
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Smirk Print public site running on port ${PORT}`));
