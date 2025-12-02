import React, { useState } from 'react';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import CenterMap from './components/CenterMap';

const App: React.FC = () => {
  // State to track the active view: 'water' (节水改造) or 'pv' (光伏投入)
  // Defaulting to 'pv' as the "main" view or 'water' based on user flow. 
  // Let's default to 'water' since it was the last specific request, but user asked to restore PV too.
  const [activeTab, setActiveTab] = useState<string>('water');

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      
      {/* 1. Background Map & Center Overlay */}
      <CenterMap activeTab={activeTab} />

      {/* 2. Top Header */}
      <Header />

      {/* 3. Main Content Grid (Overlaid) */}
      <div className="absolute top-20 bottom-0 left-0 right-0 z-10 px-6 py-4 grid grid-cols-12 gap-6 pointer-events-none">
        
        {/* Left Sidebar (3/12 width) */}
        <div className="col-span-3 h-full pointer-events-auto animate-slide-in-left">
          <LeftPanel activeTab={activeTab} />
        </div>

        {/* Center Space (6/12 width) - mostly empty to show map, but can receive interactions */}
        <div className="col-span-6 h-full relative pointer-events-none">
          {/* The center map interaction happens in the CenterMap component */}
        </div>

        {/* Right Sidebar (3/12 width) */}
        <div className="col-span-3 h-full pointer-events-auto animate-slide-in-right">
          <RightPanel activeTab={activeTab} />
        </div>

      </div>

      {/* 4. Bottom Navigation */}
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Global decorative scanlines effect */}
      <div className="absolute inset-0 z-[100] pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
    </div>
  );
};

export default App;