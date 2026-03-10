// Build: 1773117029
import React from 'react';
const Tasks = () => (
  <div className="p-4 bg-black/50 border border-green-500/30 rounded-lg font-mono">
    <h2 className="text-xl text-green-400 mb-4 uppercase font-bold">Current Sprint</h2>
    <ul className="space-y-2">
      <li className="text-green-500">[DONE] Initialize Treasury (00k)</li>
      <li className="text-green-500">[DONE] C-Suite Onboarding</li>
      <li className="text-yellow-500 animate-pulse">[PENDING] Sentiment Alpha Sweep</li>
    </ul>
  </div>
);
export default Tasks;
