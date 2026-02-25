# Buzzercode.com - Setup & Automation

To get Buzzercode fully functional, follow these steps. The code I have written handles the heavy lifting of voice routing and billing.

## 1. Backend Setup (Cloud Run / VPS)

The backend is located in `backend/`.

```powershell
cd backend
npm install
node index.js
```

### Environment Variables (.env)

You must set these in your hosting environment:

- `TWILIO_ACCOUNT_SID`: From Twilio Console
- `TWILIO_AUTH_TOKEN`: From Twilio Console
- `TWILIO_PHONE_NUMBER`: The 1-888 or local number you buy on Twilio
- `STRIPE_SECRET_KEY`: From Stripe Dashboard
- `FIREBASE_PROJECT_ID`: (Optional) If scaling beyond mock database

## 2. Twilio Configuration

1. Go to Twilio Console > Phone Numbers > Active Numbers.
2. Select your number.
3. Under **Voice & Fax**, set "A CALL COMES IN" to **Webhook**.
4. URL: `https://your-backend-url.com/voice/inbound`

## 3. "Land Grab" Deployment

The files in `frontend/` (index.html, css/, js/) can be hosted on:

- Firebase Hosting
- Vercle / Netlify
- Or your own Apache/Nginx server.

## 4. Automation Logic

The system is designed to:

- **Automatically intercept** unknown callers and send them a "Text-to-Pay" SMS.
- **Automatically meter** calls per minute and deduct from the wallet.
- **Automatically protect** reserved VIP codes.

No manual intervention is required once the Twilio webhook is linked.
