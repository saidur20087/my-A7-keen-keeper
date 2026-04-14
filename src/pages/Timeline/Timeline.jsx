import { useState, useEffect } from 'react';
import { FaPhone, FaSms, FaVideo } from 'react-icons/fa';

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState('All');

  // Demo data (later you can connect with Quick Check-in)
  useEffect(() => {
    const demoData = [
      {
        id: 1,
        date: "13 Apr 2026",
        type: "Call",
        title: "Call with Rahim Khan"
      },
      {
        id: 2,
        date: "12 Apr 2026",
        type: "Video",
        title: "Video with Nadia Islam"
      },
      {
        id: 3,
        date: "11 Apr 2026",
        type: "Text",
        title: "Text with Siam Ahmed"
      },
      {
        id: 4,
        date: "10 Apr 2026",
        type: "Call",
        title: "Call with Fariha Tasnim"
      },
      {
        id: 5,
        date: "09 Apr 2026",
        type: "Video",
        title: "Video with Tanvir Hasan"
      }
    ];
    
    setTimeline(demoData);
  }, []);

  const filteredTimeline = filter === 'All' 
    ? timeline 
    : timeline.filter(item => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <FaPhone className="text-blue-600" size={28} />;
      case 'Text': return <FaSms className="text-emerald-600" size={28} />;
      case 'Video': return <FaVideo className="text-purple-600" size={28} />;
      default: return null;
    }
  };

  const getIconBg = (type) => {
    switch (type) {
      case 'Call': return 'bg-blue-100';
      case 'Text': return 'bg-emerald-100';
      case 'Video': return 'bg-purple-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Timeline</h1>
        
        {/* Filter Buttons */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
          {['All', 'Call', 'Text', 'Video'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === item 
                  ? 'bg-emerald-700 text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredTimeline.map((entry) => (
          <div 
            key={entry.id} 
            className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            {/* Icon */}
            <div className={`w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center ${getIconBg(entry.type)}`}>
              {getIcon(entry.type)}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-lg text-gray-900">{entry.title}</p>
              <p className="text-gray-500 mt-1">{entry.date}</p>
            </div>

            {/* Type Badge */}
            <div className={`px-5 py-2 text-sm font-medium rounded-2xl ${
              entry.type === 'Call' ? 'bg-blue-100 text-blue-700' :
              entry.type === 'Text' ? 'bg-emerald-100 text-emerald-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {entry.type}
            </div>
          </div>
        ))}
      </div>

      {filteredTimeline.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No interactions found for this filter.
        </div>
      )}
    </div>
  );
};

export default Timeline;