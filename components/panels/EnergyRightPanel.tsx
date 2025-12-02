
import React from 'react';
import { Droplets, Zap, Gauge } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- ENERGY DATA ---
const waterStats = [
  { label: '本日', value: '685', unit: '吨', icon: '日' },
  { label: '本月', value: '7049', unit: '吨', icon: '月' },
  { label: '本年', value: '80451', unit: '吨', icon: '年' },
];

const gasUsageTrend = [
  { time: '10:00', value: 500 },
  { time: '10:05', value: 650 },
  { time: '10:10', value: 800 },
  { time: '10:15', value: 850 },
  { time: '10:20', value: 750 },
  { time: '10:25', value: 900 },
  { time: '10:30', value: 850 },
  { time: '10:35', value: 1000 },
  { time: '10:40', value: 1200 },
  { time: '10:45', value: 1100 },
];

const regionalStats = [
  { name: '教学楼', value: 680, total: 3000, percent: '12%', color: '#38bdf8' },
  { name: '宿舍', value: 1268, total: 3000, percent: '24%', color: '#3b82f6' },
  { name: '食堂', value: 3268, total: 5000, percent: '45%', color: '#fbbf24' },
  { name: '体育馆', value: 598, total: 3000, percent: '10%', color: '#f97316' },
  { name: '图书馆', value: 598, total: 3000, percent: '10%', color: '#34d399' },
];

const EnergyRightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pl-1 pb-20">
      
      {/* 1. Water Statistics */}
      <Card>
        <SectionTitle title="水耗统计 (吨)" />
        <div className="grid grid-cols-3 gap-3">
          {waterStats.map((item, idx) => (
            <div key={idx} className="bg-blue-950/30 p-2 rounded border border-blue-900/50 flex flex-col items-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-6 h-6 bg-cyan-600/20 rounded-br text-[10px] flex items-center justify-center text-cyan-300 font-bold">
                 {item.icon}
              </div>
              <div className="mt-4 text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                {item.value}
              </div>
              <div className="text-[10px] text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. Air Conditioning Energy Saving Display */}
      <Card className="flex-grow">
        <SectionTitle title="空调系统节能展示" />
        <div className="flex items-start justify-between p-2">
            {/* Efficiency Score */}
            <div className="flex flex-col items-center justify-center p-2">
                 <div className="relative w-24 h-24 flex items-center justify-center">
                   <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full rotate-45"></div>
                   <div className="flex flex-col items-center">
                     <span className="text-3xl font-bold text-cyan-400 font-display">5.9</span>
                     <span className="text-xs text-yellow-400 border border-yellow-400/50 px-1 rounded mt-1">一级</span>
                   </div>
                 </div>
            </div>

            {/* Metrics */}
            <div className="flex-1 ml-4 space-y-3">
              <div className="bg-slate-800/50 p-2 rounded flex justify-between items-center">
                 <div className="flex items-center text-gray-300 text-xs"><Zap size={14} className="mr-1 text-cyan-400"/>实时功率</div>
                 <div className="text-white font-mono font-bold">1000<span className="text-[10px] ml-1 text-gray-400">kw</span></div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded flex justify-between items-center">
                 <div className="flex items-center text-gray-300 text-xs"><Gauge size={14} className="mr-1 text-blue-400"/>实时负荷</div>
                 <div className="text-white font-mono font-bold">5936.81<span className="text-[10px] ml-1 text-gray-400">kw</span></div>
              </div>
            </div>
        </div>

        {/* System Components Grid */}
        <div className="grid grid-cols-4 gap-2 mt-2 px-2 pb-2">
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">冷冻机</div>
             <div className="text-lg font-bold text-white border-b-2 border-cyan-500/50 pb-1">8</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">冷冻水泵</div>
             <div className="text-lg font-bold text-white border-b-2 border-cyan-500/50 pb-1">6</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">冷热源系统</div>
             <div className="text-lg font-bold text-white border-b-2 border-cyan-500/50 pb-1">4</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">中央控制器</div>
             <div className="text-lg font-bold text-white border-b-2 border-cyan-500/50 pb-1">4</div>
           </div>
        </div>
      </Card>

      {/* 3. Gas Usage Trend */}
      <Card className="flex-grow min-h-[220px]">
        <SectionTitle 
          title="燃气使用趋势" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="h-40 w-full relative mt-2">
          <div className="absolute text-[10px] text-gray-400 -top-2 left-0">单位: 立方米</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={gasUsageTrend}>
              <defs>
                <linearGradient id="colorValueGas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#34d399' }}
                itemStyle={{ color: '#34d399' }}
              />
              <Area type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorValueGas)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 4. Regional Energy Consumption Stats */}
      <Card className="flex-grow">
        <SectionTitle 
           title="各区域能耗统计" 
           extra={
            <div className="flex gap-1">
              <div className="text-[10px] bg-blue-900/40 border border-blue-600/50 px-2 py-0.5 rounded text-blue-200 cursor-pointer hover:bg-blue-800/50">自来水 ▼</div>
              <div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 cursor-pointer flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>
            </div>
           }
        />
        <div className="space-y-3 pt-1">
          {regionalStats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-cyan-100 font-medium">{stat.name}</span>
                <span className="text-cyan-400 font-mono scale-90">{stat.value} 吨 <span className="text-gray-400 ml-1">{stat.percent}</span></span>
              </div>
              <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full relative"
                  style={{ width: stat.percent, backgroundColor: stat.color }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default EnergyRightPanel;
