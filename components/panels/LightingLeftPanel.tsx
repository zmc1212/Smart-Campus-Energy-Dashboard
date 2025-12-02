
import React from 'react';
import { Lightbulb, Sun, Zap, Disc } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- LIGHTING DATA ---
const facilityCounts = [
  { label: '户外路灯', count: 326, unit: '个', icon: Sun }, 
  { label: '场所射灯', count: 226, unit: '个', icon: Disc }, 
  { label: '氛围照明灯', count: 16, unit: '条', icon: Zap }, 
  { label: '室内白炽灯', count: 428, unit: '个', icon: Lightbulb },
];

const lightingElectricityStats = [
  { name: '户外路灯', value: 460, total: 3000, percent: '12%', color: '#38bdf8' },
  { name: '体育场射灯', value: 868, total: 3000, percent: '24%', color: '#3b82f6' },
  { name: '图书馆白炽灯', value: 2668, total: 5000, percent: '45%', color: '#fbbf24' },
  { name: '景观氛围照明灯', value: 598, total: 3000, percent: '10%', color: '#f97316' },
  { name: '其他照明灯', value: 598, total: 3000, percent: '10%', color: '#34d399' },
];

const emergencyLightingData = [
    { name: '教学楼', value: 45, color: '#34d399' },
    { name: '宿舍', value: 80, color: '#f472b6' },
    { name: '图书馆', value: 30, color: '#3b82f6' },
    { name: '体育馆', value: 15, color: '#fbbf24' },
];

const LightingLeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1 pb-20">
      {/* 1. Facility Counts */}
      <Card>
        <SectionTitle title="照明设施数量" />
        <div className="grid grid-cols-2 gap-3">
            {facilityCounts.map((item, idx) => (
                <div key={idx} className="flex items-center bg-cyan-950/30 p-3 rounded border border-cyan-900/50">
                    <div className="p-2 bg-cyan-900/50 rounded-full mr-3 text-cyan-400">
                        <item.icon size={20} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold font-display text-white">
                            {item.count}<span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                        </div>
                        <div className="text-xs text-cyan-200">{item.label}</div>
                    </div>
                </div>
            ))}
        </div>
      </Card>

      {/* 2. Facility Status */}
      <Card className="flex-grow">
        <SectionTitle title="照明设施状态" />
        <div className="flex items-center justify-between p-2">
            <div className="relative w-28 h-28 flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-500/10 rotate-45 rounded-xl border border-blue-500/30"></div>
               <div className="absolute inset-2 bg-cyan-500/10 rotate-45 rounded-xl border border-cyan-500/30"></div>
               <div className="text-center z-10">
                 <div className="text-3xl font-bold text-cyan-300 font-display">996</div>
                 <div className="text-[10px] text-gray-400">设备总数</div>
               </div>
            </div>
            <div className="space-y-2 flex-1 ml-4">
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-cyan-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>运行</div>
                 <div className="font-mono font-bold">928</div>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-blue-300"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>备用</div>
                 <div className="font-mono font-bold">52</div>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-yellow-300"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>故障</div>
                 <div className="font-mono font-bold">16</div>
              </div>
            </div>
        </div>
      </Card>

      {/* 3. Electricity Usage Stats */}
      <Card className="flex-grow">
        <SectionTitle 
          title="照明用电统计" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="space-y-3 pt-1">
          {lightingElectricityStats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-cyan-100 font-medium">{stat.name}</span>
                <span className="text-cyan-400 font-mono scale-90">{stat.value} 度 <span className="text-gray-400 ml-1">{stat.percent}</span></span>
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
      
      {/* 4. Emergency Lighting Distribution */}
      <Card className="h-44">
        <SectionTitle title="应急照明分布" />
        <div className="h-28 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emergencyLightingData} barSize={12}>
                <XAxis 
                   dataKey="name" 
                   stroke="#94a3b8" 
                   fontSize={10} 
                   tickLine={false} 
                   axisLine={true} 
                   tick={{fill: '#94a3b8'}}
                />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#0ea5e9', fontSize: '12px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {emergencyLightingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-[10px] text-red-400/60 text-center mt-[-5px]">点击后到地图上查看对于区域的应急照明分布情况</div>
        </div>
      </Card>
    </div>
  );
};
export default LightingLeftPanel;
