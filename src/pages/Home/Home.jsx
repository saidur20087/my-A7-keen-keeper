import { useEffect, useState } from "react";
import { FaPlus, FaUsers } from "react-icons/fa";
import { toast } from "sonner";
import FriendCard from "../../components/FriendCard/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data) => {
        setFriends(data.friends);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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
      {/* Green Banner - Figma Style */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-12 text-center mb-12 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button 
          onClick={() => toast.info("Add Friend feature coming soon!")}
          className="mt-8 bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3.5 rounded-2xl font-semibold flex items-center gap-3 mx-auto transition-all shadow-md"
        >
          <FaPlus size={20} /> Add a Friend
        </button>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm border">
          <div className="text-4xl font-bold text-emerald-700">{friends.length}</div>
          <div className="text-sm text-gray-500 mt-1">Total Friends</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm border">
          <div className="text-4xl font-bold text-emerald-700">
            {friends.filter(f => f.status === "on-track").length}
          </div>
          <div className="text-sm text-gray-500 mt-1">On Track</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm border">
          <div className="text-4xl font-bold text-red-600">
            {friends.filter(f => f.status === "overdue" || f.status === "almost due").length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Need Attention</div>
        </div>
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm border">
          <div className="text-4xl font-bold text-emerald-700">12</div>
          <div className="text-sm text-gray-500 mt-1">Interactions This Month</div>
        </div>
      </div>

      {/* Your Friends Section */}
      <div className="flex items-center gap-3 mb-8">
        <FaUsers className="text-emerald-600" size={28} />
        <h2 className="text-2xl font-semibold text-gray-900">Your Friends</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;