import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhone, FaSms, FaVideo, FaClock, FaArchive, FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';
import { useTimeline } from '../../context/TimelineContext'; 

const FriendDetails = () => {
  const { id } = useParams();
  const { addInteraction } = useTimeline(); 
  
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('/data/friends.json')
      .then(res => res.json())
      .then(data => {
        const found = data.friends.find(f => f.id === parseInt(id));
        setFriend(found);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  
  const handleQuickCheckIn = (type) => {
    if (!friend) return;

   
    addInteraction(type, friend.name);


    toast.success(`${type} logged successfully!`, {
      description: `${friend.name}`,
      duration: 3000,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!friend) {
    return <div className="text-center py-20 text-red-600 font-bold">Friend not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Column - Profile Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-32 h-32 rounded-3xl mx-auto object-cover ring-4 ring-emerald-50" 
          />
          <h1 className="text-3xl text-black font-bold text-center mt-6">{friend.name}</h1>
          
          <div className={`mt-3 mx-auto w-fit px-6 py-1.5 rounded-full text-sm font-medium
            ${friend.status === 'overdue' ? 'bg-red-100 text-red-700' : 
              friend.status === 'almost due' ? 'bg-yellow-100 text-yellow-700' : 
              'bg-emerald-100 text-emerald-700'}`}>
            {friend.status.toUpperCase().replace('-', ' ')}
          </div>

          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            {friend.tags?.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-600 text-center leading-relaxed italic">
            "{friend.bio}"
          </p>
          <p className="text-center mt-4 text-sm text-gray-400 font-mono">{friend.email}</p>

          <div className="grid grid-cols-3 gap-3 mt-10">
            <button className="border p-4 rounded-2xl hover:bg-gray-50 flex flex-col items-center gap-2 transition-all">
              <FaClock size={22} className="text-gray-600" />
              <span className="text-xs font-semibold">Snooze</span>
            </button>
            <button className="border p-4 rounded-2xl hover:bg-gray-50 flex flex-col items-center gap-2 transition-all">
              <FaArchive size={22} className="text-gray-600" />
              <span className="text-xs font-semibold">Archive</span>
            </button>
            <button className="border p-4 rounded-2xl hover:bg-red-50 text-red-600 flex flex-col items-center gap-2 transition-all border-red-50">
              <FaTrash size={22} />
              <span className="text-xs font-semibold">Delete</span>
            </button>
          </div>
        </div>

        {/* Right Column - Stats & Interaction */}
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-3xl text-center shadow-sm border border-gray-50">
              <p className="text-3xl font-bold text-emerald-700">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Days Ago</p>
            </div>
            <div className="bg-white p-6 rounded-3xl text-center shadow-sm border border-gray-50">
              <p className="text-3xl font-bold text-emerald-700">{friend.goal}</p>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Goal</p>
            </div>
            <div className="bg-white p-6 rounded-3xl text-center shadow-sm border border-gray-50">
              <p className="text-lg font-bold text-emerald-700 truncate">{friend.next_due_date}</p>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Next Due</p>
            </div>
          </div>

          {/* Quick Check-in Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50">
            <h3 className="font-bold mb-6 text-xl text-gray-800">Quick Check-in</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Call Button */}
              <button 
                onClick={() => handleQuickCheckIn('Call')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-200 hover:border-emerald-500 rounded-3xl hover:bg-emerald-50 transition-all active:scale-95 group"
              >
                <FaPhone size={32} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">Call</span>
              </button>

              {/* Text Button */}
              <button 
                onClick={() => handleQuickCheckIn('Text')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-200 hover:border-emerald-500 rounded-3xl hover:bg-emerald-50 transition-all active:scale-95 group"
              >
                <FaSms size={32} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">Text</span>
              </button>

              {/* Video Button */}
              <button 
                onClick={() => handleQuickCheckIn('Video')}
                className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-200 hover:border-emerald-500 rounded-3xl hover:bg-emerald-50 transition-all active:scale-95 group"
              >
                <FaVideo size={32} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;