import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const productImages = [
  "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?v=1657915153&width=750",
  "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion2.jpg?v=1657915152&width=750",
  "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion3.jpg?v=1657915153&width=750",
  "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion4.jpg?v=1657915152&width=750",
  "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion5.jpg?v=1657915153&width=750",
];

const sizeOptions = ["60 ml", "80 ml", "120 ml"];

const recommendedProducts = [
  {
    name: "Best of Om",
    price: "$106.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/best-of-om1.jpg?crop=center&height=750&v=1657915131&width=500",
  },
  {
    name: "Argan + Tucuma Lip Butter",
    compareAt: "$15.00",
    price: "$12.75",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/argan-tucuma-lip-butter1.jpg?crop=center&height=750&v=1657915121&width=500",
    badges: ["Sale", "New"],
  },
  {
    name: "Flower Child Scented Roll On",
    price: "$22.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/flower-child-scented-roll-on1.jpg?crop=center&height=750&v=1657915222&width=500",
  },
];

const accordions = [
  {
    title: "Description",
    content:
      "All product imagery and descriptions have been kindly provided by Om Skin. Packed with an array of herbs used specifically for soothing inflamed skin. For maximum potency, we've avoided all heat in our process. The result is pure plant magic: a rich and creamy raw emulsion that removes impurities while supporting sensitive and reactive skin types. Soap free and emulsifier free to leave skin soft, hydrated and refreshed. An ideal solution for sunburns or general irritations.",
  },
  {
    title: "How to use",
    content:
      "Apply 1-2 pumps to dry skin and massage gently across face and neck. Add lukewarm water to emulsify, then rinse clean. Use morning and evening as the first step in your routine.",
  },
  {
    title: "Ingredients",
    content:
      "Blue Azulene, aloe leaf juice, chamomile extract, glycerin, and plant-derived cleansing agents selected to calm and hydrate while removing makeup and buildup.",
  },
  {
    title: "Product Care",
    content:
      "Store in a cool, dry place away from direct sunlight. Keep cap tightly closed between uses to maintain freshness and formula stability.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Orders ship within 1-2 business days. Standard delivery timelines vary by region. If your item arrives damaged or incorrect, contact support and we will help resolve it.",
  },
];

const valueItems = [
  {
    title: "Cruelty Free",
    description: "Products and ingredients are never tested on animals",
    icon: "heart",
  },
  {
    title: "Vegan",
    description: "Pure, plant-based, totally clean Skincare.",
    icon: "leaf",
  },
  {
    title: "Certified",
    description: "Certified by certCLEAN for toxin-free skin care.",
    icon: "globe",
  },
];

const faqItems = [
  {
    question: "What skin types are your products suitable for?",
    answer:
      "Our formulas are designed for most skin types, including dry, combination, sensitive, and mature skin. We recommend patch testing before first use.",
  },
  {
    question: "Who is this product best suited for?",
    answer:
      "It is ideal for anyone looking for a gentle cleanser that supports hydration while helping calm reactive or irritation-prone skin.",
  },
  {
    question: "Are your products safe for all ages and pregnancies?",
    answer:
      "Most products are suitable for broad use, but ingredient sensitivities can vary. For pregnancy or medical concerns, consult your healthcare professional.",
  },
  {
    question: "Is your packaging recyclable?",
    answer:
      "Yes. Most outer cartons and glass containers are recyclable where facilities exist. Please check your local recycling guidelines for pump components.",
  },
  {
    question: "Are your products all-natural/organic?",
    answer:
      "We prioritize plant-based and clean ingredients with high safety standards. Selected formulas include certified organic ingredients where possible.",
  },
];

const alsoLikeProducts = [
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
    sale: true,
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/marula-face-oil5.jpg?crop=center&height=750&v=1657916585&width=500",
  },
  {
    name: "Rosehip + Black Cumin Clarifying Face Oil",
    price: "from $18.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/rosehip-face-oil3_705be2a5-abc8-4db2-b65b-c8c778559ae1.jpg?v=1700000844&width=500",
  },
  {
    name: "Youth Infusion Hydrating Face Elixir",
    price: "from $18.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/youth-infusion-face-elixir5_d09fb103-bdf3-45e3-9040-cb84ea1b23ea.jpg?crop=center&height=750&v=1699387533&width=500",
  },
  {
    name: "Pure + Calm Infusion Refining Face Elixir",
    price: "from $18.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/pure-calm-face-elixir3_3814973c-9be6-4085-b950-fc63bf1b6bfc.jpg?v=1700000949&width=500",
  },
  {
    name: "Charcoal + Matcha Detoxifying Face Mask",
    price: "from $20.00",
    sizes: "3 sizes",
    badge: "New",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=750&v=1657915166&width=500",
  },
];

const DEFAULT_OPEN_PANELS = ["Description", "Pairs well with"];

function ValueIcon({ type }) {
  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M11.926 18.874c4.609-4.015 8.176-7.694 8.176-10.661 0-2.151-1.577-3.713-3.75-3.713-1.898 0-3.477 1.393-4.426 2.989C10.977 5.893 9.398 4.5 7.5 4.5c-2.173 0-3.75 1.561-3.75 3.713 0 2.967 3.567 6.646 8.176 10.661z"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13.637 7.536A5.79 5.79 0 0 0 12 2.583a5.791 5.791 0 0 0-1.637 4.953"
          stroke="currentColor"
          strokeWidth=".987"
          strokeMiterlimit="6.667"
        />
        <path
          d="M12 19.328A7.328 7.328 0 0 0 4.673 12 7.327 7.327 0 0 0 12 19.328zm0 0A7.328 7.328 0 0 0 19.328 12 7.328 7.328 0 0 0 12 19.328z"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeMiterlimit="6.667"
        />
        <path
          d="M12 11.263a5.046 5.046 0 0 0-5.046-5.046A5.046 5.046 0 0 0 12 11.263zm0 0a5.046 5.046 0 0 0 5.046-5.046A5.046 5.046 0 0 0 12 11.263z"
          stroke="currentColor"
          strokeWidth=".708"
          strokeMiterlimit="6.667"
        />
        <path
          d="M12 11.263a5.046 5.046 0 0 0-5.046-5.046A5.046 5.046 0 0 0 12 11.263zm0 0a5.046 5.046 0 0 0 5.046-5.046A5.046 5.046 0 0 0 12 11.263zM12 22.068V11.263"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeMiterlimit="6.667"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.373a8.373 8.373 0 1 0 0-16.746 8.373 8.373 0 0 0 0 16.746zM4.244 9.421h15.512M4.244 14.58h15.512"
        stroke="currentColor"
        strokeWidth=".987"
        strokeMiterlimit="10"
      />
      <path
        d="M12 3.483c4.27 5.678 4.27 11.355 0 17.034M12 3.483c-4.27 5.678-4.27 11.355 0 17.034"
        stroke="currentColor"
        strokeWidth=".987"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

function PerkItem({ children, icon }) {
  return (
    <li className="ayurvibe-productPerk productpage-perk flex items-start gap-3 text-[22px] leading-[1.4] text-[#1b373f] md:text-[13px]">
      <span
        className="ayurvibe-productPerkIcon mt-[2px] inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[#1b373f]"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="ayurvibe-productPerkText">{children}</span>
    </li>
  );
}

function QuickIcon() {
  return (
    <span className="ayurvibe-productQuickIcon inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#184751] bg-[#ececec]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#184751]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2.25 12S5.4 6.75 12 6.75 21.75 12 21.75 12 18.6 17.25 12 17.25 2.25 12 2.25 12Z" />
        <circle cx="12" cy="12" r="2.9" />
      </svg>
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <article className="ayurvibe-productRecommendCard productpage-recommendCard shrink-0">
      <div className="ayurvibe-productRecommendMedia relative overflow-hidden bg-[#ececec]">
        <a href="/product">
          <img src={product.image} alt={product.name} className="ayurvibe-productRecommendImage h-full w-full object-cover" />
        </a>
        <div className="ayurvibe-productRecommendBadges absolute left-2 top-2 flex gap-1">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className={`ayurvibe-productRecommendBadge border px-[4px] py-[1px] text-[11px] leading-none ${
                badge === "Sale" ? "border-[#dc3f37] text-[#dc3f37]" : "border-[#5d6b70] text-[#1f3f47]"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="ayurvibe-productRecommendQuick absolute bottom-2 right-2">
          <QuickIcon />
        </div>
      </div>
      <div className="ayurvibe-productRecommendMeta pt-3">
        <h3 className="ayurvibe-productRecommendTitle"><a href="/product">{product.name}</a></h3>
        <p className="ayurvibe-productRecommendPrice mt-1">
          {product.compareAt ? <span className="ayurvibe-productRecommendCompare mr-2 text-[#8b8f91] line-through">{product.compareAt}</span> : null}
          <span className={`ayurvibe-productRecommendCurrent ${product.compareAt ? "text-[#cf3027]" : ""}`}>{product.price}</span>
        </p>
        <button className="ayurvibe-productRecommendCta mt-3 hidden border border-[#c6ccce] bg-transparent px-3 py-[7px] text-[13px] text-[#253a40] md:inline-flex">
          Quick View
        </button>
      </div>
    </article>
  );
}

function AlsoLikeCard({ product }) {
  return (
    <article className="ayurvibe-arrivalCard ayurvibe-productAlsoLikeCard shrink-0">
      <div className="ayurvibe-arrivalImageWrap ayurvibe-productAlsoLikeImageWrap relative overflow-hidden bg-[#e9e9e9]">
        <a href="/product">
          <img src={product.image} alt={product.name} className="ayurvibe-arrivalImage ayurvibe-image h-full w-full object-cover" />
        </a>
        <div className="ayurvibe-arrivalBadges absolute left-2 top-2 flex gap-1">
          {product.badgeAlt ? <span className="ayurvibe-arrivalBadge is-sale">{product.badgeAlt}</span> : null}
          <span className="ayurvibe-arrivalBadge">{product.badge}</span>
        </div>
        <div className="absolute bottom-2 right-2 md:hidden">
          <QuickIcon />
        </div>
      </div>
      <div className="ayurvibe-arrivalMeta px-2 pt-3 text-center">
        <h3 className="ayurvibe-arrivalTitle text-[#2f474d]"><a href="/product">{product.name}</a></h3>
        <p className={`ayurvibe-arrivalPrice mt-1 ${product.sale ? "text-[#d63a34]" : "text-[#2f474d]"}`}>{product.price}</p>
        <p className="ayurvibe-arrivalSizes mt-1 text-[#8a8a8a]">{product.sizes}</p>
      </div>
    </article>
  );
}

export default function ProductPage({ cartCount = 0, onAddToCart = () => {} }) {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [openPanels, setOpenPanels] = useState(() => new Set(DEFAULT_OPEN_PANELS));
  const [openFaqPanels, setOpenFaqPanels] = useState(new Set());

  const togglePanel = (title) => {
    setOpenPanels((previous) => {
      const next = new Set(previous);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const toggleFaq = (question) => {
    setOpenFaqPanels((previous) => {
      const next = new Set(previous);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-productPage productpage min-h-screen bg-[#ececec] font-sans text-[#1f3e46]">
        <div className="ayurvibe-productContainer mx-auto max-w-[1240px] px-4 pb-12 pt-7 md:px-8 md:pt-9">
        <section className="ayurvibe-productHero productpage-topGrid grid grid-cols-1 gap-6 md:grid-cols-[1.5fr_1fr] md:items-start md:gap-10">
          <div className="ayurvibe-productHeroMain md:col-start-1 md:row-start-1">
            <div className="ayurvibe-productHeroVisual grid grid-cols-1 gap-6 md:grid-cols-[56px_minmax(0,1fr)] md:gap-4">
              <div className="ayurvibe-productThumbs hidden md:flex md:flex-col md:gap-2">
                {productImages.map((image) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`ayurvibe-productThumb overflow-hidden border ${selectedImage === image ? "border-[#2e4b54]" : "border-transparent"}`}
                    aria-label="Select product image"
                  >
                    <img src={image} alt="Blue Azul thumbnail" className="ayurvibe-productThumbImage h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="ayurvibe-productMedia">
                <div className="ayurvibe-productMobileGallery grid grid-cols-2 gap-[6px] md:hidden">
                  {productImages.map((image) => (
                    <button
                      key={image}
                      onClick={() => setSelectedImage(image)}
                      className="ayurvibe-productMobileGalleryItem aspect-square overflow-hidden bg-[#e4e4e4]"
                    >
                    <img src={image} alt="Blue Azul gallery image" className="ayurvibe-productMobileGalleryImage h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="ayurvibe-productDesktopImageWrap hidden overflow-hidden bg-[#e4e4e4] md:block">
                  <img
                    src={selectedImage}
                    alt="Blue Azul Soothing Cleansing Emulsion"
                    className="ayurvibe-productDesktopImage h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <section className="ayurvibe-productDetails mt-10 border-t border-[#d7d8d8] md:mt-7 md:border-t-0">
              <div className="ayurvibe-productDetailsMain">
                {accordions.map((item) => {
                  const isOpen = openPanels.has(item.title);
                  return (
                    <div key={item.title} className="ayurvibe-productAccordion border-b border-[#d0d2d3]">
                      <button
                        className="ayurvibe-productAccordionHeader flex w-full items-center justify-between py-5 text-left md:py-[14px]"
                        onClick={() => togglePanel(item.title)}
                        aria-expanded={isOpen}
                      >
                        <h2 className="ayurvibe-productAccordionTitle">{item.title}</h2>
                        <span className="ayurvibe-productAccordionIcon">{isOpen ? "-" : "+"}</span>
                      </button>
                      <div className={`ayurvibe-productAccordionContent ${isOpen ? "is-open" : ""}`}>
                        <p className="ayurvibe-productAccordionBody pb-5 md:max-w-[95%] md:pb-4">{item.content}</p>
                      </div>
                    </div>
                  );
                })}

                <div className="ayurvibe-productPairs border-b border-[#d0d2d3] pb-6">
                  <button
                    className="ayurvibe-productPairsHeader flex w-full items-center justify-between py-5 text-left md:py-[14px]"
                    onClick={() => togglePanel("Pairs well with")}
                    aria-expanded={openPanels.has("Pairs well with")}
                  >
                    <h2 className="ayurvibe-productPairsTitle">Pairs well with</h2>
                    <span className="ayurvibe-productPairsIcon">{openPanels.has("Pairs well with") ? "-" : "+"}</span>
                  </button>

                  <div className={`ayurvibe-productPairsContent ${openPanels.has("Pairs well with") ? "is-open" : ""}`}>
                    <div className="ayurvibe-productPairsTrack flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:gap-2 md:overflow-visible">
                      {recommendedProducts.map((product) => (
                        <ProductCard key={product.name} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="ayurvibe-productInfo md:col-start-2 md:row-start-1">
            <span className="ayurvibe-productBadge inline-flex">New</span>
            <h1 className="ayurvibe-productTitle mt-3">
              Blue Azul Soothing Cleansing Emulsion
            </h1>
            <p className="ayurvibe-productPrice mt-4">$15.00</p>
            <p className="ayurvibe-productSummary mt-8 max-w-[31ch] md:mt-6">
              Plump up, firm up and moisturize like you mean business with premium botanicals and intense hyaluronic
              power.
            </p>

            <p className="ayurvibe-productSizeLabel mt-8 md:mt-6">
              Size: <span className="ayurvibe-productSizeValue">{selectedSize}</span>
            </p>
            <div className="ayurvibe-productSizeOptions mt-3 grid grid-cols-3 gap-[8px] md:gap-[6px]">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`ayurvibe-productSizeOption productpage-sizeBtn ${
                    selectedSize === size
                      ? "border-[#31515a] bg-[#ececec] text-[#17363f]"
                      : "border-[#d1d5d7] bg-[#ececec] text-[#17363f]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="ayurvibe-productQuantityLabel mt-7 md:mt-5">Quantity</p>
            <div className="ayurvibe-productQtyWrap mt-3 inline-flex items-center border border-[#d1d5d7]">
              <button
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="ayurvibe-productQtyBtn productpage-qtyBtn"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="ayurvibe-productQtyValue productpage-qtyValue">{quantity}</span>
              <button
                onClick={() => setQuantity((value) => value + 1)}
                className="ayurvibe-productQtyBtn productpage-qtyBtn"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <p className="ayurvibe-productAvailabilityTitle mt-7 md:mt-5">Availability</p>
            <p className="ayurvibe-productAvailabilityText mt-1">Only 10 left. Order soon!</p>
            <div className="ayurvibe-productAvailabilityTrack mt-4 h-[4px] w-full bg-[#dfdfdf]">
              <div className="ayurvibe-productAvailabilityFill h-full w-[14%] bg-[#bb8020]" />
            </div>

            <button
              className="ayurvibe-productAddToBag mt-8 w-full md:mt-6"
              onClick={() =>
                onAddToCart({
                  id: "blue-azul",
                  name: "Blue Azul Soothing Cleansing Emulsion",
                  price: 15,
                  size: selectedSize,
                  quantity,
                  image: productImages[0],
                })
              }
            >
              Add to Bag
            </button>

            <div className="ayurvibe-productMetaBox mt-8 border border-[#ccd0d2] p-4 md:mt-5">
              <p className="ayurvibe-productMetaRow">
                <strong>Ideal for Skin Types:</strong> Dry, Mature, Sensitive, Combination
              </p>
              <div className="ayurvibe-productMetaDivider my-3 border-t border-[#ccd0d2]" />
              <p className="ayurvibe-productMetaRow">
                <strong>Scent:</strong> Natural hint of Vanilla
              </p>
            </div>

            <ul className="ayurvibe-productPerks mt-8 space-y-4 md:mt-5 md:space-y-3">
              <PerkItem
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 8.5 12 4l9 4.5v10L12 23l-9-4.5Z" />
                    <path d="M3 8.5 12 13l9-4.5M12 13V23" />
                  </svg>
                }
              >
                Free shipping over $50
              </PerkItem>
              <PerkItem
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2c4.6 1.6 7 5 7 9.2 0 4.4-3.1 8.1-7 10.8-3.9-2.7-7-6.4-7-10.8C5 7 7.4 3.6 12 2Z" />
                    <path d="m8 10 4 4 4-4" />
                  </svg>
                }
              >
                Orders ship carbon neutral (always)
              </PerkItem>
              <PerkItem
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M20 12c0 4.4-4 8-9 8-1.3 0-2.6-.2-3.7-.7L3 20.5l1.7-3A7.6 7.6 0 0 1 2 12c0-4.4 4-8 9-8s9 3.6 9 8Z" />
                    <path d="M7.5 10h8.8M7.5 13h6.4" />
                  </svg>
                }
              >
                Need help? <a href="#" className="ayurvibe-productContact underline">Contact us</a>
              </PerkItem>
            </ul>

            <button className="ayurvibe-productShare mt-8 inline-flex items-center gap-2 md:mt-6">
              <svg viewBox="0 0 24 24" className="ayurvibe-productShareIcon h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v11M7 8l5-5 5 5M6 13v7h12v-7" />
              </svg>
              Share
            </button>
          </aside>
        </section>

        <section className="ayurvibe-productValues mt-8 md:mt-10">
          <div className="ayurvibe-productValuesGrid grid grid-cols-1 justify-items-center gap-14 md:grid-cols-3 md:gap-6">
            {valueItems.map((item) => (
              <article key={item.title} className="ayurvibe-productValueItem text-center">
                <div className="ayurvibe-productValueIconWrap mx-auto">
                  <ValueIcon type={item.icon} />
                </div>
                <h3 className="ayurvibe-productValueTitle mt-5">{item.title}</h3>
                <p className="ayurvibe-productValueText mt-3">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ayurvibe-productPromise">
          <div className="ayurvibe-productPromiseMedia">
            <img
              src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/OM-SEPT-OCT-HAIR-MASK3.jpg?crop=center&height=1000&v=1659211482&width=1000"
              alt="Our Promise"
              className="ayurvibe-productPromiseImage"
            />
          </div>
          <div className="ayurvibe-productPromiseContent">
            <h2 className="ayurvibe-productPromiseTitle">Our Promise</h2>
            <div className="ayurvibe-productPromiseDivider" />
            <ul className="ayurvibe-productPromiseList">
              <li>Pure, plant-based, totally clean skincare</li>
              <li>No synthetic colour or fragrance</li>
              <li>No fillers, parabens or sulfates</li>
              <li>Cruelty-free, gluten-free, vegan</li>
              <li>Safe for moms-to-be</li>
            </ul>
          </div>
        </section>

        <section className="ayurvibe-productFaq">
          <h2 className="ayurvibe-productFaqTitle">FAQ</h2>
          <div className="ayurvibe-productFaqList">
            {faqItems.map((item) => {
              const isOpen = openFaqPanels.has(item.question);
              return (
                <article key={item.question} className="ayurvibe-productFaqItem">
                  <button
                    className="ayurvibe-productFaqTrigger"
                    onClick={() => toggleFaq(item.question)}
                    aria-expanded={isOpen}
                  >
                    <span className="ayurvibe-productFaqQuestion">{item.question}</span>
                    <span className="ayurvibe-productFaqIcon" aria-hidden="true">{isOpen ? "-" : "+"}</span>
                  </button>
                  <div className={`ayurvibe-productFaqContent ${isOpen ? "is-open" : ""}`}>
                    <p className="ayurvibe-productFaqAnswer">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="ayurvibe-productVideoBanner">
          <video
            className="ayurvibe-productVideoBannerMedia"
            src="https://stiletto-theme-glimmer.myshopify.com/cdn/shop/videos/c/vp/821c689aa5f246ebbc78e170286770e2/821c689aa5f246ebbc78e170286770e2.HD-1080p-2.5Mbps-8614083.mp4?v=0"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="ayurvibe-productVideoBannerOverlay">
            <h2 className="ayurvibe-productVideoBannerTitle">Better for Everyone</h2>
          </div>
        </section>

        <section className="ayurvibe-productAlsoLike ayurvibe-newArrivals">
          <div className="ayurvibe-productAlsoLikeHeader ayurvibe-newArrivalsHeader mb-4 flex items-center justify-between">
            <h2 className="ayurvibe-productAlsoLikeTitle ayurvibe-newArrivalsTitle text-[#0f3340]">You may also like</h2>
            <div className="ayurvibe-productAlsoLikeArrows hidden items-center gap-4 text-[#31484f] md:flex">
              <button className="ayurvibe-arrowBtn opacity-35" aria-label="Previous products">
                {"<"}
              </button>
              <button className="ayurvibe-arrowBtn" aria-label="Next products">
                {">"}
              </button>
            </div>
          </div>

          <div className="ayurvibe-productAlsoLikeTrack ayurvibe-newArrivalsTrack flex gap-3 overflow-x-auto pb-1">
            {alsoLikeProducts.map((product) => (
              <AlsoLikeCard key={product.name} product={product} />
            ))}
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
