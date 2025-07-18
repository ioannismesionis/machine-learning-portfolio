import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactLenis, useLenis } from "lenis/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        smoothTouch: true,
        smoothTouchDelay: 0.1,
        touchMultiplier: 2,
        wheelMultiplier: 1.5,
        easing: (t) => t * (2 - t), // Custom easing function
        duration: 1.2, // Duration of the scroll animation
        infinite: false, // Disable infinite scrolling
        direction: "vertical", // Scroll direction
        gestureDirection: "vertical", // Gesture direction
        normalizeWheel: true, // Normalize wheel events
        lerp: 0.2, // Linear interpolation factor
        scrollFromAnywhere: true, // Allow scrolling from anywhere
      }}
    />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
