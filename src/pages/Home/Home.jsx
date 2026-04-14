import { useEffect, useState } from "react";
import { FaUsers, FaPlus } from "react-icons/fa";
import { toast } from "sonner";
import FriendCard from "../../components/FriendCard/FriendCard";   // ← Correct path

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load friends.json");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Friends data loaded:", data);
        const friendsList = data.friends || data;
        setFriends(friendsList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        toast.error("Friends data load korte problem hoyeche");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button 
          onClick={() => toast.info("Add Friend feature coming soon!")}
          className="mt-6 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 mx-auto font-medium"
        >
          <FaPlus /> + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="text-4xl font-bold text-emerald-700">{friends.length}</div>
          <div className="text-sm text-gray-500 mt-1">Total Friends</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="text-4xl font-bold text-emerald-700">
            {friends.filter(f => f.status === "on-track").length}
          </div>
          <div className="text-sm text-gray-500 mt-1">On Track</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="text-4xl font-bold text-red-600">
            {friends.filter(f => f.status === "overdue" || f.status === "almost due").length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Need Attention</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="text-4xl font-bold text-emerald-700">12</div>
          <div className="text-sm text-gray-500 mt-1">Interactions This Month</div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;