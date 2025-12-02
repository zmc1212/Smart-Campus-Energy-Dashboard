
import React from 'react';
import { Building2, BookOpen, FlaskConical, Home } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- PV DATA ---
const pvCounts = [
  { location: '教学楼', count: 126, unit: '块', icon: Building2 },
  { location: '图书馆', count: 182, unit: '块', icon: BookOpen },
  { location: '实验室', count: 162, unit: '块', icon: FlaskConical },
  { location: '宿舍', count: 228, unit: '块', icon: Home },
];

const pvGenStats = [
  { name: '教学楼南楼', value: 398.9, total: 500, label: '398.9kW (692 块 ×575Wp)' },
  { name: '教学楼北楼', value: 428.9, total: 500, label: '428.9kW (692 块 ×575Wp)' },
  { name: '图书馆', value: 360.9, total: 500, label: '360.9kW (522 块 ×575Wp)' },
  { name: '宿舍A栋', value: 398.9, total: 500, label: '398.9kW (692 块 ×575Wp)' },
  { name: '宿舍B栋', value: 398.9, total: 500, label: '398.9kW (692 块 ×575Wp)' },
];

const pvAbnormalData = [
  { name: '电流异常', value: 45, color: '#34d399' },
  { name: '温度异常', value: 20, color: '#f87171' }, 
  { name: '电压异常', value: 30, color: '#38bdf8' },
];

const PVLeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1 pb-20">
      
      {/* 1. PV Panel Count */}
      <Card>
        <SectionTitle title="光伏发电板数量" />
        <div className="grid grid-cols-2 gap-3">
          {pvCounts.map((item, idx) => (
            <div key={idx} className="flex items-center bg-cyan-950/30 p-3 rounded border border-cyan-900/50">
              <div className="p-2 bg-blue-900/50 rounded-full mr-3 text-blue-400">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-white">
                  {item.count}<span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                </div>
                <div className="text-xs text-cyan-200">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. PV Operation Monitoring */}
      <Card className="flex-grow">
        <SectionTitle title="光伏发电运行监控" />
        <div className="flex items-center justify-between p-2">
            <div className="relative w-28 h-28 flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-500/10 rotate-45 rounded-xl border border-blue-500/30"></div>
               <div className="absolute inset-2 bg-cyan-500/10 rotate-45 rounded-xl border border-cyan-500/30"></div>
               <div className="text-center z-10">
                 <div className="text-3xl font-bold text-cyan-300 font-display">368</div>
                 <div className="text-[10px] text-gray-400">设备总数</div>
               </div>
            </div>
            <div className="space-y-2 flex-1 ml-4">
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-cyan-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>运行</div>
                 <div className="font-mono font-bold">300</div>
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

      {/* 3. Power Generation Statistics */}
      <Card className="flex-grow">
        <SectionTitle 
          title="发电量统计" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">当日<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="space-y-3 pt-1">
          {pvGenStats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-cyan-100 font-medium">{stat.name}</span>
                <span className="text-cyan-400 scale-90">{stat.label}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 relative"
                  style={{ width: `${(stat.value / stat.total) * 100}%` }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      {/* 4. Abnormal Warnings (PV) */}
      <Card className="h-44">
        <SectionTitle title="异常预警" />
        <div className="h-28 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pvAbnormalData} barSize={12}>
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
                  {pvAbnormalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
             <div className="text-[10px] text-red-400/60 text-center mt-[-5px]">点击后到地图上查看对于区域的异常分布情况</div>
        </div>
      </Card>

    </div>
  );
};

export default PVLeftPanel;
