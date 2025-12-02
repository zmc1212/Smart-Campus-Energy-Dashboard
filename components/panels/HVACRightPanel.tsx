
import React from 'react';
import { ArrowUp, Zap, Fan, Thermometer, Gauge } from 'lucide-react';
import { ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- HVAC DATA ---
const hvacEnergyShareData = [
  { name: '宿舍', value: 2680, percent: '32%', color: '#34d399' }, 
  { name: '教学楼', value: 1896, percent: '18%', color: '#fbbf24' },
  { name: '图书馆', value: 2365, percent: '30%', color: '#f472b6' },
  { name: '食堂', value: 1658, percent: '15%', color: '#3b82f6' },
  { name: '其他区域', value: 968, percent: '5%', color: '#f97316' },
];

const hvacAlerts = [
  { id: '1', location: '主楼 302 室', time: '06:32', status: '开启', type: '正常' },
  { id: '2', location: '主楼 305 室', time: '03:36', status: '开启', type: '正常' },
  { id: '3', location: '主楼 306 室', time: '08:25', status: '离线', type: '离线' },
  { id: '4', location: '主楼 506 室', time: '04:12', status: '关闭', type: '关闭' },
  { id: '5', location: '主楼 602 室', time: '00:36', status: '正常', type: '正常' },
  { id: '6', location: '主楼 702 室', time: '02:56', status: '正常', type: '正常' },
  { id: '7', location: '主楼 806 室', time: '03:26', status: '关闭', type: '关闭' },
  { id: '8', location: '主楼 903 室', time: '02:10', status: '正常', type: '正常' },
];

const HVACRightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pl-1 pb-20">
      
      {/* 1. HVAC Energy Stats */}
      <Card className="flex-grow">
        <SectionTitle 
          title="空调系统能耗统计" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="flex items-center justify-between h-40">
          <div className="w-1/2 h-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hvacEnergyShareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {hvacEnergyShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/2 pl-2 space-y-1 text-xs">
             {hvacEnergyShareData.map((item, idx) => (
               <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-sm mr-2" style={{backgroundColor: item.color}}></span>
                    <span className="text-gray-300 scale-90 origin-left">{item.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-gray-400 scale-90">{item.value} 度</span>
                    <span className="text-white font-mono scale-90">{item.percent}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </Card>

      {/* 2. HVAC Energy Saving Display */}
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
             <div className="text-lg font-bold text-white">8</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">冷冻水泵</div>
             <div className="text-lg font-bold text-white">6</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">冷热源系统</div>
             <div className="text-lg font-bold text-white">4</div>
           </div>
           <div className="bg-slate-800/30 p-2 rounded text-center border border-slate-700/50">
             <div className="text-[10px] text-gray-400 mb-1">中央控制器</div>
             <div className="text-lg font-bold text-white">4</div>
           </div>
        </div>
      </Card>

      {/* 3. HVAC Patrol List */}
      <Card className="flex-grow">
        <SectionTitle title="空调系统巡视列表" />
        <div className="flex justify-between items-center mb-3 bg-slate-800/50 p-2 rounded text-sm">
           <div className="flex items-center">
             <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 mr-2">已开启</span>
             <span className="text-cyan-400 font-bold font-display text-lg">56</span>
             <ArrowUp size={12} className="text-cyan-400 ml-1" />
           </div>
           <div className="flex items-center">
             <span className="text-xs bg-slate-700/50 text-gray-300 px-2 py-0.5 rounded border border-slate-600 mr-2">已关闭</span>
             <span className="text-blue-400 font-bold font-display text-lg">16</span>
             <ArrowUp size={12} className="text-blue-400 ml-1" />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-800/80 text-gray-300">
              <tr>
                <th className="p-2 rounded-l font-normal">空调位置</th>
                <th className="p-2 font-normal">最近使用时长</th>
                <th className="p-2 font-normal">状态</th>
                <th className="p-2 rounded-r font-normal">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {hvacAlerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-2 text-gray-300">{alert.location}</td>
                  <td className="p-2 text-gray-400 font-mono scale-90 origin-left">{alert.time}</td>
                  <td className={`p-2 ${
                    alert.status === '开启' ? 'text-green-400' : 
                    alert.status === '离线' ? 'text-red-400' : 
                    alert.status === '关闭' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {alert.status}
                  </td>
                  <td className="p-2">
                    <button className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-500/50 px-2 py-0.5 rounded text-[10px] transition-colors">
                      详情
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default HVACRightPanel;
