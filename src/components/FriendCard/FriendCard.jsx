import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusColor = {
    overdue: "bg-red-100 text-red-700 border-red-300",
    "almost due": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "on-track": "bg-emerald-100 text-emerald-700 border-emerald-300",
  };

  if (!friend) return null; // Safety check

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
    >
      <div className="p-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-2xl object-cover mx-auto"
        />
        <h3 className="text-center font-semibold mt-3 text-lg">
          {friend.name}
        </h3>

        <div className="flex justify-center gap-2 mt-2">
          {friend.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Last contact</p>
          <p className="font-semibold text-xl">
            {friend.days_since_contact} days ago
          </p>
        </div>
      </div>

      <div
        className={`py-2.5 text-center text-sm font-medium border-t ${statusColor[friend.status] || "bg-gray-100"}`}
      >
        {friend.status === "overdue" && "Overdue"}
        {friend.status === "almost due" && "Almost Due"}
        {friend.status === "on-track" && "On Track"}
      </div>
    </div>
  );
};

export default FriendCard;
