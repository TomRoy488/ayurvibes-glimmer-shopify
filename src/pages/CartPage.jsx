import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const recommendedProducts = [
  {
    name: "Pink Coconut Hydrating Face Mist",
    price: "from $15.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut-face-mask6.jpg?crop=center&height=750&v=1657916053&width=500",
  },
  {
    name: "Rosehip + Black Cumin Clarifying Face Oil",
    price: "from $18.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/rosehip-face-oil3_705be2a5-abc8-4db2-b65b-c8c778559ae1.jpg?v=1700000844&width=500",
  },
  {
    name: "Charcoal + Matcha Detoxifying Face Mask",
    price: "from $20.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=750&v=1657915166&width=500",
  },
];

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

export default function CartPage({
  cartCount = 0,
  cartItems = [],
  onUpdateQuantity = () => {},
  onRemoveItem = () => {},
}) {
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 7;
  const total = subtotal + shipping;

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-cartPage min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="ayurvibe-cartContainer mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="ayurvibe-cartHeader border-b border-[#cad2d4] pb-4 md:pb-5">
            <p className="ayurvibe-cartEyebrow">SHOPPING BAG</p>
            <h1 className="ayurvibe-cartTitle">Your Cart</h1>
            <p className="ayurvibe-cartSubtitle">
              {cartItems.length} item{cartItems.length === 1 ? "" : "s"} in your bag
            </p>
          </section>

          <section className="ayurvibe-cartLayout mt-5 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_340px] md:gap-10">
            <div className="ayurvibe-cartItemsWrap">
              {cartItems.length === 0 ? (
                <div className="ayurvibe-cartEmpty border border-[#ccd4d6] bg-[#e6ebed] p-6">
                  <p className="text-[1rem] leading-[1.45] text-[#26474f]">Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="ayurvibe-cartItems">
                  {cartItems.map((item) => (
                    <article key={item.id} className="ayurvibe-cartItem border-b border-[#cad2d4] py-4 md:py-5">
                      <div className="ayurvibe-cartItemGrid">
                        <img src={item.image} alt={item.name} className="ayurvibe-cartItemImage" />

                        <div className="ayurvibe-cartItemMain">
                          <h2 className="ayurvibe-cartItemTitle">{item.name}</h2>
                          <p className="ayurvibe-cartItemMeta">Size: {item.size}</p>
                          <button
                            className="ayurvibe-cartRemove"
                            onClick={() => onRemoveItem(item.id, item.size)}
                            aria-label={`Remove ${item.name}`}
                          >
                            Remove
                          </button>
                        </div>

                        <div className="ayurvibe-cartQtyWrap">
                          <div className="ayurvibe-cartQtyControl">
                            <button
                              className="ayurvibe-cartQtyBtn"
                              onClick={() => onUpdateQuantity(item.id, item.size, -1)}
                              aria-label={`Decrease quantity for ${item.name}`}
                            >
                              -
                            </button>
                            <span className="ayurvibe-cartQtyValue">{item.quantity}</span>
                            <button
                              className="ayurvibe-cartQtyBtn"
                              onClick={() => onUpdateQuantity(item.id, item.size, 1)}
                              aria-label={`Increase quantity for ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <p className="ayurvibe-cartLinePrice">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <aside className="ayurvibe-cartSummary border border-[#cad2d4] bg-[#e8edee] p-4 md:p-5">
              <h2 className="ayurvibe-cartSummaryTitle">Order Summary</h2>

              <div className="ayurvibe-cartSummaryRows">
                <div className="ayurvibe-cartSummaryRow">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="ayurvibe-cartSummaryRow">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
                </div>
                <div className="ayurvibe-cartSummaryRow is-total">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <label className="ayurvibe-cartNoteLabel" htmlFor="cart-note">
                Add a note
              </label>
              <textarea
                id="cart-note"
                className="ayurvibe-cartNoteInput"
                rows={3}
                placeholder="Special instructions for delivery"
              />

              <a href="/checkout" className="ayurvibe-cartCheckout inline-flex items-center justify-center">
                Checkout
              </a>
              <p className="ayurvibe-cartShippingHint">Free shipping on orders over $50</p>
            </aside>
          </section>

          <section className="ayurvibe-cartRecommendations mt-9 md:mt-12">
            <h2 className="ayurvibe-cartRecommendationsTitle">You may also like</h2>
            <div className="ayurvibe-cartRecommendationsTrack">
              {recommendedProducts.map((product) => (
                <article key={product.name} className="ayurvibe-cartRecoCard">
                  <div className="ayurvibe-cartRecoImageWrap">
                    <a href="/product">
                      <img src={product.image} alt={product.name} className="ayurvibe-cartRecoImage" />
                    </a>
                  </div>
                  <h3 className="ayurvibe-cartRecoName"><a href="/product">{product.name}</a></h3>
                  <p className="ayurvibe-cartRecoPrice">{product.price}</p>
                  <button className="ayurvibe-cartRecoCta">Quick View</button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
