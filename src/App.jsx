import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Correct Imports (tomar folder structure অনুযায়ী)
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
                    // ← thik
import FriendDetails from "./pages/FriendDetails/FriendDetails";
import Timeline from "./pages/Timeline/Timeline";
import Stats from "./pages/Stats/Stats";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";


function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;