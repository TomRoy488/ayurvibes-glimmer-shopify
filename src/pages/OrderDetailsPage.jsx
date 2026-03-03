import Header from "../components/Header";
import Footer from "../components/Footer";

const orderItems = [
  {
    id: "blue-azul",
    name: "Blue Azul Soothing Cleansing Emulsion",
    details: "80 ml - Qty 1",
    price: "$15.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=540&v=1657915153&width=360",
  },
  {
    id: "marula-cactus",
    name: "Marula + Cactus Nourishing Face Oil",
    details: "30 ml - Qty 1",
    price: "$15.30",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/marula-face-oil5.jpg?crop=center&height=540&v=1657916585&width=360",
  },
];

const progressSteps = [
  { label: "Order placed", date: "February 18, 2026", done: true },
  { label: "Packed", date: "February 19, 2026", done: true },
  { label: "Shipped", date: "February 20, 2026", done: true },
  { label: "Delivered", date: "February 23, 2026", done: false },
];

export default function OrderDetailsPage({ cartCount = 0 }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-orderDetailsPage min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="ayurvibe-orderDetailsContainer mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="ayurvibe-orderDetailsHeader border-b border-[#cad2d4] pb-4 md:pb-5">
            <p className="ayurvibe-orderDetailsEyebrow">ACCOUNT</p>
            <h1 className="ayurvibe-orderDetailsTitle">Order Details</h1>
            <p className="ayurvibe-orderDetailsSubtitle">Order #GLM-48219</p>
          </section>

          <section className="ayurvibe-orderDetailsLayout mt-6 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_360px] md:gap-10">
            <div className="ayurvibe-orderDetailsMain">
              <article className="ayurvibe-orderDetailsCard border border-[#c8d1d3] bg-[#e7edef] p-4 md:p-5">
                <h2 className="ayurvibe-orderDetailsCardTitle">Tracking</h2>
                <p className="ayurvibe-orderDetailsTrackingLabel">
                  Current status: <span className="ayurvibe-orderDetailsTrackingStatus">Shipped</span>
                </p>
                <div className="ayurvibe-orderDetailsTimeline">
                  {progressSteps.map((step) => (
                    <div key={step.label} className="ayurvibe-orderDetailsTimelineRow">
                      <span className={`ayurvibe-orderDetailsDot ${step.done ? "is-done" : ""}`} aria-hidden="true" />
                      <div>
                        <p className="ayurvibe-orderDetailsTimelineTitle">{step.label}</p>
                        <p className="ayurvibe-orderDetailsTimelineDate">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="ayurvibe-orderDetailsCard mt-4 border border-[#c8d1d3] bg-[#ececec] p-4 md:mt-5 md:p-5">
                <h2 className="ayurvibe-orderDetailsCardTitle">Items</h2>
                <div className="ayurvibe-orderDetailsItems">
                  {orderItems.map((item) => (
                    <div key={item.id} className="ayurvibe-orderDetailsItem border-t border-[#ccd5d7] py-3 md:py-4">
                      <div className="ayurvibe-orderDetailsItemGrid">
                        <a href="/product">
                          <img src={item.image} alt={item.name} className="ayurvibe-orderDetailsItemImage" />
                        </a>
                        <div>
                          <h3 className="ayurvibe-orderDetailsItemTitle"><a href="/product">{item.name}</a></h3>
                          <p className="ayurvibe-orderDetailsItemMeta">{item.details}</p>
                        </div>
                        <p className="ayurvibe-orderDetailsItemPrice">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <div className="ayurvibe-orderDetailsInfoGrid mt-4 grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2">
                <article className="ayurvibe-orderDetailsCard border border-[#c8d1d3] bg-[#ececec] p-4 md:p-5">
                  <h2 className="ayurvibe-orderDetailsCardTitle">Shipping Address</h2>
                  <p className="ayurvibe-orderDetailsAddress">
                    Tom Roberts
                    <br />
                    812 Cedar View Lane
                    <br />
                    Seattle, WA 98104
                    <br />
                    United States
                  </p>
                </article>
                <article className="ayurvibe-orderDetailsCard border border-[#c8d1d3] bg-[#ececec] p-4 md:p-5">
                  <h2 className="ayurvibe-orderDetailsCardTitle">Payment</h2>
                  <p className="ayurvibe-orderDetailsAddress">
                    Credit Card (VISA)
                    <br />
                    ending in 2483
                    <br />
                    Billing address same as shipping
                  </p>
                </article>
              </div>
            </div>

            <aside className="ayurvibe-orderDetailsSummary border border-[#c8d1d3] bg-[#e7edef] p-4 md:p-5">
              <h2 className="ayurvibe-orderDetailsCardTitle">Summary</h2>
              <div className="ayurvibe-orderDetailsSummaryRows">
                <div className="ayurvibe-orderDetailsSummaryRow">
                  <span>Subtotal</span>
                  <span>$30.30</span>
                </div>
                <div className="ayurvibe-orderDetailsSummaryRow">
                  <span>Shipping</span>
                  <span>$7.00</span>
                </div>
                <div className="ayurvibe-orderDetailsSummaryRow">
                  <span>Tax</span>
                  <span>$3.06</span>
                </div>
                <div className="ayurvibe-orderDetailsSummaryRow is-total">
                  <span>Total</span>
                  <span>$40.36</span>
                </div>
              </div>

              <div className="ayurvibe-orderDetailsSupport">
                <h3 className="ayurvibe-orderDetailsSupportTitle">Need help?</h3>
                <p className="ayurvibe-orderDetailsSupportText">
                  For returns, exchanges, or delivery questions contact our support team.
                </p>
                <a href="#" className="ayurvibe-orderDetailsSupportBtn inline-flex items-center">Contact support</a>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
