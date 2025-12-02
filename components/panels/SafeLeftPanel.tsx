
import React from 'react';
import { Zap, Activity, Thermometer, AlertTriangle, ArrowUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- SAFE ELECTRICITY DATA ---
const powerStats = [
  { label: '进线电压', value: '30', unit: 'kV', icon: Zap, color: 'text-blue-400', bg: 'bg-blue-900/50' },
  { label: '出线电压', value: '220', unit: 'V', icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-900/50' },
  { label: '电流', value: '1200', unit: 'A', icon: Activity, color: 'text-teal-400', bg: 'bg-teal-900/50' },
  { label: '油温', value: '42.8', unit: '℃', icon: Thermometer, color: 'text-orange-400', bg: 'bg-orange-900/50' },
];

const equipmentUsageStats = [
  { name: '照明用电', value: 680, percent: 12, color: '#38bdf8' },
  { name: '办公与教学设备用电', value: 1268, percent: 24, color: '#3b82f6' },
  { name: '空调用电', value: 3268, percent: 45, color: '#fbbf24' },
  { name: '公共区域设备运行用电', value: 598, percent: 10, color: '#f97316' },
  { name: '食堂经营用电', value: 598, percent: 10, color: '#34d399' },
];

const abnormalCurrentData = [
  { name: '电流过载', value: 5, percent: '50%', color: '#34d399' },
  { name: '电流不平衡', value: 2, percent: '20%', color: '#fbbf24' },
  { name: '短路与漏电', value: 1, percent: '10%', color: '#f472b6' },
  { name: '电流异常波动', value: 1, percent: '10%', color: '#3b82f6' },
  { name: '负荷异常', value: 0, percent: '0%', color: '#f97316' },
];

const SafeLeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1 pb-20">
      
      {/* 1. Power Distribution Room Status */}
      <Card>
        <SectionTitle title="配电室状态" />
        <div className="grid grid-cols-2 gap-3">
          {powerStats.map((item, idx) => (
            <div key={idx} className="flex items-center bg-cyan-950/30 p-3 rounded border border-cyan-900/50">
              <div className={`p-2 rounded-full mr-3 ${item.color} ${item.bg}`}>
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-xl font-bold font-display text-white">
                  {item.value}<span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                </div>
                <div className="text-xs text-cyan-200">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. Safe Power Equipment Count */}
      <Card className="flex-grow">
        <SectionTitle title="安全用电设备数量" />
        <div className="flex items-center justify-between p-2">
            <div className="relative w-28 h-28 flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-500/10 rotate-45 rounded-xl border border-blue-500/30"></div>
               <div className="absolute inset-2 bg-cyan-500/10 rotate-45 rounded-xl border border-cyan-500/30"></div>
               <div className="text-center z-10">
                 <div className="text-3xl font-bold text-cyan-300 font-display">28</div>
                 <div className="text-[10px] text-gray-400">设备总数</div>
               </div>
            </div>
            <div className="space-y-2 flex-1 ml-4">
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-cyan-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>运行</div>
                 <div className="font-mono font-bold">25</div>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-blue-300"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>备用</div>
                 <div className="font-mono font-bold">3</div>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded text-xs">
                 <div className="flex items-center text-yellow-300"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>故障</div>
                 <div className="font-mono font-bold">0</div>
              </div>
            </div>
        </div>
      </Card>

      {/* 3. Equipment Power Stats */}
      <Card className="flex-grow">
        <SectionTitle 
          title="设备用电统计" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="space-y-3 pt-1">
          {equipmentUsageStats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-cyan-100 font-medium">{stat.name}</span>
                <span className="text-cyan-400 font-mono scale-90">{stat.value} 度 <span className="text-gray-400 ml-1">{stat.percent}%</span></span>
              </div>
              <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full relative"
                  style={{ width: `${stat.percent}%`, backgroundColor: stat.color }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      {/* 4. Abnormal Current Stats */}
      <Card className="h-56">
        <SectionTitle 
           title="异常电流统计" 
           extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>}
        />
        <div className="flex items-center h-full pb-2">
            <div className="w-2/5 h-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={abnormalCurrentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={55}
                      dataKey="value"
                      stroke="none"
                    >
                      {abnormalCurrentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="w-3/5 space-y-1.5 text-[10px]">
                {abnormalCurrentData.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-sm mr-2" style={{backgroundColor: item.color}}></span>
                            <span className="text-gray-300 scale-90 origin-left truncate max-w-[80px]">{item.name}</span>
                        </div>
                        <div className="flex space-x-2">
                            <span className="text-gray-400 scale-90">{item.value} 次</span>
                            <span className="text-white font-mono scale-90">{item.percent}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Card>

    </div>
  );
};

export default SafeLeftPanel;
