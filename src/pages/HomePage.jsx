import Header from "../components/Header";
import Footer from "../components/Footer";

const showcaseTiles = [
  {
    badge: "POPULAR",
    title: "Kaolin + Coconut Milk",
    subtitle: "Radiant Cleansing Balm",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-KAOLIN-CLEANSING-BALM2.jpg?v=1659211481&width=750",
  },
  {
    badge: "NEW",
    title: "White Willow",
    subtitle: "Purifying Cleansing Gel",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/15.jpg?v=1659478027&width=750",
  },
];

const newArrivals = [
  "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
];

const concerns = ["Acne", "Texture", "Body", "Pores", "Fine Lines", "Dryness"];

const minis = [
  "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1620917669788-4d4e69e44f12?auto=format&fit=crop&w=800&q=80",
];

const bundleProducts = [
  {
    name: "Pink Coconut (Bundle)",
    price: "from $36.50",
    compareAt: "$43.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut1.jpg?crop=center&height=540&v=1657918185&width=360",
  },
  {
    name: "Mini Pink Coconut Hydrating Face Mist",
    price: "from $15.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/mini-pink-coconut-hydrating-face-mist1.jpg?crop=center&height=540&v=1657915612&width=360",
  },
  {
    name: "Hydrating Face Elixir",
    price: "from $18.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/youth-infusion-face-elixir5_d09fb103-bdf3-45e3-9040-cb84ea1b23ea.jpg?crop=center&height=540&v=1699387533&width=360",
  },
  {
    name: "Pink Coconut Nourishing Body Butter",
    price: "from $8.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut-nourishing-body-butter5.jpg?crop=center&height=540&v=1657916066&width=360",
  },
];

const arrivalProducts = [
  {
    name: "Blue Azul Soothing Cleansing Emulsion",
    price: "from $15.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=750&v=1657915153&width=500",
  },
  {
    name: "Spirulina Tonic Clarifying Face Mist",
    price: "from $15.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/spirulina-tonic-face-mist1.jpg?crop=center&height=750&v=1657916190&width=500",
  },
  {
    name: "Pink Coconut Hydrating Face Mist",
    price: "from $15.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut-face-mask6.jpg?crop=center&height=750&v=1657916053&width=500",
  },
  {
    name: "Marula + Cactus Nourishing Face Oil",
    price: "from $15.30",
    sizes: "3 sizes",
    badge: "New",
    badgeAlt: "Sale",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/marula-face-oil5.jpg?crop=center&height=750&v=1657916585&width=500",
    sale: true,
  },
];

const skinConcernCards = [
  {
    title: "Face",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM_ORGANICS_13JULY21_0596-copy.jpg?v=1659156814&width=750",
  },
  {
    title: "Hand",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-GOTU-KOLA-HYALURONIC3.jpg?v=1659211483&width=900",
  },
  {
    title: "Body",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-FW-21--32_websize.jpg?v=1659476881&width=900",
  },
  {
    title: "Foot",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/sunset-nectar-hand-body-lotion4.jpg?v=1659566895&width=900",
  },
  {
    title: "Eye",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-BILBERRY-EYE.jpg?v=1659211492&width=900",
  },
  {
    title: "Lip",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM_ORGANICS_13JULY21_0277-copy.jpg?v=1659156815&width=900",
  },
];

const shopTypeCards = [
  {
    title: "Serums",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/cucumber-eye-serum1.jpg?crop=center&height=700&v=1657915205&width=700",
  },
  {
    title: "Sprays",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/lavender-summergrass-summer-spray1.jpg?crop=center&height=700&v=1657915257&width=700",
  },
  {
    title: "Masks",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=700&v=1657915166&width=700",
  },
  {
    title: "Lotions",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/sunset-nectar-hand-body-lotion5.jpg?crop=center&height=700&v=1657916199&width=700",
  },
  {
    title: "Creams",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/coconut-pracaxi-conditioning-hair-mask5.jpg?crop=center&height=700&v=1657916560&width=700",
  },
  {
    title: "Concentrates",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/clarity-concentrate1.jpg?crop=center&height=700&v=1657915174&width=700",
  },
  {
    title: "Cleansers",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/white-willow-gel6.jpg?crop=center&height=700&v=1657916347&width=700",
  },
];

const bestSellerProducts = arrivalProducts.map((product) => ({
  ...product,
  badge: "Best sellers",
  badgeAlt: undefined,
  sale: false,
}));

const whyChooseCards = [
  {
    title: "Better for everyone",
    description:
      "Our products are designed to support your well-being while promoting fairness across the entire supply chain. From ethical sourcing to thoughtful packaging, every decision puts people first.",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM_ORGANICS_13JULY21_0707_1-copy.jpg?crop=center&height=600&v=1659156816&width=600",
  },
  {
    title: "High Standards",
    description:
      "We don’t compromise when it comes to quality. Every material we use meets rigorous benchmarks for safety, durability, and environmental responsibility.",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/05_1920x1200_d2f0d139-b38e-4c41-ac73-83e9590b2910.jpg?crop=center&height=600&v=1659476803&width=600",
  },
  {
    title: "Mimimized Impact",
    description:
      "Sustainability is built into everything we do, from eco-friendly materials to low-waste manufacturing and recyclable packaging. We’re constantly evolving to reduce our footprint.",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-HAIR-MASK3.jpg?crop=center&height=600&v=1659211482&width=600",
  },
];

const blogPosts = [
  {
    tag: "COMPANY",
    title: "Our Sustainable Skincare Packaging",
    date: "Aug 5, 2022",
    excerpt:
      "All product imagery and descriptions belong to and have been graciously provided by OM Organics and are displayed for demonstration purposes only. You can buy their products on their online store. You are not...",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/articles/07_1920x1200_f1564577-9723-4bfc-af82-b3e7861cd8b6.jpg?crop=center&height=566&v=1659751339&width=850",
  },
  {
    tag: "HOW TOS",
    title: "How to Pick the Perfect Mask",
    date: "Aug 5, 2022",
    excerpt:
      "All product imagery and descriptions belong to and have been graciously provided by OM Organics and are displayed for demonstration purposes only. You can buy their products on their online store. You are not...",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/articles/OM_ORGANICS_13JULY21_0342-copy.jpg?crop=center&height=566&v=1659749119&width=850",
  },
];

const pressQuotes = [
  {
    source: "FAST COMPANY",
    quote: "A must-have if you're putting together the perfect skin-care arsenal",
  },
  {
    source: "VOGUE",
    quote: "From ingredients to packaging, Bloom is the great example of less is more",
  },
  {
    source: "allure",
    quote: "Incredible and absolutely luxurious. Highly recommended",
  },
  {
    source: "BAZAAR",
    quote: "A must-have if you're putting together the perfect skin-care arsenal",
  },
];

function CtaButton({ text = "Shop now" }) {
  return (
    <button className="ayurvibe-cta ayurvibe-btn inline-flex items-center bg-lime px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
      {text}
    </button>
  );
}

function ProductCard({ image, name }) {
  return (
    <article className="ayurvibe-productCard ayurvibe-card group">
      <img src={image} alt={name} className="ayurvibe-productImage ayurvibe-image h-44 w-full object-cover sm:h-56" />
      <h4 className="ayurvibe-productTitle mt-2 text-xs font-medium text-[#1f1f1f] sm:text-sm">{name}</h4>
      <p className="ayurvibe-productPrice text-[11px] text-[#666]">$34.00</p>
    </article>
  );
}

function OverlayTile({ image, title }) {
  return (
    <article className="ayurvibe-overlayTile ayurvibe-tile relative h-56 overflow-hidden sm:h-72">
      <img src={image} alt={title} className="ayurvibe-overlayImage ayurvibe-image h-full w-full object-cover" />
      <div className="ayurvibe-overlayShade absolute inset-0 bg-black/25" />
      <div className="ayurvibe-overlayContent absolute bottom-4 left-4">
        <h3 className="ayurvibe-overlayTitle mb-2 text-lg font-medium text-white">{title}</h3>
        <CtaButton />
      </div>
    </article>
  );
}

function ShowcaseCard({ badge, title, subtitle, image }) {
  return (
    <article className="ayurvibe-showcaseCard relative overflow-hidden">
      <div
        className="ayurvibe-showcaseVisual absolute inset-0"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="ayurvibe-showcaseShade absolute inset-0" />
      <div className="ayurvibe-showcaseContent relative z-10 flex h-full flex-col items-center justify-end px-6 pb-8 text-center text-white">
        <p className="ayurvibe-showcaseBadge uppercase tracking-[0.08em]">{badge}</p>
        <h3 className="ayurvibe-showcaseTitle mt-2 leading-[1.05]">{title}</h3>
        <p className="ayurvibe-showcaseSubtitle mt-3">{subtitle}</p>
        <button className="ayurvibe-showcaseCta mt-6 bg-[#c9e79a] px-8 py-4 text-black">Shop now</button>
      </div>
    </article>
  );
}

function ArrivalCard({ product }) {
  return (
    <article className="ayurvibe-arrivalCard shrink-0">
      <div className="ayurvibe-arrivalImageWrap relative overflow-hidden bg-[#e9e9e9]">
        <a href="/product">
          <img src={product.image} alt={product.name} className="ayurvibe-arrivalImage ayurvibe-image h-full w-full object-cover" />
        </a>
        <div className="ayurvibe-arrivalBadges absolute left-2 top-2 flex gap-1">
          {product.badgeAlt ? <span className="ayurvibe-arrivalBadge is-sale">{product.badgeAlt}</span> : null}
          <span className="ayurvibe-arrivalBadge">{product.badge}</span>
        </div>
        <button
          className="ayurvibe-arrivalQuickIcon absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#0f3a43] bg-[#ececec] md:hidden"
          aria-label={`Quick view ${product.name}`}
        >
          <span className="text-sm">◉</span>
        </button>
      </div>
      <div className="ayurvibe-arrivalMeta px-2 pt-3 text-center">
        <h3 className="ayurvibe-arrivalTitle text-[#2f474d]"><a href="/product">{product.name}</a></h3>
        <p className={`ayurvibe-arrivalPrice mt-1 ${product.sale ? "text-[#d63a34]" : "text-[#2f474d]"}`}>{product.price}</p>
        <p className="ayurvibe-arrivalSizes mt-1 text-[#8a8a8a]">{product.sizes}</p>
      </div>
    </article>
  );
}

function SkinConcernCard({ card }) {
  return (
    <article className="ayurvibe-skinConcernCard relative overflow-hidden">
      <img src={card.image} alt={card.title} className="ayurvibe-skinConcernImage ayurvibe-image h-full w-full object-cover" />
      <div className="ayurvibe-skinConcernShade absolute inset-0" />
      <div className="ayurvibe-skinConcernContent absolute bottom-7 left-1/2 z-10 w-[88%] -translate-x-1/2 text-center text-white">
        <h3 className="ayurvibe-skinConcernTitle">{card.title}</h3>
        <button className="ayurvibe-skinConcernCta">Browse products</button>
      </div>
    </article>
  );
}

function ShopTypeCard({ card }) {
  return (
    <article className="ayurvibe-shopTypeCard shrink-0 overflow-hidden bg-[#ececec]">
      <img src={card.image} alt={card.title} className="ayurvibe-shopTypeImage ayurvibe-image h-full w-full object-cover" />
      <div className="ayurvibe-shopTypeFooter flex items-center justify-between">
        <h3 className="ayurvibe-shopTypeTitle">{card.title}</h3>
        <span className="ayurvibe-shopTypeArrow">{">"}</span>
      </div>
    </article>
  );
}

export default function HomePage({ cartCount = 0 }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-home min-h-screen bg-sand font-sans text-[#111]">
      <section className="ayurvibe-hero ayurvibe-section mx-auto w-full">
        <div className="ayurvibe-heroWrap mx-auto w-full px-6 py-14 sm:px-10 lg:px-16">
          <div className="ayurvibe-heroContent">
            <p className="ayurvibe-heroEyebrow mb-3 text-xs tracking-[0.2em] text-[#2b4f57]">BEST SELLER</p>
            <h1 className="ayurvibe-heroTitle text-4xl font-medium leading-[1.05] text-[#113b43] sm:text-5xl lg:text-[clamp(4rem,5vw,5.3rem)]">
              Brighten Up
            </h1>
            <p className="ayurvibe-heroSubtitle mt-5 max-w-[680px] text-lg text-[#1f444b] sm:text-xl lg:text-[clamp(1.5rem,1.7vw,2rem)]">
              The wonders of a clay mask without the drying effects.
            </p>
            <div className="ayurvibe-heroAction mt-8">
              <button className="ayurvibe-heroCta inline-flex items-center bg-[#083942] px-8 py-4 text-base font-medium text-[#d5e8b1] sm:text-lg">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="ayurvibe-showcase ayurvibe-container ayurvibe-section mx-auto max-w-[1536px] bg-[#ececec] px-4 pb-6 pt-8">
        <div className="ayurvibe-showcaseIntro px-3 text-center text-[#0e353c]">
          <h2 className="ayurvibe-showcaseHeading leading-tight">
            <span className="mr-2">{"\u{1F44B}"}</span>Hi, we&apos;re Glimmer.
          </h2>
          <p className="ayurvibe-showcaseCopy mx-auto mt-3 max-w-[19em] leading-[1.45]">
            This is a demo of the Glimmer Shopify theme. All product imagery and description have been kindly
            provided by <span className="underline">Om Organics.</span>
          </p>
        </div>
        <div className="ayurvibe-showcaseGrid mt-6 grid gap-4">
          {showcaseTiles.map((tile) => (
            <ShowcaseCard
              key={tile.title}
              badge={tile.badge}
              title={tile.title}
              subtitle={tile.subtitle}
              image={tile.image}
            />
          ))}
        </div>
      </section>

      <section className="ayurvibe-summerStrip ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec]">
        <div className="ayurvibe-summerStripTrack mx-auto flex w-full items-center justify-between gap-3 px-3 py-4">
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/pure-calm-face-elixir3_3814973c-9be6-4085-b950-fc63bf1b6bfc.jpg?v=1700000949&width=400"
            alt="Pure Calm Face Elixir"
            className="ayurvibe-summerStripImage ayurvibe-image h-20 w-20 object-cover"
          />
          <p className="ayurvibe-summerStripText text-center text-[1.1rem] leading-tight text-[#151515]">
            Get our summer oil!
          </p>
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/rosehip-face-oil3_705be2a5-abc8-4db2-b65b-c8c778559ae1.jpg?v=1700000844&width=320"
            alt="Rosehip Face Oil"
            className="ayurvibe-summerStripImage ayurvibe-image h-20 w-20 object-cover"
          />
          <p className="ayurvibe-summerStripText hidden text-center text-[1.1rem] leading-tight text-[#151515] md:block">
            Time for that summer glow!
          </p>
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/pure-calm-face-elixir3_3814973c-9be6-4085-b950-fc63bf1b6bfc.jpg?v=1700000949&width=400"
            alt="Summer glow oil"
            className="ayurvibe-summerStripImage hidden ayurvibe-image h-20 w-20 object-cover md:block"
          />
        </div>
      </section>

      <section className="ayurvibe-bundle ayurvibe-container ayurvibe-section mx-auto max-w-[1536px] bg-[#ececec] px-4 pb-10 pt-5">
        <div className="ayurvibe-bundleLayout">
          <div className="ayurvibe-bundleMain">
            <div className="ayurvibe-bundleIntro">
              <h2 className="ayurvibe-bundleTitle text-[#0f3340]">Latest Skincare Bundle</h2>
              <p className="ayurvibe-bundleSubtitle text-[#1a1a1a]">
                Stay soft and smooth with our head-to-toe hydration set. Purchase the bundle for savings!
              </p>
              <button className="ayurvibe-bundleCta border border-[#4d6670] text-[#143f4a]">Shop bundle</button>
            </div>

            <img
              src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-FW-21--13_websize.jpg?v=1659476866&width=1000"
              alt="Skincare bundle"
              className="ayurvibe-bundleHero ayurvibe-image w-full object-cover"
            />
          </div>

          <div className="ayurvibe-bundleProducts">
            <div className="ayurvibe-bundleList bg-transparent">
              {bundleProducts.map((product) => (
                <article key={product.name} className="ayurvibe-bundleItem flex items-start gap-4 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="ayurvibe-bundleItemImage ayurvibe-image object-cover"
                  />
                  <div className="ayurvibe-bundleItemContent">
                    <h3 className="ayurvibe-bundleItemTitle text-[#0f3340]"><a href="/product">{product.name}</a></h3>
                    <p className="ayurvibe-bundleItemPrice mt-1 text-[#0f3340]">
                      {product.compareAt ? (
                        <span className="mr-1 text-[#7b7b7b] line-through">{product.compareAt}</span>
                      ) : null}
                      <span className={product.compareAt ? "text-[#cf3027]" : ""}>{product.price}</span>
                    </p>
                    <button className="ayurvibe-bundleQuickView mt-3 border border-[#bfc7cb] bg-[#ececec] text-[#1a1a1a]">
                      Quick View
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ayurvibe-newArrivals ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec] px-4 pb-8 pt-5">
        <div className="ayurvibe-newArrivalsHeader mb-4 flex items-center justify-between">
          <h2 className="ayurvibe-newArrivalsTitle text-[#0f3340]">New Arrivals</h2>
          <div className="ayurvibe-newArrivalsArrows hidden items-center gap-4 text-[#31484f] md:flex">
            <button className="ayurvibe-arrowBtn opacity-35" aria-label="Previous arrivals">
              {"<"}
            </button>
            <button className="ayurvibe-arrowBtn" aria-label="Next arrivals">
              {">"}
            </button>
          </div>
        </div>

        <div className="ayurvibe-newArrivalsTrack flex gap-3 overflow-x-auto pb-1">
          {arrivalProducts.map((product) => (
            <ArrivalCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="ayurvibe-scrubSale ayurvibe-container ayurvibe-section mx-auto max-w-[1920px]">
        <div className="ayurvibe-scrubSaleOverlay mx-auto">
          <div className="ayurvibe-scrubSaleContent">
            <div className="ayurvibe-scrubSaleLeft">
              <p className="ayurvibe-scrubSaleEyebrow">Save up to</p>
              <h2 className="ayurvibe-scrubSalePercent">
                <span>60</span>
                <span className="ayurvibe-scrubSalePercentSign">%</span>
              </h2>
              <p className="ayurvibe-scrubSaleFineprint">*Ends March 15, 2023, 11:59 PST. T&amp;C&apos;s Apply</p>
            </div>
            <div className="ayurvibe-scrubSaleDivider" />
            <div className="ayurvibe-scrubSaleRight">
              <h3 className="ayurvibe-scrubSaleTitle">Surprise Summer Sale</h3>
              <p className="ayurvibe-scrubSaleSubtitle">Get radiant looking skin this summer for a great price!</p>
              <button className="ayurvibe-scrubSaleCta">Save now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ayurvibe-skinConcerns ayurvibe-container ayurvibe-section mx-auto max-w-[1536px] bg-[#ececec] px-3 pb-8 pt-5">
        <h2 className="ayurvibe-skinConcernsHeading text-[#0f3340]">Shop by Skin Concern</h2>
        <div className="ayurvibe-skinConcernsGrid mt-4 grid gap-2">
          {skinConcernCards.map((card) => (
            <SkinConcernCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="ayurvibe-shopMinisPromo ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec] px-4 pb-8 pt-4">
        <div className="ayurvibe-shopMinisPromoLayout">
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/13.jpg?crop=center&height=1000&v=1659478027&width=1000"
            alt="Shop Minis"
            className="ayurvibe-shopMinisPromoImage ayurvibe-image w-full object-cover"
          />
          <div className="ayurvibe-shopMinisPromoContent text-[#0f3340]">
            <h2 className="ayurvibe-shopMinisPromoTitle">Shop Minis</h2>
            <p className="ayurvibe-shopMinisPromoSubtitle">Purchase 5 or more and save 20%</p>
            <p className="ayurvibe-shopMinisPromoCopy">
              Choose any 5 from our selection of Minis or get a Minis Care kit for savings on a complete routine!
            </p>
            <div className="ayurvibe-shopMinisPromoActions">
              <button className="ayurvibe-shopMinisPromoCta is-primary">Shop Minis</button>
              <button className="ayurvibe-shopMinisPromoCta is-secondary">Shop Kits</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ayurvibe-shopType ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec] px-4 pb-8 pt-4">
        <div className="ayurvibe-shopTypeHeader mb-4 flex items-center justify-between">
          <h2 className="ayurvibe-shopTypeHeading text-[#0f3340]">Shop by type</h2>
          <div className="ayurvibe-shopTypeArrows hidden items-center gap-4 md:flex">
            <button className="ayurvibe-arrowBtn opacity-35" aria-label="Previous types">
              {"<"}
            </button>
            <button className="ayurvibe-arrowBtn" aria-label="Next types">
              {">"}
            </button>
          </div>
        </div>
        <div className="ayurvibe-shopTypeTrack flex gap-3 overflow-x-auto pb-1">
          {shopTypeCards.map((card) => (
            <ShopTypeCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="ayurvibe-newArrivals ayurvibe-bestSeller ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec] px-4 pb-8 pt-5">
        <div className="ayurvibe-newArrivalsHeader mb-4 flex items-center justify-between">
          <h2 className="ayurvibe-newArrivalsTitle text-[#0f3340]">Best sellers</h2>
          <div className="ayurvibe-newArrivalsArrows hidden items-center gap-4 text-[#31484f] md:flex">
            <button className="ayurvibe-arrowBtn opacity-35" aria-label="Previous best sellers">
              {"<"}
            </button>
            <button className="ayurvibe-arrowBtn" aria-label="Next best sellers">
              {">"}
            </button>
          </div>
        </div>

        <div className="ayurvibe-newArrivalsTrack flex gap-3 overflow-x-auto pb-1">
          {bestSellerProducts.map((product) => (
            <ArrivalCard key={`best-${product.name}`} product={product} />
          ))}
        </div>
      </section>

      <section className="ayurvibe-featuredSplitGrid ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-black">
        <article className="ayurvibe-featuredSplitPanel ayurvibe-featuredSplitText bg-black text-white">
          <p className="ayurvibe-featuredSplitEyebrow">FEATURED</p>
          <h3 className="ayurvibe-featuredSplitTitle">Kaolin Radiant Cleansing Balm</h3>
          <p className="ayurvibe-featuredSplitCopy">
            For a deep, dewy, natural glow and skin that feels comfortably nourished.
          </p>
          <button className="ayurvibe-featuredSplitCta">Shop now</button>
        </article>

        <article className="ayurvibe-featuredSplitPanel">
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/07_ae2c51ae-b5e0-4078-9b43-404761ddadc4.jpg?crop=center&height=1000&v=1659216509&width=1000"
            alt="Kaolin Radiant Cleansing Balm"
            className="ayurvibe-featuredSplitImage ayurvibe-image h-full w-full object-cover"
          />
        </article>

        <article className="ayurvibe-featuredSplitPanel">
          <img
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-LIME-SAGE-WASH.jpg?crop=center&height=1000&v=1659211467&width=1000"
            alt="Silky Hand and Body Wash"
            className="ayurvibe-featuredSplitImage ayurvibe-image h-full w-full object-cover"
          />
        </article>

        <article className="ayurvibe-featuredSplitPanel ayurvibe-featuredSplitText bg-black text-white">
          <p className="ayurvibe-featuredSplitEyebrow">FEATURED</p>
          <h3 className="ayurvibe-featuredSplitTitle">Silky Hand + Body Wash</h3>
          <p className="ayurvibe-featuredSplitCopy">
            We&apos;ve mastered the body wash. Ours rinses away beautifully without stripping your skin of healthy oils.
          </p>
          <button className="ayurvibe-featuredSplitCta">Shop now</button>
        </article>
      </section>

      <section className="ayurvibe-quoteSpot ayurvibe-container ayurvibe-section mx-auto max-w-[1920px] bg-[#ececec] px-4 pb-8 pt-5">
        <div className="ayurvibe-quoteSpotLayout relative">
          <div className="ayurvibe-quoteSpotVisualWrap">
            <img
              src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-FW-21--2_websize.jpg?crop=center&height=1000&v=1659476868&width=1000"
              alt="Best of Om"
              className="ayurvibe-quoteSpotImage ayurvibe-image w-full object-cover"
            />
            <p className="ayurvibe-quoteSpotLabel text-[#153f48]">Best of Om</p>
          </div>

          <div className="ayurvibe-quoteSpotArrows">
            <button className="ayurvibe-quoteSpotArrow" aria-label="Previous review">
              {"<"}
            </button>
            <button className="ayurvibe-quoteSpotArrow" aria-label="Next review">
              {">"}
            </button>
          </div>

          <div className="ayurvibe-quoteSpotContent text-[#152f35]">
            <p className="ayurvibe-quoteSpotStars">★★★★★</p>
            <blockquote className="ayurvibe-quoteSpotQuote">
              &quot;It is gentle and makes my skin feel much more even, firm, and hydrated. I absolutely love it!&quot;
            </blockquote>
            <p className="ayurvibe-quoteSpotAuthor">– Lissa B.</p>
          </div>
        </div>
      </section>

      <section className="ayurvibe-whyChoose ayurvibe-container ayurvibe-section mx-auto max-w-[1536px] bg-[#ececec] px-4 pb-8 pt-5">
        <h2 className="ayurvibe-whyChooseHeading text-[#0f3340]">Why choose us</h2>
        <div className="ayurvibe-whyChooseGrid mt-4 grid gap-4">
          {whyChooseCards.map((card) => (
            <article key={card.title} className="ayurvibe-whyChooseCard">
              <img src={card.image} alt={card.title} className="ayurvibe-whyChooseImage ayurvibe-image w-full object-cover" />
              <div className="ayurvibe-whyChooseBody">
                <h3 className="ayurvibe-whyChooseTitle text-[#1b1f23]">{card.title}</h3>
                <p className="ayurvibe-whyChooseText text-[#34383d]">{card.description}</p>
                <button className="ayurvibe-whyChooseCta">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ayurvibe-blog ayurvibe-container ayurvibe-section mx-auto max-w-[1536px] bg-[#ececec] px-4 pb-8 pt-5">
        <div className="ayurvibe-blogHeader">
          <h2 className="ayurvibe-blogHeading text-[#0f3340]">From the blog</h2>
          <a className="ayurvibe-blogViewAll text-[#153f48]" href="#">
            View all posts
          </a>
        </div>

        <div className="ayurvibe-blogGrid mt-4 grid gap-5">
          {blogPosts.map((post) => (
            <article key={post.title} className="ayurvibe-blogCard">
              <img src={post.image} alt={post.title} className="ayurvibe-blogImage ayurvibe-image w-full object-cover" />
              <div className="ayurvibe-blogBody bg-[#ececec]">
                <span className="ayurvibe-blogTag">{post.tag}</span>
                <h3 className="ayurvibe-blogTitle text-[#122f36]">{post.title}</h3>
                <p className="ayurvibe-blogDate text-[#1e373d]">{post.date}</p>
                <p className="ayurvibe-blogExcerpt text-[#1f363c]">{post.excerpt}</p>
                <a className="ayurvibe-blogReadMore text-[#153f48]" href="#">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ayurvibe-communityPress ayurvibe-container ayurvibe-section mx-auto max-w-[1920px]">
        <div className="ayurvibe-communityPressTop bg-[#d9e3eb] px-4 py-5">
          <div className="ayurvibe-communityPressGrid mx-auto grid gap-4">
            {pressQuotes.map((item) => (
              <article key={item.source} className="ayurvibe-communityPressItem text-[#1f3a42]">
                <h3 className="ayurvibe-communityPressSource">{item.source}</h3>
                <p className="ayurvibe-communityPressQuote">"{item.quote}"</p>
              </article>
            ))}
          </div>
        </div>

        <div className="ayurvibe-communityPressHero">
          <div className="ayurvibe-communityPressHeroOverlay">
            <p className="ayurvibe-communityPressEyebrow">JOIN THE COMMUNITY</p>
            <h3 className="ayurvibe-communityPressTitle">
              Share your skincare routine with us on Instagram with the tag #GlowRoutine
            </h3>
            <button className="ayurvibe-communityPressCta">Follow us</button>
          </div>
        </div>

        <div className="ayurvibe-communityPressBottom">
          <p className="ayurvibe-communityPressBottomText">Pure, plant-based, totally clean skincare</p>
        </div>
      </section>

      
      </main>
      <Footer />
    </>
  );
}
