import React from "react";
import "../style_css/home.css";

export default function Home({
  iosAppId = "YOUR_IOS_APP_ID",
  androidPackage = "com.foodiemap.app.v1",
}) {
  const appStoreUrl = `https://testflight.apple.com/join/agfwveNs`;
  const playStoreUrl = `https://play.google.com/apps/testing/com.foodiemap.app.v1`;

  return (
    <main className="fm-root">
      {/* Header */}
      <header className="fm-hero">
        <h1 className="fm-title">Welcome to FoodieMap</h1>
        <p className="fm-subtitle">
          Discover hidden food spots, enjoy discounts, pay in-app, and share your foodie adventures.
        </p>

        {/* Store Badges */}
        <div role="group" aria-label="Download FoodieMap" className="fm-badges">
          {/* App Store badge (Apple) */}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="fm-badge"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
            />
          </a>

          {/* Google Play badge */}
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="fm-badge"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </header>

      {/* Key Features */}
      <section className="fm-section">
        <h2 className="fm-h2">Key Features</h2>
        <div className="fm-grid fm-grid-4">
          <Feature
            title="🍜 Discover Local Restaurants"
            desc="Find multiple dining spots near you, from hidden gems to popular favorites."
          />
          <Feature
            title="⭐ Review & Recommend"
            desc="Share your experience, leave a review, and recommend your favorite spots."
          />
          <Feature
            title="💳 Quick & Secure Payment"
            desc="Pay instantly with Visa, Mastercard, or MobilePay — powered by Stripe."
          />
          <Feature
            title="🎟️ Exclusive Discounts"
            desc="Scan and redeem special offers from participating restaurants."
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="fm-section">
        <h2 className="fm-h2">Coming Soon</h2>
        <div className="fm-grid fm-grid-3">
          <Feature
            title="💬 Share a Table, Save Together"
            desc="Invite others to join your table and enjoy discounts for dining together."
          />
          <Feature
            title="📷 Foodie Photo Sharing"
            desc="Take and share pics of your meals to inspire fellow food lovers."
          />
          <Feature
            title="🌟 Hidden Gems Mode"
            desc="Discover unique places not listed on Google — shared by the FoodieMap community."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="fm-section">
        <h2 className="fm-h2">Get Started Today</h2>
        <p className="fm-p">
          Be one of the first to try FoodieMap and help shape the future of food discovery for travelers and locals.
        </p>
        <div role="group" aria-label="Download FoodieMap" className="fm-badges">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="fm-badge"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
            />
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="fm-badge"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="fm-footer">
        <p>
          &copy; 2025 FoodieMap. All rights reserved.{" "}
          <a className="fm-link" href="mailto:foodiemap2024@gmail.com">Contact Us</a>
        </p>
      </footer>
    </main>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="fm-card">
      <h3 className="fm-card-title">{title}</h3>
      <p className="fm-card-desc">{desc}</p>
    </div>
  );
}
