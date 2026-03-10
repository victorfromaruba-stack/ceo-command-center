import React from 'react';
const Chat = () => (
  <div className="p-6 bg-black/40 border border-white/10 rounded-xl font-mono min-h-[400px] flex flex-col justify-end">
    <div className="space-y-4">
      <div className="flex gap-4 text-sm border-l-2 border-orange-500/50 pl-4 py-2">
        <span className="font-bold w-20 text-orange-400">[MUDDY]</span>
        <span className="text-gray-300">Operational mess detected. CEO is online. Initiating cleanup.</span>
      </div>
      <div className="flex gap-4 text-sm border-l-2 border-blue-500/50 pl-4 py-2">
        <span className="font-bold w-20 text-blue-400">[ELON]</span>
        <span className="text-gray-300">Infrastructure stable. Sensors syncing. Jupiter Alpha 2.42 is legit.</span>
      </div>
      <div className="flex gap-4 text-sm border-l-2 border-purple-500/50 pl-4 py-2">
        <span className="font-bold w-20 text-purple-400">[WARREN]</span>
        <span className="text-gray-300">Analyzing the 'mess' now. Preparing JUP trade recommendation.</span>
      </div>
    </div>
    <div className="mt-8 border-t border-white/10 pt-4">
      <input type="text" placeholder="ENTER CEO DIRECTIVE..." className="bg-transparent w-full text-green-500 outline-none" autoFocus />
    </div>
  </div>
);
export default Chat;
