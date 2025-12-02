
import React from 'react';
import { Zap, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- ENERGY DATA ---
const electricityStats = [
  { label: '本日', value: '2.04', unit: '万 kWh', icon: '日' },
  { label: '本月', value: '70.49', unit: '万 kWh', icon: '月' },
  { label: '本年', value: '804.51', unit: '万 kWh', icon: '年' },
];

const subItemConsumption = [
  { name: '空调用电', value: 336.71, percent: '29.8%', color: '#f472b6' }, // pink
  { name: '插座照明', value: 558.47, percent: '49.5%', color: '#34d399' }, // green
  { name: '动力用电', value: 103.82, percent: '9.2%', color: '#fbbf24' }, // yellow
  { name: '特殊用电', value: 129.70, percent: '11.5%', color: '#ef4444' }, // red
];

const electricityTrendData = [
  { time: '10:00', value: 500 },
  { time: '10:05', value: 800 },
  { time: '10:10', value: 600 },
  { time: '10:15', value: 900 },
  { time: '10:20', value: 750 },
  { time: '10:25', value: 1200 },
  { time: '10:30', value: 1000 },
  { time: '10:35', value: 800 },
  { time: '10:40', value: 950 },
  { time: '10:45', value: 1100 },
];

const EnergyLeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1 pb-20">
      
      {/* 1. Electricity Statistics */}
      <Card>
        <SectionTitle title="电耗统计 (万 kwh)" />
        <div className="grid grid-cols-3 gap-3">
          {electricityStats.map((item, idx) => (
            <div key={idx} className="bg-cyan-950/30 p-2 rounded border border-cyan-900/50 flex flex-col items-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-6 h-6 bg-blue-600/20 rounded-br text-[10px] flex items-center justify-center text-blue-300 font-bold">
                 {item.icon}
              </div>
              <div className="mt-4 text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                {item.value}
              </div>
              <div className="text-[10px] text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. Energy Consumption per Unit Area */}
      <Card className="flex-grow">
        <SectionTitle title="近一年建筑单位面积能耗 (kwh/(a.m2))" />
        <div className="flex items-center p-2 relative">
           {/* Hexagon Graphic */}
           <div className="relative w-24 h-24 flex-shrink-0 mr-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 clip-hexagon flex items-center justify-center">
                 <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 font-display">28.3%</div>
                    <div className="text-[10px] text-white bg-green-500/80 px-1 rounded mt-1">节能</div>
                 </div>
              </div>
              {/* Hexagon Border SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-cyan-500 fill-none stroke-current stroke-2">
                 <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" />
              </svg>
           </div>
           
           <div className="flex-1 space-y-3">
              <div className="bg-slate-800/50 p-2 rounded border-l-2 border-blue-500 flex justify-between items-center">
                  <span className="text-xs text-gray-300">当前值</span>
                  <span className="font-mono font-bold text-white">86.1</span>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border-l-2 border-cyan-500 flex justify-between items-center">
                  <span className="text-xs text-gray-300">同类建筑</span>
                  <span className="font-mono font-bold text-white">120</span>
              </div>
           </div>
        </div>
      </Card>

      {/* 3. Sub-item Electricity Consumption */}
      <Card className="flex-grow min-h-[200px]">
        <SectionTitle title="近一年分项电耗 (万 kwh)" />
        <div className="flex items-center h-44">
           <div className="w-2/5 h-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subItemConsumption}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                    stroke="none"
                  >
                    {subItemConsumption.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="w-3/5 space-y-2 text-xs pl-2">
              {subItemConsumption.map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between border-b border-slate-800/50 pb-1">
                    <div className="flex items-center">
                       <div className="w-1 h-3 mr-2 rounded-sm" style={{backgroundColor: item.color}}></div>
                       <div className="flex flex-col">
                          <span className="text-gray-300 scale-90 origin-left text-[10px]">{item.name.slice(0,4)}..</span>
                          <span className="text-white font-mono font-bold">{item.value}</span>
                       </div>
                    </div>
                    <span className="text-gray-400 font-mono text-[10px]">{item.percent}</span>
                 </div>
              ))}
           </div>
        </div>
      </Card>
      
      {/* 4. Electricity Trend */}
      <Card className="h-44">
        <SectionTitle 
           title="电耗趋势 (kwh)" 
           extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>}
        />
        <div className="h-28 w-full mt-2 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={electricityTrendData}>
                <defs>
                  <linearGradient id="colorValueEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#38bdf8' }}
                  itemStyle={{ color: '#38bdf8' }}
                />
                <Area type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} fillOpacity={1} fill="url(#colorValueEnergy)" />
              </AreaChart>
            </ResponsiveContainer>
        </div>
      </Card>

    </div>
  );
};

export default EnergyLeftPanel;
