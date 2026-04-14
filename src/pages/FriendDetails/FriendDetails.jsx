import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FaPhone, 
  FaSms, 
  FaVideo, 
  FaClock, 
  FaArchive, 
  FaTrash 
} from 'react-icons/fa';
import { toast } from 'sonner';

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        const friendsList = data.friends || data;
        const found = friendsList.find(f => f.id === parseInt(id));
        
        if (found) {
          setFriend(found);
        } else {
          console.error('Friend not found with id:', id);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading friend details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="animate-spin w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!friend) {
    return <div className="text-center py-20 text-xl text-red-600">Friend not found!</div>;
  }

  const addInteraction = (type) => {
    toast.success(`${type} with ${friend.name}`, {
      description: `Interaction logged successfully!`,
      duration: 2500,
    });
    
    // Future: You can add this to global timeline using Context / Redux
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Profile Info */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-32 h-32 rounded-3xl mx-auto object-cover border-4 border-gray-100" 
          />
          <h1 className="text-3xl font-bold text-center mt-6">{friend.name}</h1>
          
          <div className={`mt-3 text-center py-1.5 rounded-full text-sm font-medium w-fit mx-auto px-6
            ${friend.status === 'overdue' ? 'bg-red-100 text-red-700' : 
              friend.status === 'almost due' ? 'bg-yellow-100 text-yellow-700' : 
              'bg-emerald-100 text-emerald-700'}`}>
            {friend.status.toUpperCase().replace('-', ' ')}
          </div>

          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            {friend.tags?.map((tag, i) => (
              <span key={i} className="bg-gray-100 px-4 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-600 text-center leading-relaxed">{friend.bio}</p>
          <p className="text-center mt-4 text-sm text-gray-500">{friend.email}</p>

          <div className="grid grid-cols-3 gap-3 mt-10">
            <button className="border p-4 rounded-2xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
              <FaClock size={24} />
              <span className="text-xs">Snooze</span>
            </button>
            <button className="border p-4 rounded-2xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
              <FaArchive size={24} />
              <span className="text-xs">Archive</span>
            </button>
            <button className="border p-4 rounded-2xl hover:bg-red-50 text-red-600 transition flex flex-col items-center gap-2">
              <FaTrash size={24} />
              <span className="text-xs">Delete</span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl text-center">
              <p className="text-3xl font-bold">{friend.days_since_contact}</p>
              <p className="text-sm text-gray-500">Days Ago</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <p className="text-3xl font-bold">{friend.goal}</p>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <p className="text-xl font-semibold">{friend.next_due_date}</p>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Quick Check-in */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="font-semibold mb-6 text-lg">Quick Check-in</h3>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => addInteraction('Call')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed hover:border-emerald-600 rounded-3xl hover:bg-emerald-50 transition-all"
              >
                <FaPhone size={36} className="text-emerald-600" />
                <span className="font-medium">Call</span>
              </button>

              <button 
                onClick={() => addInteraction('Text')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed hover:border-emerald-600 rounded-3xl hover:bg-emerald-50 transition-all"
              >
                <FaSms size={36} className="text-emerald-600" />
                <span className="font-medium">Text</span>
              </button>

              <button 
                onClick={() => addInteraction('Video')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed hover:border-emerald-600 rounded-3xl hover:bg-emerald-50 transition-all"
              >
                <FaVideo size={36} className="text-emerald-600" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;