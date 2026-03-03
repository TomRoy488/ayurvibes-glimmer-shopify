import { useState } from "react";

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.4 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.3-1.4 1.5-1.4h1.3V5.8c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.5v2h-2.2V14h2.2v7h2.5Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.8 4.5c.7 1.6 1.8 2.6 3.2 3v2.5a7 7 0 0 1-3.1-.9v5.4a5.2 5.2 0 1 1-4-5.1v2.6a2.7 2.7 0 1 0 1.5 2.5V4.5h2.4Z" />
    </svg>
  );
}

const shopLinks = ["All products", "New Arrivals", "Minis + Kits", "Best Sellers", "Sale"];
const companyLinks = ["About", "Blog", "Contact", "FAQ"];
const paymentLabels = ["AMEX", "ApplePay", "Afterpay", "Diners", "Discover", "GPay", "MC", "shop", "VISA"];

export default function Footer() {
  const [openShop, setOpenShop] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <footer className="ayurvibe-siteFooter">
      <div className="ayurvibe-siteFooterInner">
        <div className="ayurvibe-siteFooterBrand">
          <a href="#" className="ayurvibe-siteFooterLogo">glimmer</a>
          <p>
            All product content for this demo has been kindly provided by <a href="#">OM Organics.</a>
          </p>
          <div className="ayurvibe-siteFooterSocial">
            <a href="#" aria-label="Facebook"><IconFacebook /></a>
            <a href="#" aria-label="Instagram"><IconInstagram /></a>
            <a href="#" aria-label="TikTok"><IconTikTok /></a>
          </div>
        </div>

        <div className="ayurvibe-siteFooterDesktopCols hidden md:grid">
          <div className="ayurvibe-siteFooterCol">
            <h4>SHOP</h4>
            {shopLinks.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
          <div className="ayurvibe-siteFooterCol">
            <h4>COMPANY</h4>
            {companyLinks.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
          <div className="ayurvibe-siteFooterCol">
            <h4>MEMBER OF</h4>
            <div className="ayurvibe-siteFooterMember">1% FOR THE PLANET</div>
          </div>
          <div className="ayurvibe-siteFooterSignup">
            <h4>SIGN UP AND SAVE 15%</h4>
            <p>Be the first to hear about new products, exclusive sales, and news.</p>
            <div className="ayurvibe-siteFooterEmailRow">
              <span>Your email</span>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="ayurvibe-siteFooterMobileCols md:hidden">
          <button className="ayurvibe-siteFooterAccordion" onClick={() => setOpenShop((v) => !v)}>
            <span>SHOP</span>
            <IconChevronDown />
          </button>
          <div className={`ayurvibe-siteFooterAccordionBody ${openShop ? "is-open" : ""}`}>
            {shopLinks.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>

          <button className="ayurvibe-siteFooterAccordion" onClick={() => setOpenCompany((v) => !v)}>
            <span>COMPANY</span>
            <IconChevronDown />
          </button>
          <div className={`ayurvibe-siteFooterAccordionBody ${openCompany ? "is-open" : ""}`}>
            {companyLinks.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>

          <div className="ayurvibe-siteFooterMemberMobile">
            <h4>MEMBER OF</h4>
            <div className="ayurvibe-siteFooterMember">1% FOR THE PLANET</div>
          </div>

          <div className="ayurvibe-siteFooterSignupMobile">
            <h4>SIGN UP AND SAVE 15%</h4>
            <p>Be the first to hear about new products, exclusive sales, and news.</p>
            <div className="ayurvibe-siteFooterEmailRow">
              <span>Your email</span>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="ayurvibe-siteFooterBottom">
          <button className="ayurvibe-siteFooterCurrency">
            Canada (CAD $)
            <IconChevronDown />
          </button>
          <p>Copyright © 2026, STO Glimmer. All rights reserved. See our terms of use and privacy notice.</p>
          <p>Powered by Shopify</p>
          <div className="ayurvibe-siteFooterPayments">
            {paymentLabels.map((label) => (
              <span key={label} className="ayurvibe-payBadge">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
