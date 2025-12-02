
import React from 'react';
import { Thermometer, Coffee, Zap, Gauge, ArrowUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import { AlertItem } from '../../types';

// --- WATER DATA ---
const waterTrendData = [
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

const waterAlerts: AlertItem[] = [
  { id: '1', location: '主楼 3 楼男厕', time: '2025-10-26', type: '流量异常', status: 'pending' },
  { id: '2', location: '主楼 8 楼男厕', time: '2025-10-20', type: '流量异常', status: 'pending' },
  { id: '3', location: '主楼 3 楼男厕', time: '2025-10-08', type: '时长异常', status: 'pending' },
  { id: '4', location: '主楼 8 楼男厕', time: '2025-09-26', type: '负压异常', status: 'pending' },
  { id: '5', location: '主楼 3 楼男厕', time: '2025-09-26', type: '流量异常', status: 'pending' },
];

const WaterRightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pl-1 pb-20">
      
      {/* 1. Water Boiler Monitoring */}
      <Card>
        <SectionTitle 
          title="开水器设备运行监控" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">主楼 1 楼<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-blue-600/20 rounded-full mr-3 text-blue-400"><Thermometer size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">98<span className="text-xs ml-1 font-sans opacity-70">℃</span></div>
               <div className="text-xs text-gray-400">水温</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-cyan-600/20 rounded-full mr-3 text-cyan-400"><Coffee size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">12<span className="text-xs ml-1 font-sans opacity-70">分钟</span></div>
               <div className="text-xs text-gray-400">加热时间</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-indigo-600/20 rounded-full mr-3 text-indigo-400"><Zap size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">1.2<span className="text-xs ml-1 font-sans opacity-70">kWh</span></div>
               <div className="text-xs text-gray-400">日均能耗</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-teal-600/20 rounded-full mr-3 text-teal-400"><Gauge size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">0.6<span className="text-xs ml-1 font-sans opacity-70">MPa</span></div>
               <div className="text-xs text-gray-400">水压</div>
             </div>
          </div>
        </div>
      </Card>

      {/* 2. Water Usage Trend */}
      <Card className="flex-grow min-h-[220px]">
        <SectionTitle 
          title="用水时段趋势" 
          extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 7 天<span className="ml-1 text-[8px]">▼</span></div>} 
        />
        <div className="h-40 w-full relative mt-2">
          <div className="absolute text-[10px] text-gray-400 -top-2 left-0">单位: 吨</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={waterTrendData}>
              <defs>
                <linearGradient id="colorValueWater" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorValueWater)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 3. History Abnormal List (Water) */}
      <Card className="flex-grow">
        <SectionTitle title="历史异常处理列表" />
        <div className="flex justify-between items-center mb-3 bg-slate-800/50 p-2 rounded text-sm">
           <div className="flex items-center">
             <span className="text-xs text-gray-400 mr-2">异常数量</span>
             <span className="text-cyan-400 font-bold font-display text-lg">56</span>
             <ArrowUp size={12} className="text-cyan-400 ml-1" />
           </div>
           <div className="flex items-center">
             <span className="text-xs text-gray-400 mr-2">维修中</span>
             <span className="text-blue-400 font-bold font-display text-lg">16</span>
             <ArrowUp size={12} className="text-blue-400 ml-1" />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-800/80 text-gray-300">
              <tr>
                <th className="p-2 rounded-l font-normal">位置</th>
                <th className="p-2 font-normal">时间</th>
                <th className="p-2 font-normal">异常情况</th>
                <th className="p-2 rounded-r font-normal">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {waterAlerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-2 text-gray-300">{alert.location}</td>
                  <td className="p-2 text-gray-400 font-mono scale-90 origin-left">{alert.time}</td>
                  <td className={`p-2 ${alert.type.includes('时长') ? 'text-red-400' : alert.type.includes('负压') ? 'text-yellow-400' : 'text-green-400'}`}>
                    {alert.type}
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

export default WaterRightPanel;
