# Setup Instructions for Feasto UI Updates

## Overview
The UI has been updated to match your design specifications for:
- **Order Tracking Page** - With Google Maps integration showing delivery routes
- **User Signup Page** - Two-column layout with orange gradient background
- **Account Settings Page** - Communication preferences, security settings, and danger zone

## Google Maps API Key Setup

The Order Tracking page uses Google Maps to display delivery routes. To enable this feature:

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Directions API
   - Create credentials (API Key)

2. **Add the API key to your project:**
   - Create a `.env` file in the root directory (copy from `.env.example`)
   - Add your API key:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
     ```

3. **Update the OrderTrackingPage component:**
   - Open `src/pages/checkout/OrderTrackingPage.tsx`
   - Replace `"YOUR_GOOGLE_MAPS_API_KEY"` with `import.meta.env.VITE_GOOGLE_MAPS_API_KEY`

## Page Routes

The updated pages are available at:
- **Signup:** `/signup`
- **Account Settings:** `/settings`
- **Order Tracking:** `/tracking`

## Features Implemented

### 1. Signup Page (`/signup`)
- Two-column responsive layout
- Left side: Orange gradient background with feature highlights
- Right side: Clean signup form with icon-enhanced input fields
- Form fields: Full Name, Campus Email, Phone Number, Password
- User avatars and testimonial section

### 2. Account Settings (`/settings`)
- **Communication Preferences Section:**
  - Email Notifications toggle (enabled by default)
  - SMS Notifications toggle (disabled by default)
- **Security Section:**
  - Change Password form with Current, New, and Confirm fields
- **Danger Zone:**
  - Account deactivation option with warning

### 3. Order Tracking Page (`/tracking`)
- Progress bar showing order status (Placed → Preparing → On Route → Delivered)
- Google Maps integration with:
  - Delivery route visualization
  - Vendor and destination markers
  - Map controls (zoom, locate, fullscreen)
  - "INCOMING" status badge
- Rider information card with contact options
- Order summary with itemized pricing

## Notes

- All pages are fully responsive and optimized for desktop and mobile views
- The design uses your existing color scheme (#EE8C2B orange and neutral tones)
- Icons are from Lucide React (already installed)
- Google Maps requires a valid API key to display the map

## Development

To run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`
