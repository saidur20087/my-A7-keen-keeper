import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
  const data = [
    { name: 'Calls', value: 14, color: '#10b981' },
    { name: 'Texts', value: 23, color: '#8b5cf6' },
    { name: 'Video Calls', value: 9, color: '#f43f5e' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">Friendship Analytics</h1>

      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h3 className="text-xl font-semibold mb-8 text-center">Interaction Distribution</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-8 rounded-3xl text-center">
          <p className="text-5xl font-bold text-emerald-600">46</p>
          <p className="text-gray-500 mt-3">Total Interactions</p>
        </div>
        <div className="bg-white p-8 rounded-3xl text-center">
          <p className="text-5xl font-bold text-purple-600">23</p>
          <p className="text-gray-500 mt-3">Messages Sent</p>
        </div>
        <div className="bg-white p-8 rounded-3xl text-center">
          <p className="text-5xl font-bold text-rose-600">9</p>
          <p className="text-gray-500 mt-3">Video Calls</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;