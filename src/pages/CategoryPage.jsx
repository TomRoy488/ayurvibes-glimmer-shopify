import Header from "../components/Header";
import Footer from "../components/Footer";

const categoryProducts = [
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
    badge: "Sale",
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
    name: "Charcoal + Matcha Detoxifying Face Mask",
    price: "from $20.00",
    sizes: "3 sizes",
    badge: "Best seller",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=750&v=1657915166&width=500",
  },
];

export default function CategoryPage({ cartCount = 0, onAddToCart = () => {} }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="border-b border-[#cad2d4] pb-4 md:pb-5">
            <p className="m-0 text-[0.72rem] tracking-[0.08em] text-[#36575f]">COLLECTION</p>
            <h1 className="m-[8px_0_0] text-[2rem] font-normal leading-[1.06] text-[#123841] md:text-[2.45rem]">Face</h1>
            <p className="m-[8px_0_0] text-[1rem] text-[#44626a]">Clean, plant-based formulas for hydration, clarity, and glow.</p>
          </section>

          <section className="mt-5 flex flex-wrap items-center gap-2 border-b border-[#cad2d4] pb-4 md:mt-6">
            <button className="min-h-[34px] border border-[#bbc8cb] bg-[#e7edef] px-3 text-[0.85rem] text-[#284952]">Filter</button>
            <button className="min-h-[34px] border border-[#bbc8cb] bg-[#e7edef] px-3 text-[0.85rem] text-[#284952]">Sort: Featured</button>
            <span className="ml-auto text-[0.9rem] text-[#4a686f]">{categoryProducts.length} products</span>
          </section>

          <section className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
            {categoryProducts.map((product) => (
              <article key={product.name} className="bg-transparent">
                <div className="relative overflow-hidden bg-[#e9e9e9]">
                  <a href="/product">
                    <img src={product.image} alt={product.name} className="h-[15rem] w-full object-cover md:h-[21rem]" />
                  </a>
                  <span className="absolute left-2 top-2 border border-[#1f444b] bg-[#ececec] px-[4px] py-[1px] text-[0.62rem] text-[#1f444b]">
                    {product.badge}
                  </span>
                </div>
                <div className="px-1 pt-3 text-center">
                  <h2 className="m-0 text-[1rem] font-normal leading-[1.35] text-[#2f474d]"><a href="/product">{product.name}</a></h2>
                  <p className="m-[4px_0_0] text-[0.9rem] text-[#2f474d]">{product.price}</p>
                  <p className="m-[3px_0_0] text-[0.82rem] text-[#8a8a8a]">{product.sizes}</p>
                  <button
                    className="mt-2 min-h-[30px] border border-[#bcc8cc] bg-[#e7edef] px-3 text-[0.82rem] text-[#284952]"
                    onClick={() =>
                      onAddToCart({
                        id: product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        name: product.name,
                        price: Number(product.price.replace(/[^\d.]/g, "")) || 15,
                        size: "60 ml",
                        quantity: 1,
                        image: product.image,
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
