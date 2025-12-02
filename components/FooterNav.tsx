import React from 'react';
import { 
  Building, 
  Activity, 
  ShieldCheck, 
  Lightbulb, 
  Fan, 
  Droplets, 
  Sun 
} from 'lucide-react';

interface FooterNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'overview', name: '大学总览', label1: '大学', label2: '总览', icon: Building },
  { id: 'energy', name: '能耗监测', label1: '能耗', label2: '监测', icon: Activity },
  { id: 'safe', name: '安全用电', label1: '安全', label2: '用电', icon: ShieldCheck },
  { id: 'light', name: '照明工程', label1: '照明', label2: '工程', icon: Lightbulb },
  { id: 'hvac', name: '空调系统', label1: '空调', label2: '系统', icon: Fan },
  { id: 'water', name: '节水改造', label1: '节水', label2: '改造', icon: Droplets },
  { id: 'pv', name: '光伏投入', label1: '光伏', label2: '投入', icon: Sun },
];

const FooterNav: React.FC<FooterNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-end gap-6 bg-slate-900/60 backdrop-blur-md px-8 py-4 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <div 
              key={item.id} 
              onClick={() => onTabChange(item.id)}
              className={`
                group flex flex-col items-center justify-center cursor-pointer transition-all duration-300
                ${isActive ? 'transform -translate-y-4 scale-110' : 'hover:-translate-y-2 hover:scale-105 opacity-70 hover:opacity-100'}
              `}
            >
              {/* 3D Base Effect for Active Item */}
              {isActive && (
                <div className="absolute -bottom-2 w-16 h-4 bg-cyan-500 blur-lg rounded-[100%] opacity-60"></div>
              )}
              
              {/* Icon Container */}
              <div className={`
                w-14 h-14 flex items-center justify-center rounded-xl mb-2
                ${isActive 
                  ? 'bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.6)] border border-cyan-200 text-white' 
                  : 'bg-slate-800 border border-slate-600 text-cyan-500 group-hover:bg-slate-700 group-hover:border-cyan-500/50'}
              `}>
                <item.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Text Label */}
              <div className={`flex flex-col items-center leading-none ${isActive ? 'text-cyan-300 font-bold' : 'text-gray-400 group-hover:text-cyan-200'}`}>
                <span className="text-lg">{item.label1}</span>
                <span className="text-lg">{item.label2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;