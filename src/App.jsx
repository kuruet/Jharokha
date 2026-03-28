import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { Toaster } from "react-hot-toast";

// ✅ NEW IMPORT
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingProvider>
      <div className="flex flex-col min-h-screen">
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Toast Notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;