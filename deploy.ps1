# Buzzercode.com One-Click Deployment Assistant

Write-Host "Initializing Buzzercode.com Environment Setup..." -ForegroundColor Green

# 1. Environment Check
Write-Host "Checking Node.js version..."
node -v

# 2. Backend Dependencies
Write-Host "Installing Backend Dependencies..."
cd backend
npm install express twilio stripe body-parser dotenv firebase-admin --no-audit --no-fund

# 3. Frontend Check
Write-Host "Verifying Frontend Assets..."
if (Test-Path ../frontend/index.html) {
    Write-Host "Landing Page found." -ForegroundColor Gray
}

# 4. Generate .env Template
Write-Host "Generating .env template..."
$envContent = @"
PORT=3000
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_PHONE_NUMBER=+1888BUZZCODE
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
FRONTEND_URL=http://localhost:3000
"@
Set-Content -Path .env -Value $envContent

Write-Host "`nSetup Complete!" -ForegroundColor Green
Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "1. Fill in your API keys in backend/.env"
Write-Host "2. Run 'npm start' in the backend directory."
Write-Host "3. Point your Twilio Webhook to your-domain.com/voice/inbound"
Write-Host "`nTo add an influencer, run: node manage.js add 'Name' 'Extension' 'Phone' 'Rate'"
