import { useEffect, useState } from "react";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

const CART_STORAGE_KEY = "ayurvibe-cart";

const defaultProduct = {
  id: "blue-azul",
  name: "Blue Azul Soothing Cleansing Emulsion",
  price: 15,
  size: "60 ml",
  image:
    "https://stiletto-theme-glimmer.myshopify.com/cdn/shop/products/blue-azul-soothing-emulsion1.jpg?crop=center&height=540&v=1657915153&width=360",
};

function readCart() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [cartItems, setCartItems] = useState(readCart);
  const rawPath = window.location.pathname.toLowerCase();
  const path = rawPath.length > 1 && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product = defaultProduct) => {
    setCartItems((previous) => {
      const existing = previous.find((item) => item.id === product.id && item.size === product.size);
      if (existing) {
        return previous.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...previous,
        {
          id: product.id,
          name: product.name,
          price: Number(product.price) || 0,
          size: product.size || "",
          quantity: product.quantity || 1,
          image: product.image,
        },
      ];
    });
  };

  const updateCartQuantity = (id, size, change) => {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeCartItem = (id, size) => {
    setCartItems((previous) => previous.filter((item) => !(item.id === id && item.size === size)));
  };

  const routes = {
    "/": <HomePage cartCount={cartCount} />,
    "/home": <HomePage cartCount={cartCount} />,
    "/product": <ProductPage cartCount={cartCount} onAddToCart={addToCart} />,
    "/category": <CategoryPage cartCount={cartCount} onAddToCart={addToCart} />,
    "/cart": (
      <CartPage
        cartCount={cartCount}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeCartItem}
      />
    ),
    "/checkout": <CheckoutPage cartCount={cartCount} cartItems={cartItems} />,
    "/orderconfirmation": <OrderConfirmationPage cartCount={cartCount} />,
    "/order-confirmation": <OrderConfirmationPage cartCount={cartCount} />,
    "/thank-you": <OrderConfirmationPage cartCount={cartCount} />,
    "/orderhistory": <OrderHistoryPage cartCount={cartCount} />,
    "/order-history": <OrderHistoryPage cartCount={cartCount} />,
    "/orders": <OrderHistoryPage cartCount={cartCount} />,
    "/orderdetails": <OrderDetailsPage cartCount={cartCount} />,
    "/order-details": <OrderDetailsPage cartCount={cartCount} />,
    "/orders/details": <OrderDetailsPage cartCount={cartCount} />,
  };

  return routes[path] || <HomePage cartCount={cartCount} />;
}
