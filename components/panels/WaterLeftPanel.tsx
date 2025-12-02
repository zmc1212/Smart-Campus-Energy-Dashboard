
import React from 'react';
import { Building2, BookOpen, FlaskConical, Home, ArrowUp } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- WATER DATA ---
const waterCounts = [
  { location: '教学楼', count: 126, unit: '吨', icon: Building2 },
  { location: '图书馆', count: 12, unit: '吨', icon: BookOpen },
  { location: '实验室', count: 262, unit: '吨', icon: FlaskConical },
  { location: '宿舍', count: 428, unit: '吨', icon: Home },
];

const waterUsageShareData = [
  { name: '宿舍区', value: 2680, percent: '32%', color: '#34d399' }, 
  { name: '教学区', value: 1896, percent: '18%', color: '#fbbf24' },
  { name: '食堂', value: 2365, percent: '30%', color: '#f472b6' },
  { name: '实验室', value: 1658, percent: '15%', color: '#3b82f6' },
  { name: '其他区域', value: 968, percent: '5%', color: '#f97316' },
];

const waterEquipmentStats = [
  { name: '教学楼南楼', value: 84, total: 100 },
  { name: '教学楼北楼', value: 92, total: 100 },
  { name: '图书馆', value: 126, total: 150 },
  { name: '宿舍A栋', value: 82, total: 100 },
  { name: '宿舍B栋', value: 80, total: 100 },
];

const waterAbnormalData = [
  { name: '流量异常', value: 45, color: '#34d399' },
  { name: '时长异常', value: 20, color: '#f87171' }, 
  { name: '负压异常', value: 30, color: '#38bdf8' },
];

const WaterLeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1 pb-20">
      <Card>
        <SectionTitle title="实时总用水量（吨）" />
        <div className="grid grid-cols-2 gap-3">
          {waterCounts.map((item, idx) => (
            <div key={idx} className="flex items-center bg-cyan-950/30 p-3 rounded border border-cyan-900/50">
              <div className="p-2 bg-cyan-900/50 rounded-full mr-3 text-cyan-400">
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

      <Card className="flex-grow">
        <SectionTitle 
          title="区域用水占比" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近七天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="flex items-center justify-between h-40">
          <div className="w-1/2 h-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={waterUsageShareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {waterUsageShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/2 pl-2 space-y-1 text-xs">
             {waterUsageShareData.map((item, idx) => (
               <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-sm mr-2" style={{backgroundColor: item.color}}></span>
                    <span className="text-gray-300 scale-90 origin-left">{item.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-gray-400 scale-90">{item.value} 吨</span>
                    <span className="text-white font-mono scale-90">{item.percent}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </Card>

      <Card className="flex-grow">
        <SectionTitle 
          title="节水设备数量" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">智能感应龙头<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="space-y-4 pt-1">
          {waterEquipmentStats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className="flex justify-between text-xs mb-1 items-end">
                <span className="text-cyan-100 font-medium">{stat.name}</span>
                <span className="text-cyan-400 font-bold flex items-center">
                   {stat.value} <ArrowUp size={10} className="ml-0.5" />
                </span>
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
      
      <Card className="h-44">
        <SectionTitle title="异常阈值预警" />
        <div className="h-28 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterAbnormalData} barSize={12}>
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
                  {waterAbnormalData.map((entry, index) => (
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

export default WaterLeftPanel;
