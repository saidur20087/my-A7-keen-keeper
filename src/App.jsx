import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { TimelineProvider } from "./context/TimelineContext";   // ← Correct path
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Timeline from "./pages/Timeline/Timeline";
import Stats from "./pages/Stats/Stats";
import FriendDetails from "./pages/FriendDetails/FriendDetails";
import NotFound from "./pages/NotFound/NotFound";




function App() {
  return (
    <Router>
      <TimelineProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors />
      </TimelineProvider>
    </Router>
  );
}

export default App;