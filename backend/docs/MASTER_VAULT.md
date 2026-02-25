# 🔐 Buzzercode CEO Master Vault

**STRICTLY CONFIDENTIAL - OPERATOR EYES ONLY**

This document contains the foundational "DNA" of your autonomous marketplace.

## 🔑 Primary Secret Keys

| Service | Variable Name | Purpose |
| :--- | :--- | :--- |
| **Twilio** | `TWILIO_ACCOUNT_SID` | PSTN/SMS Gateway |
| **Stripe** | `STRIPE_SECRET_KEY` | Global Treasury/Payouts |
| **Firebase** | `FIREBASE_SERVICE_ACCOUNT` | Persistent Memory (Firestore) |
| **Overlord** | `ADMIN_API_TOKEN` | Remote Dashboard Access |

## 🌐 API Map (The Nerve Center)

| Endpoint | Auth | Purpose |
|---|---|---|
| `GET /api/admin/vitals` | `x-admin-token` | Live revenue, user, and call metrics |
| `GET /api/admin/health` | `x-admin-token` | Guardian/Overmind/Marketing status |
| `GET /api/admin/sentiment` | `x-admin-token` | Star Creators, hot categories, Darwin Directive |
| `POST /api/signal` | none | Record user swipe/call signal from mobile app |
| `POST /api/leads` | none | Capture new lead from Land Grab form |

Your system exposes several critical hooks for external dashboard "Injection":

### 1. Business Vitals

- **URL**: `GET /api/admin/vitals`
- **Header**: `x-admin-token: [YOUR_TOKEN]`
- **Response**: Revenue, active users, and lead conversion rates in real-time.

### 2. Organism Health

- **URL**: `GET /api/admin/health`
- **Purpose**: Verifies if the Guardian (L1), Overmind (L2), and Viral Engine (L3) are sentient.

## 🚀 Execution Commands

- **Start Main Engine**: `node index.js`
- **Manual Overseer**: `node manage.js`
- **Clean Sync**: `powershell ./deploy.ps1`

## 🧠 CEO Strategies (Maximizing Profit)

1. **The Darwin Loop**: Overmind automatically lowers rates for inactive creators.
2. **The Viral Pulse**: Marketing Guardian automatically spends "Marketing Budget" (Synthetic Engagement) on trending X/TikTok topics.
3. **Priority Jump**: Users pay $1 to skip the queue—this is 100% net profit.
