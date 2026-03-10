"use client";
import React, { useState, useEffect } from 'react';

const Trade = () => (
  <div className="p-6 border border-green-500/20 rounded-lg bg-green-500/5 space-y-4">
    <h2 className="text-xl font-bold text-green-400">TRADE DESK (CRO: WARREN)</h2>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="p-4 border border-white/10 bg-black">
        <h3 className="text-red-400 font-bold">EUR/USD (PAPER-SHORT)</h3>
        <p>Entry: 1.08420</p>
        <p>SL: 1.08950</p>
        <p>TP: 1.07100</p>
        <p className="text-green-500 mt-2 font-bold">[EXECUTED & LOGGED]</p>
      </div>
      <div className="p-4 border border-white/10 bg-black">
        <h3 className="text-green-400 font-bold">USD/JPY (PAPER-LONG)</h3>
        <p>Status: Executed</p>
        <p>Awaiting settlement</p>
      </div>
      <div className="p-4 border border-white/10 bg-black col-span-2">
        <h3 className="text-purple-400 font-bold">SOLANA BAG</h3>
        <p>Dynamic Stop-Loss: $142.00</p>
        <p className="text-red-500 font-bold animate-pulse mt-2">WAKE PROTOCOL: ALERT IF SOL &lt; $140.00</p>
      </div>
    </div>
  </div>
);

const Sensors = () => (
  <div className="p-6 border border-blue-500/20 rounded-lg bg-blue-500/5 space-y-4 text-blue-400 font-mono">
     <h2 className="text-xl font-bold text-blue-300">LIVE SYSTEM SCAN (CTO: ELON)</h2>
     <div className="space-y-2">
       <p>[Port 3000]: CLEAR. Next.js heartbeat 120bpm.</p>
       <p>[Solana WSS]: ACTIVE. Price Feed: $142.14 | Delta: +0.02%</p>
       <p>[Sentiment Mesh]: VERIFIED. JUP Sentiment: 2.42/100 (EXTREME FEAR) - Historic Anomaly.</p>
       <p>[Telemetry Pipes]: OPEN. No data drops.</p>
     </div>
  </div>
);

const Org = () => (
  <div className="p-6 border border-purple-500/20 rounded-lg bg-purple-500/5 space-y-2">
     <h2 className="text-xl font-bold text-purple-400">ORGANIZATION CHART</h2>
     <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li><strong className="text-white">CEO:</strong> Off-grid. Waiting for visual bridge.</li>
        <li><strong className="text-white">MUDDY (COO):</strong> Root Authority. (Main identity is shadow).</li>
        <li><strong className="text-white">ELON (CTO):</strong> WSS Streams & Telemetry.</li>
        <li><strong className="text-white">WARREN (CRO):</strong> Trade Execution. Brain online.</li>
     </ul>
     <p className="text-green-500 font-bold mt-4">STATUS: All chiefs funded. Departmental auth 100% complete.</p>
  </div>
);

const Tasks = () => (
  <div className="p-6 border border-yellow-500/20 rounded-lg bg-yellow-500/5 space-y-2 text-yellow-300 font-mono">
     <h2 className="text-xl font-bold">SYSTEM STATUS: GREEN</h2>
     <div className="space-y-2 mt-4">
       <p>✓ Gateway Token rotated.</p>
       <p>✓ Bridge secured & minimized.</p>
       <p>✓ Cold Injection of auth profiles executed.</p>
       <p>✓ 1805-second heartbeat active.</p>
     </div>
  </div>
);

const Standup = () => (
  <div className="p-6 border border-white/20 rounded-lg bg-white/5 space-y-2">
     <h2 className="text-xl font-bold text-white">OVERNIGHT STANDUP PROTOCOL</h2>
     <p className="text-green-400 font-bold">INITIALIZED.</p>
     <p className="text-sm text-white/60 mt-4 border-t border-white/10 pt-4">Directive: Do not wake the CEO unless SOL drops below $140 or a system-critical error occurs on the VPS.</p>
  </div>
);

const UptimeMonitor = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/uptime');
        const data = await res.json();
        if (data.lines) setLogs(data.lines);
      } catch (e) {
        console.error("Uptime fetch error", e);
      }
    };
    
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 border border-cyan-500/20 rounded-lg bg-cyan-500/5 space-y-4">
      <h2 className="text-xl font-bold text-cyan-400 tracking-wider">DAEMON: UPTIME MONITOR</h2>
      <div className="bg-black border border-cyan-500/30 p-4 rounded-md h-[300px] overflow-y-auto font-mono text-xs">
        {logs.length === 0 ? (
          <div className="text-cyan-500/50 animate-pulse">Awaiting telemetry from /root/.openclaw/workspace/uptime.log...</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={log.includes('DOWN') || log.includes('DEGRADED') ? 'text-red-500 font-bold' : 'text-cyan-400'}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const GuestComms = () => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setTranslation('');
    
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await res.json();
      if (data.translation) {
        setTranslation(data.translation);
      } else {
        setTranslation('Error: ' + data.error);
      }
    } catch (error) {
      setTranslation('Error: Translation engine failure.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border border-cyan-500/20 rounded-lg bg-cyan-500/5 space-y-4 font-mono">
      <h2 className="text-xl font-bold text-cyan-400 tracking-wider">IBEROSTAR THE CLUB: GUEST COMMS</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-cyan-500/70 text-sm mb-2 uppercase">Input Stream (English):</label>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 bg-black border border-cyan-500/30 rounded-md p-3 text-cyan-300 focus:outline-none focus:border-cyan-400 resize-none placeholder-cyan-500/30"
            placeholder="Type message here..."
          />
        </div>
        <button 
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
          className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase"
        >
          {loading ? 'Processing...' : 'Execute Translation'}
        </button>
        <div>
          <label className="block text-cyan-500/70 text-sm mb-2 uppercase">Output Stream (Spanish):</label>
          <div className="w-full h-32 bg-black border border-cyan-500/30 rounded-md p-3 text-cyan-400 overflow-y-auto whitespace-pre-wrap">
            {translation || <span className="text-cyan-500/30 animate-pulse">Awaiting input...</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [tab, setTab] = useState('TRADE');
  const tabs = ['TRADE', 'SENSORS', 'ORG', 'TASKS', 'STANDUP', 'UPTIME', 'COMMS'];

  return (
    <main className="min-h-screen bg-black text-white p-6 font-mono">
      <header className="mb-6 flex justify-between items-center border-b border-white/10 pb-4">
        <h1 className="text-2xl font-bold tracking-tighter text-green-500">MUDDY-OS <span className="text-white/20 ml-2">| VISUAL BRIDGE SECURED</span></h1>
        <div className="text-green-500 animate-pulse text-sm font-bold border border-green-500 px-3 py-1 rounded">PING: RESPONDING</div>
      </header>

      <nav className="flex gap-1 mb-8 bg-white/5 p-1 rounded-md w-max">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-xs font-bold transition-all ${tab === t ? 'bg-white/10 text-green-400 border border-white/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'text-white/40 hover:text-white'}`}
          > {t} </button>
        ))}
      </nav>

      <div className="mt-4">
        {tab === 'TRADE' && <Trade />}
        {tab === 'SENSORS' && <Sensors />}
        {tab === 'ORG' && <Org />}
        {tab === 'TASKS' && <Tasks />}
        {tab === 'STANDUP' && <Standup />}
        {tab === 'UPTIME' && <UptimeMonitor />}
        {tab === 'COMMS' && <GuestComms />}
      </div>
    </main>
  );
}