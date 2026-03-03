import Header from "../components/Header";
import Footer from "../components/Footer";

const orderedItems = [
  {
    id: "blue-azul",
    name: "Blue Azul Soothing Cleansing Emulsion",
    variant: "80 ml",
    price: "$15.00",
    qty: 1,
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=540&v=1657915153&width=360",
  },
  {
    id: "marula-cactus",
    name: "Marula + Cactus Nourishing Face Oil",
    variant: "30 ml",
    price: "$15.30",
    qty: 1,
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/marula-face-oil5.jpg?crop=center&height=540&v=1657916585&width=360",
  },
];

const suggestedItems = [
  {
    name: "Pink Coconut Hydrating Face Mist",
    price: "from $15.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut-face-mask6.jpg?crop=center&height=750&v=1657916053&width=500",
  },
  {
    name: "Charcoal + Matcha Detoxifying Face Mask",
    price: "from $20.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=750&v=1657915166&width=500",
  },
  {
    name: "Rosehip + Black Cumin Clarifying Face Oil",
    price: "from $18.00",
    image:
      "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/files/rosehip-face-oil3_705be2a5-abc8-4db2-b65b-c8c778559ae1.jpg?v=1700000844&width=500",
  },
];

export default function OrderConfirmationPage({ cartCount = 0 }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-orderPage min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="ayurvibe-orderContainer mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="ayurvibe-orderHero border border-[#c7d0d3] bg-[#e7edef] p-4 md:p-6">
            <p className="ayurvibe-orderEyebrow">THANK YOU FOR YOUR ORDER</p>
            <h1 className="ayurvibe-orderTitle">Your order is confirmed</h1>
            <p className="ayurvibe-orderCopy">
              We are preparing your skincare essentials now. A confirmation email has been sent to
              <span className="font-medium"> tom.r@example.com</span>.
            </p>
            <div className="ayurvibe-orderHeroMeta">
              <p>
                Order number: <strong>#GLM-48219</strong>
              </p>
              <p>
                Placed on: <strong>February 18, 2026</strong>
              </p>
            </div>
            <div className="ayurvibe-orderHeroActions">
              <a href="/order-details" className="ayurvibe-orderPrimaryBtn inline-flex items-center">Track order</a>
              <a href="/category" className="ayurvibe-orderSecondaryBtn inline-flex items-center">Continue shopping</a>
            </div>
          </section>

          <section className="ayurvibe-orderLayout mt-6 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_360px] md:gap-10">
            <div className="ayurvibe-orderDetails">
              <article className="ayurvibe-orderCard border border-[#c7d0d3] bg-[#ececec] p-4 md:p-5">
                <h2 className="ayurvibe-orderCardTitle">Items in this order</h2>
                <div className="ayurvibe-orderItems mt-3">
                  {orderedItems.map((item) => (
                    <div key={item.id} className="ayurvibe-orderItem border-b border-[#ccd4d7] py-3 md:py-4">
                      <div className="ayurvibe-orderItemGrid">
                        <img src={item.image} alt={item.name} className="ayurvibe-orderItemImage" />
                        <div>
                          <h3 className="ayurvibe-orderItemTitle">{item.name}</h3>
                          <p className="ayurvibe-orderItemMeta">Size: {item.variant}</p>
                          <p className="ayurvibe-orderItemMeta">Qty: {item.qty}</p>
                        </div>
                        <p className="ayurvibe-orderItemPrice">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <div className="ayurvibe-orderInfoGrid mt-4 grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-2">
                <article className="ayurvibe-orderCard border border-[#c7d0d3] bg-[#ececec] p-4 md:p-5">
                  <h2 className="ayurvibe-orderCardTitle">Shipping Address</h2>
                  <p className="ayurvibe-orderAddress">
                    Tom Roberts
                    <br />
                    812 Cedar View Lane
                    <br />
                    Seattle, WA 98104
                    <br />
                    United States
                  </p>
                </article>
                <article className="ayurvibe-orderCard border border-[#c7d0d3] bg-[#ececec] p-4 md:p-5">
                  <h2 className="ayurvibe-orderCardTitle">Payment Method</h2>
                  <p className="ayurvibe-orderAddress">
                    Credit Card (VISA)
                    <br />
                    ending in 2483
                    <br />
                    Billing address same as shipping
                  </p>
                </article>
              </div>
            </div>

            <aside className="ayurvibe-orderSummary border border-[#c7d0d3] bg-[#e7edef] p-4 md:p-5">
              <h2 className="ayurvibe-orderCardTitle">Order Summary</h2>
              <div className="ayurvibe-orderSummaryRows">
                <div className="ayurvibe-orderSummaryRow">
                  <span>Subtotal</span>
                  <span>$30.30</span>
                </div>
                <div className="ayurvibe-orderSummaryRow">
                  <span>Shipping</span>
                  <span>$7.00</span>
                </div>
                <div className="ayurvibe-orderSummaryRow">
                  <span>Tax</span>
                  <span>$3.06</span>
                </div>
                <div className="ayurvibe-orderSummaryRow is-total">
                  <span>Total paid</span>
                  <span>$40.36</span>
                </div>
              </div>

              <div className="ayurvibe-orderTimeline">
                <h3 className="ayurvibe-orderTimelineTitle">Delivery updates</h3>
                <p className="ayurvibe-orderTimelineItem">Order confirmed</p>
                <p className="ayurvibe-orderTimelineItem">Packed and ready to ship</p>
                <p className="ayurvibe-orderTimelineItem">Estimated delivery: February 23, 2026</p>
              </div>
            </aside>
          </section>

          <section className="ayurvibe-orderSuggest mt-9 md:mt-12">
            <h2 className="ayurvibe-orderSuggestTitle">Complete your routine</h2>
            <div className="ayurvibe-orderSuggestTrack">
              {suggestedItems.map((item) => (
                <article key={item.name} className="ayurvibe-orderSuggestCard">
                  <div className="ayurvibe-orderSuggestImageWrap">
                    <img src={item.image} alt={item.name} className="ayurvibe-orderSuggestImage" />
                  </div>
                  <h3 className="ayurvibe-orderSuggestName">{item.name}</h3>
                  <p className="ayurvibe-orderSuggestPrice">{item.price}</p>
                <a href="/product" className="ayurvibe-orderSuggestBtn inline-flex items-center justify-center">Quick View</a>
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
