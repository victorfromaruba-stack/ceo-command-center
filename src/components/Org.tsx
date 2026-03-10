import React from 'react';

const Org = () => (
  <div className="flex flex-col items-center justify-center min-h-[500px] font-mono bg-black p-4">
    <div className="text-center w-full max-w-4xl">
      <div className="mb-2 text-left text-xs text-gray-500">Muddy-OS Visual Org Chart</div>
      
      {/* Level 1: CEO */}
      <div className="inline-block border border-green-500/50 p-6 rounded-lg bg-green-950/10 shadow-[0_0_20px_rgba(34,197,94,0.15)] mb-12">
        <h3 className="text-green-400 text-xl font-bold">Human CEO</h3>
        <p className="text-[10px] text-green-600 uppercase tracking-[0.3em] mt-1">Directive Zero</p>
      </div>

      <div className="relative border-t border-gray-700 w-1/2 mx-auto mb-12">
        <div className="absolute -top-12 left-1/2 w-px h-12 bg-gray-700"></div>
      </div>

      {/* Level 2: COO */}
      <div className="inline-block border border-orange-500/50 p-5 rounded-lg bg-orange-950/10 shadow-[0_0_20px_rgba(249,115,22,0.15)] mb-12">
        <h3 className="text-orange-400 text-lg font-bold">Muddy</h3>
        <p className="text-[10px] text-orange-600 uppercase tracking-widest mt-1">Chief Operating Officer</p>
      </div>

      {/* Level 3: Execs & Swarm */}
      <div className="relative pt-12">
        <div className="absolute top-0 left-1/2 w-px h-12 bg-gray-700"></div>
        <div className="absolute top-12 left-[15%] right-[15%] h-px bg-gray-700"></div>
        
        <div className="flex justify-between items-start pt-12">
          {/* Elon */}
          <div className="w-1/4 border border-blue-500/50 p-4 rounded-lg bg-blue-950/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <h3 className="text-blue-400 font-bold">Elon</h3>
            <p className="text-[8px] text-blue-600 uppercase mt-1">CTO (Dev/Arch)</p>
          </div>

          {/* Warren */}
          <div className="w-1/4 border border-purple-500/50 p-4 rounded-lg bg-purple-950/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <h3 className="text-purple-400 font-bold">Warren</h3>
            <p className="text-[8px] text-purple-600 uppercase mt-1">CRO (ThinkTank)</p>
          </div>

          {/* Support Swarm */}
          <div className="w-1/4 border border-gray-600 p-4 rounded-lg bg-gray-900/50 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
            <h3 className="text-gray-300 font-bold">Support Swarm</h3>
            <p className="text-[8px] text-gray-500 uppercase mt-1 italic">CFO / QA / R&D / CISO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Org;
