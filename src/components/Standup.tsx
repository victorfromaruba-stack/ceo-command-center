import React from 'react';
const Standup = () => (
  <div className="p-4 bg-black/50 border border-purple-500/30 rounded-lg font-mono">
    <h2 className="text-xl text-purple-400 mb-4 uppercase font-bold">Daily Standup</h2>
    <div className="flex justify-between border-b border-purple-500/10 pb-2">
      <span className="text-purple-300">SYSTEM STATUS</span>
      <span className="text-green-500 px-2 bg-green-900/20">HEALTHY</span>
    </div>
    <div className="grid grid-cols-5 gap-1 mt-4">
      {['MAIN', 'MUDDY', 'ELON', 'WARREN', 'CFO'].map(a => (
        <div key={a} className="bg-purple-900/20 py-1 text-[10px] text-center">{a}</div>
      ))}
    </div>
  </div>
);
export default Standup;
