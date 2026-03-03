import Header from "../components/Header";
import Footer from "../components/Footer";

const orders = [
  {
    id: "#GLM-48219",
    date: "February 18, 2026",
    status: "Delivered",
    total: "$40.36",
    itemCount: 2,
    items: [
      {
        name: "Blue Azul Soothing Cleansing Emulsion",
        meta: "80 ml · Qty 1",
        price: "$15.00",
        image:
          "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=540&v=1657915153&width=360",
      },
      {
        name: "Marula + Cactus Nourishing Face Oil",
        meta: "30 ml · Qty 1",
        price: "$15.30",
        image:
          "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/marula-face-oil5.jpg?crop=center&height=540&v=1657916585&width=360",
      },
    ],
  },
  {
    id: "#GLM-47902",
    date: "January 29, 2026",
    status: "Shipped",
    total: "$58.10",
    itemCount: 3,
    items: [
      {
        name: "Pink Coconut Hydrating Face Mist",
        meta: "60 ml · Qty 2",
        price: "$30.00",
        image:
          "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/pink-coconut-face-mask6.jpg?crop=center&height=540&v=1657916053&width=360",
      },
      {
        name: "Charcoal + Matcha Detoxifying Face Mask",
        meta: "50 ml · Qty 1",
        price: "$20.00",
        image:
          "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/charcoal-matcha-face-mask1.jpg?crop=center&height=540&v=1657915166&width=360",
      },
    ],
  },
  {
    id: "#GLM-47014",
    date: "December 14, 2025",
    status: "Delivered",
    total: "$106.00",
    itemCount: 1,
    items: [
      {
        name: "Best of Om",
        meta: "Bundle · Qty 1",
        price: "$106.00",
        image:
          "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/best-of-om1.jpg?crop=center&height=540&v=1657915131&width=360",
      },
    ],
  },
];

function statusClass(status) {
  if (status === "Delivered") return "is-delivered";
  if (status === "Shipped") return "is-shipped";
  return "";
}

export default function OrderHistoryPage({ cartCount = 0 }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="ayurvibe-orderHistoryPage min-h-screen bg-[#ececec] font-sans text-[#17363f]">
        <div className="ayurvibe-orderHistoryContainer mx-auto max-w-[1240px] px-4 pb-10 pt-6 md:px-8 md:pt-10">
          <section className="ayurvibe-orderHistoryHeader border-b border-[#cad2d4] pb-4 md:pb-5">
            <p className="ayurvibe-orderHistoryEyebrow">ACCOUNT</p>
            <h1 className="ayurvibe-orderHistoryTitle">Order History</h1>
            <p className="ayurvibe-orderHistorySubtitle">Review your previous purchases and current shipping status.</p>
          </section>

          <section className="ayurvibe-orderHistoryList mt-6 space-y-4 md:mt-8 md:space-y-5">
            {orders.map((order) => (
              <article key={order.id} className="ayurvibe-orderHistoryCard border border-[#c8d1d3] bg-[#e7edef] p-4 md:p-5">
                <div className="ayurvibe-orderHistoryCardTop">
                  <div>
                    <p className="ayurvibe-orderHistoryOrderId">{order.id}</p>
                    <p className="ayurvibe-orderHistoryMeta">{order.date}</p>
                  </div>
                  <div className="ayurvibe-orderHistoryTopRight">
                    <span className={`ayurvibe-orderHistoryStatus ${statusClass(order.status)}`}>{order.status}</span>
                    <p className="ayurvibe-orderHistoryTotal">Total {order.total}</p>
                  </div>
                </div>

                <p className="ayurvibe-orderHistoryItemCount">{order.itemCount} item{order.itemCount === 1 ? "" : "s"}</p>

                <div className="ayurvibe-orderHistoryItems">
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.name}`} className="ayurvibe-orderHistoryItem border-t border-[#ccd5d7] py-3 md:py-4">
                      <div className="ayurvibe-orderHistoryItemGrid">
                        <img src={item.image} alt={item.name} className="ayurvibe-orderHistoryItemImage" />
                        <div>
                          <h2 className="ayurvibe-orderHistoryItemTitle">{item.name}</h2>
                          <p className="ayurvibe-orderHistoryItemMeta">{item.meta}</p>
                        </div>
                        <p className="ayurvibe-orderHistoryItemPrice">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ayurvibe-orderHistoryActions">
                  <a href="/order-details" className="ayurvibe-orderHistoryPrimaryBtn inline-flex items-center">View details</a>
                  <a href="/product" className="ayurvibe-orderHistorySecondaryBtn inline-flex items-center">Buy again</a>
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
