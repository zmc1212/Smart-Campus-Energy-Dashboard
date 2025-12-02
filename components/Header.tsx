import React, { useEffect, useState } from 'react';
import { Bell, Settings, Power, ChevronDown, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour12: false });
  };
  
  const formatDate = (date: Date) => {
     const yyyy = date.getFullYear();
     const mm = String(date.getMonth() + 1).padStart(2, '0');
     const dd = String(date.getDate()).padStart(2, '0');
     const weekDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
     return `${yyyy} 年 ${mm} 月 ${dd} 日 ${weekDay}`;
  }

  return (
    <div className="relative z-50 h-20 w-full flex items-center justify-between px-6 pointer-events-none">
      {/* Background shape for header - CSS clip path simulation */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-slate-900 via-slate-900/90 to-transparent pointer-events-auto">
         {/* Center Trapezoid Decoration */}
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 bg-gradient-to-b from-blue-900 to-slate-900 border-b-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] rounded-b-3xl flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              武汉交通职业学院智慧后勤及能源平台
            </h1>
             {/* Glowing underline decoration */}
             <div className="absolute bottom-2 w-3/4 h-0.5 bg-cyan-400 blur-[1px]"></div>
         </div>
      </div>

      {/* Left Section: Location */}
      <div className="relative z-10 flex items-center space-x-2 text-cyan-100 mt-2 pointer-events-auto">
        <MapPin size={20} className="text-cyan-400" />
        <span className="text-lg font-medium tracking-wide">武汉交通职业学院台北路校区</span>
        <ChevronDown size={16} className="text-cyan-400 cursor-pointer" />
      </div>

      {/* Right Section: Time & Tools */}
      <div className="relative z-10 flex items-center space-x-8 mt-2 pointer-events-auto">
        <div className="flex items-baseline space-x-3 text-cyan-100 font-mono">
          <span className="text-sm">{formatDate(time)}</span>
          <span className="text-xl font-bold text-white">{formatTime(time)}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-slate-800 rounded-full transition-colors text-white relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-full transition-colors text-white">
            <Settings size={20} />
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-full transition-colors text-red-400">
            <Power size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;