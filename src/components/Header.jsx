import { useEffect, useState } from "react";

const mobileCollections = [
  {
    title: "FACE",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=120&v=1657915153&width=120",
  },
  {
    title: "BODY",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/argan-tucuma-lip-butter1.jpg?crop=center&height=120&v=1657915121&width=120",
  },
  {
    title: "MINI KITS",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/flower-child-scented-roll-on1.jpg?crop=center&height=120&v=1657915222&width=120",
  },
];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16.2 16.2 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 4h2l1.5 10h10.5l2-7H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.2" fill="currentColor" />
      <circle cx="17" cy="19" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 21c1.8-3.7 5-5.6 8-5.6S18.2 17.3 20 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

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

export default function Header({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <header className="ayurvibe-header">
      <div className="ayurvibe-headerDesktop hidden lg:block">
        <div className="ayurvibe-headerDesktopTop">
          <nav className="ayurvibe-headerUtilityNav">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Theme</a>
          </nav>
          <div className="ayurvibe-headerUtilitySocial">
            <a href="#" aria-label="Facebook"><IconFacebook /></a>
            <a href="#" aria-label="Instagram"><IconInstagram /></a>
            <a href="#" aria-label="TikTok"><IconTikTok /></a>
          </div>
          <button className="ayurvibe-headerCurrency">
            Canada (CAD $)
            <IconChevronDown />
          </button>
        </div>

        <div className="ayurvibe-headerDesktopBottom">
          <a href="/home" className="ayurvibe-headerLogo">glimmer</a>
          <nav className="ayurvibe-headerMainNav">
            <a href="/category">Shop all</a>
            <a href="/category">Face</a>
            <a href="/category">Body</a>
            <a href="/category">Mini Kits</a>
            <a href="/home">Blog</a>
          </nav>
          <div className="ayurvibe-headerDesktopIcons">
            <button aria-label="Search"><IconSearch /></button>
            <a href="/order-history" aria-label="Account"><IconUser /></a>
            <a href="/cart" aria-label="Cart" className="is-cart">
              <IconCart />
              <span>{cartCount}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="ayurvibe-headerMobile lg:hidden">
        <div className="ayurvibe-headerMobileBar">
          <a href="/home" className="ayurvibe-headerLogo">glimmer</a>
          <div className="ayurvibe-headerMobileIcons">
            <button aria-label="Search"><IconSearch /></button>
            <a href="/cart" aria-label="Cart" className="is-cart">
              <IconCart />
              <span>{cartCount}</span>
            </a>
            <button aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((v) => !v)}>
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="ayurvibe-headerMobileMenu">
            <div className="ayurvibe-headerMobileMenuLine" />
            <a href="/category" className="ayurvibe-mobileMenuRow is-simple">
              <span>SHOP ALL</span>
              <span>{">"}</span>
            </a>

            {mobileCollections.map((item) => (
              <a key={item.title} className="ayurvibe-mobileMenuRow" href="/category">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
                <span>{">"}</span>
              </a>
            ))}

            <a href="/home" className="ayurvibe-mobileLink">BLOG</a>
            <a href="#" className="ayurvibe-mobileLink">About</a>
            <a href="#" className="ayurvibe-mobileLink">Contact</a>
            <a href="#" className="ayurvibe-mobileLink">FAQ</a>
            <a href="#" className="ayurvibe-mobileLink">Theme</a>
            <a href="/order-history" className="ayurvibe-mobileLogin">Register / Login</a>
            <div className="ayurvibe-mobileSocial">
              <a href="#" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" aria-label="TikTok"><IconTikTok /></a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
