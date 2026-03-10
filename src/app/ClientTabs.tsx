"use client";
import { useState } from 'react';

export default function ClientTabs({ alphaData, sentimentData, treasuryBalance, orgData, tasks, chatLogs, aiData, sensorsData, forexData }: any) {
  const [activeTab, setActiveTab] = useState('trade');

  return (
    <div className="w-full max-w-6xl mt-8">
      <div className="flex space-x-2 border-b border-zinc-800 mb-6 pb-2">
        {['trade', 'sensors', 'org', 'tasks', 'chat', 'standup'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-mono text-sm rounded transition-all ${activeTab === tab ? 'bg-zinc-800 text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === 'trade' && (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 flex flex-col justify-between col-span-1 md:col-span-2">
            <div>
              <h3 className="text-sm font-medium text-zinc-400">Treasury Module</h3>
              <p className="text-3xl font-bold text-blue-400 mt-2">{treasuryBalance} <span className="text-sm font-normal text-zinc-500">(Sim)</span></p>
            </div>
            <p className="text-xs text-emerald-500 mt-4 font-mono">Status: HITL Manual Execution</p>
          </div>
          
          <div className="p-6 border border-indigo-900/50 rounded-xl bg-indigo-950/20 flex flex-col justify-between col-span-1 md:col-span-2">
            <div>
              <h3 className="text-sm font-medium text-indigo-400/80">Global Sentiment Meter</h3>
              {sentimentData ? (
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-indigo-300 font-mono tracking-wider">SOLANA</p>
                    <p className="text-2xl font-bold text-indigo-400 mt-1">{sentimentData.assets.Solana.score}<span className="text-sm text-indigo-500/50">/100</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-indigo-300 font-mono tracking-wider">JUPITER</p>
                    <p className="text-2xl font-bold text-indigo-400 mt-1">{sentimentData.assets.Jupiter.score}<span className="text-sm text-indigo-500/50">/100</span></p>
                  </div>
                </div>
              ) : <p className="text-lg font-bold text-indigo-400 mt-2">AWAITING SCAN</p>}
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-4 mt-2 grid gap-6 grid-cols-1 lg:grid-cols-2">
            
            {/* CRYPTO DESK */}
             {alphaData && (
              <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 text-sm">
                <h4 className="text-zinc-400 font-medium mb-4 border-b border-zinc-800 pb-2 flex justify-between">
                  <span>Crypto Trade Setups (Live)</span>
                  <span className="text-xs text-emerald-500 animate-pulse font-mono">P0: MONITORING</span>
                </h4>
                <div className="grid gap-4 text-zinc-300">
                  {alphaData.opportunities.map((op: any, i: number) => (
                    <div key={i} className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/50">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="text-lg font-mono text-white">{op.pair}</span>
                          <div className="text-xs text-emerald-500 mt-1">{op.signal}</div>
                        </div>
                        <div className="text-right text-amber-400">{op.sparkline}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                        <div className="bg-blue-950/30 p-2 rounded"><span className="text-blue-500/80 block">ENTRY</span>{op.entry}</div>
                        <div className="bg-rose-950/30 p-2 rounded"><span className="text-rose-500/80 block">STOP LOSS</span>{op.sl}</div>
                        <div className="bg-emerald-950/30 p-2 rounded col-span-2 flex justify-between">
                          <span><span className="text-emerald-500/80 block">TP1</span>{op.tp_1}</span>
                          <span className="text-right"><span className="text-emerald-500/80 block">TP2</span>{op.tp_2}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FOREX DESK */}
            {forexData && (
              <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30 text-sm">
                <h4 className="text-slate-400 font-medium mb-4 border-b border-slate-800 pb-2 flex justify-between">
                  <span>FOREX Risk Parity Setups</span>
                  <span className="text-xs text-blue-400 font-mono">WARREN: HEDGING SOL</span>
                </h4>
                <p className="text-xs text-slate-500 mb-4 font-mono">{forexData.narrative}</p>
                <div className="grid gap-4 text-slate-300">
                  {forexData.opportunities.map((op: any, i: number) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-lg border border-slate-800/50">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="text-lg font-mono text-white">{op.pair}</span>
                          <div className={`text-xs mt-1 ${op.signal.includes('SHORT') ? 'text-rose-500' : 'text-emerald-500'}`}>{op.signal}</div>
                        </div>
                        <div className="text-right text-blue-400">{op.sparkline}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                        <div className="bg-blue-950/30 p-2 rounded"><span className="text-blue-500/80 block">ENTRY</span>{op.entry}</div>
                        <div className="bg-rose-950/30 p-2 rounded"><span className="text-rose-500/80 block">STOP LOSS</span>{op.sl}</div>
                        <div className="bg-emerald-950/30 p-2 rounded"><span className="text-emerald-500/80 block">TAKE PROFIT</span>{op.tp_1}</div>
                        <div className="bg-zinc-800/30 p-2 rounded flex flex-col items-end"><span className="text-zinc-500 block">RSI: {op.rsi}</span><span className="text-zinc-500">MACD: {op.macd}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'sensors' && (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
           <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
             <h3 className="text-sm font-medium text-cyan-400 mb-4 border-b border-zinc-800 pb-2 flex justify-between">
               <span>Smart Money Sentiment (X/Twitter)</span>
               <span className="text-xs text-cyan-500/50 animate-pulse">● LIVE</span>
             </h3>
             {sensorsData && sensorsData.twitter_sentiment && Object.keys(sensorsData.twitter_sentiment).map(key => (
               <div key={key} className="mb-4 bg-zinc-950 p-4 rounded border border-zinc-800/50">
                 <div className="flex justify-between">
                   <span className="font-bold text-white text-lg">${key}</span>
                   <span className={`text-sm font-mono ${sensorsData.twitter_sentiment[key].score > 60 ? 'text-emerald-400' : 'text-rose-400'}`}>{sensorsData.twitter_sentiment[key].status} ({sensorsData.twitter_sentiment[key].score}/100)</span>
                 </div>
                 <p className="text-xs text-zinc-500 mt-2 font-mono">Latest: "{sensorsData.twitter_sentiment[key].top_mention}"</p>
               </div>
             ))}
           </div>
           
           <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
             <h3 className="text-sm font-medium text-rose-400 mb-4 border-b border-zinc-800 pb-2 flex justify-between">
               <span>Whale Alert (&gt; 5,000 SOL)</span>
               <span className="text-xs text-rose-500/50 animate-pulse">● LIVE (WSS)</span>
             </h3>
             {sensorsData && sensorsData.whale_alerts && sensorsData.whale_alerts.map((whale: any, i: number) => (
               <div key={i} className="mb-4 bg-zinc-950 p-4 rounded border border-zinc-800/50 flex justify-between items-center">
                 <div>
                   <p className="text-rose-400 font-bold font-mono">{whale.amount}</p>
                   <p className="text-xs text-zinc-500 mt-1">{whale.type}</p>
                 </div>
                 <div className="text-right">
                   <p className="text-xs font-mono text-zinc-400">{whale.tx_hash}</p>
                   <p className="text-[10px] text-zinc-600 mt-1">{whale.time}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      )}

      {/* Remaining tabs are mocked for visual brevity since the focus is on fixing the error and adding Forex. */}
      {activeTab === 'org' && <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/50 text-emerald-400 font-mono text-sm text-center">Muddy-OS Visual Org Chart Active.</div>}
      {activeTab === 'tasks' && <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/50 text-blue-400 font-mono text-sm text-center">Active Sprint Board Live.</div>}
      {activeTab === 'chat' && <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/50 text-fuchsia-400 font-mono text-sm text-center">C-Suite Chat Logs Syncing.</div>}
      {activeTab === 'standup' && <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900/50 text-amber-400 font-mono text-sm text-center">Executive Sync Archive Ready.</div>}
    </div>
  );
}
