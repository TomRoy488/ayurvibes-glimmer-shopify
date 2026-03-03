import Header from "../components/Header";
import Footer from "../components/Footer";

const fallbackItems = [
  {
    name: "Blue Azul Soothing Cleansing Emulsion",
    size: "80 ml",
    quantity: 1,
    price: 15,
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=540&v=1657915153&width=360",
  },
];

export default function CheckoutPage({ cartCount = 0, cartItems = [] }) {
  const items = cartItems.length ? cartItems : fallbackItems;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 7;
  const tax = subtotal * 0.101;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="border-b border-[#cad2d4] pb-4 md:pb-5">
            <p className="m-0 text-[0.72rem] tracking-[0.08em] text-[#36575f]">CHECKOUT</p>
            <h1 className="m-[8px_0_0] text-[2rem] font-normal leading-[1.06] text-[#123841] md:text-[2.45rem]">Secure Checkout</h1>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_360px] md:gap-10">
            <div className="space-y-4 md:space-y-5">
              <article className="border border-[#c8d1d3] bg-[#e7edef] p-4 md:p-5">
                <h2 className="m-0 text-[1.4rem] font-normal leading-[1.12] text-[#143840] md:text-[1.58rem]">Contact</h2>
                <input className="mt-3 h-11 w-full border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="Email address" />
              </article>

              <article className="border border-[#c8d1d3] bg-[#ececec] p-4 md:p-5">
                <h2 className="m-0 text-[1.4rem] font-normal leading-[1.12] text-[#143840] md:text-[1.58rem]">Shipping address</h2>
                <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="First name" />
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="Last name" />
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem] md:col-span-2" placeholder="Address" />
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="City" />
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="ZIP code" />
                </div>
              </article>

              <article className="border border-[#c8d1d3] bg-[#ececec] p-4 md:p-5">
                <h2 className="m-0 text-[1.4rem] font-normal leading-[1.12] text-[#143840] md:text-[1.58rem]">Payment</h2>
                <input className="mt-3 h-11 w-full border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="Card number" />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="MM / YY" />
                  <input className="h-11 border border-[#bcc8cc] bg-[#f1f4f5] px-3 text-[0.92rem]" placeholder="CVC" />
                </div>
              </article>
            </div>

            <aside className="border border-[#c8d1d3] bg-[#e7edef] p-4 md:p-5">
              <h2 className="m-0 text-[1.4rem] font-normal leading-[1.12] text-[#143840] md:text-[1.58rem]">Order summary</h2>
              <div className="mt-3">
                {items.map((item) => (
                  <div key={item.name} className="grid grid-cols-[70px_minmax(0,1fr)] gap-3 border-t border-[#ccd5d7] py-3">
                    <img src={item.image} alt={item.name} className="h-[88px] w-[70px] object-cover bg-[#e3e3e3]" />
                    <div>
                      <h3 className="m-0 text-[0.95rem] font-normal leading-[1.35] text-[#1e434b]">{item.name}</h3>
                      <p className="m-[4px_0_0] text-[0.84rem] text-[#6a7f84]">{item.size} x {item.quantity}</p>
                      <p className="m-[6px_0_0] text-[0.9rem] text-[#284b53]">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-1 border-t border-b border-[#c8d1d4] py-2">
                <div className="flex items-center justify-between text-[0.95rem] text-[#35575e]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[0.95rem] text-[#35575e]">
                  <span>Shipping</span>
                  <span>{shipping ? `$${shipping.toFixed(2)}` : "Free"}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[0.95rem] text-[#35575e]">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[1.12rem] text-[#163b45]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <a
                href="/order-confirmation"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center border-0 bg-[#083b43] text-[1rem] text-[#d7f2a3]"
              >
                Pay now
              </a>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
