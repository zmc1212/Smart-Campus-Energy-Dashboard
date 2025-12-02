
import React from 'react';
import { ArrowUp, Thermometer, Droplets } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- SAFE ELECTRICITY DATA ---
const inspectionStats = [
  { name: '违规用电', value: 28, color: '#34d399' },
  { name: '设备老化', value: 16, color: '#f472b6' },
  { name: '线路负载异常', value: 12, color: '#3b82f6' },
  { name: '安全设施失效', value: 4, color: '#fbbf24' },
];

const inspectionRecords = [
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '异常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '异常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '异常', type: 'detail' },
    { date: '2025-11-18', location: '主楼 306 室', status: '正常', type: 'detail' },
];

const SafeRightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pl-1 pb-20">
      
      {/* 1. Power Room Environment */}
      <Card>
        <SectionTitle title="配电室环境" />
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-blue-600/20 rounded-full mr-3 text-blue-400"><Thermometer size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">31.3<span className="text-xs ml-1 font-sans opacity-70">℃</span></div>
               <div className="text-xs text-gray-400">室外温度</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-cyan-600/20 rounded-full mr-3 text-cyan-400"><Droplets size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">62.8<span className="text-xs ml-1 font-sans opacity-70">%</span></div>
               <div className="text-xs text-gray-400">室外湿度</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-indigo-600/20 rounded-full mr-3 text-indigo-400"><Thermometer size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">31.3<span className="text-xs ml-1 font-sans opacity-70">℃</span></div>
               <div className="text-xs text-gray-400">室内温度</div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-3 rounded border border-blue-800/30 flex items-center">
             <div className="p-2 bg-teal-600/20 rounded-full mr-3 text-teal-400"><Droplets size={20} /></div>
             <div>
               <div className="text-xl font-bold font-display text-white">67.8<span className="text-xs ml-1 font-sans opacity-70">%</span></div>
               <div className="text-xs text-gray-400">室内湿度</div>
             </div>
          </div>
        </div>
      </Card>

      {/* 2. Safety Inspection Statistics */}
      <Card className="flex-grow min-h-[200px]">
        <SectionTitle 
           title="用电安全巡检统计" 
           extra={<div className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-cyan-300 flex items-center">近 30 天<span className="ml-1 text-[8px]">▼</span></div>}
        />
        <div className="h-40 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inspectionStats} barSize={12}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis 
                   dataKey="name" 
                   stroke="#94a3b8" 
                   fontSize={10} 
                   tickLine={false} 
                   axisLine={false}
                   interval={0}
                   tick={{fill: '#94a3b8', fontSize: 9}}
                   tickFormatter={(value) => {
                       // simple wrap for long text
                       return value.length > 4 ? value.slice(0, 4) + '..' : value;
                   }}
                />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#0ea5e9', fontSize: '12px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {inspectionStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>
      </Card>

      {/* 3. Safety Inspection Records */}
      <Card className="flex-grow">
        <SectionTitle title="安全用电巡检记录" />
        <div className="flex justify-between items-center mb-3 bg-slate-800/50 p-2 rounded text-sm">
           <div className="flex items-center">
             <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 mr-2">已整改</span>
             <span className="text-cyan-400 font-bold font-display text-lg">56</span>
             <ArrowUp size={12} className="text-cyan-400 ml-1" />
           </div>
           <div className="flex items-center">
             <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded border border-blue-800 mr-2">未整改</span>
             <span className="text-blue-400 font-bold font-display text-lg">16</span>
             <ArrowUp size={12} className="text-blue-400 ml-1" />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-800/80 text-gray-300">
              <tr>
                <th className="p-2 rounded-l font-normal">巡检日期</th>
                <th className="p-2 font-normal">巡检位置</th>
                <th className="p-2 font-normal">巡检状态</th>
                <th className="p-2 rounded-r font-normal">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {inspectionRecords.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-2 text-gray-400 font-mono scale-90 origin-left">{item.date}</td>
                  <td className="p-2 text-gray-300">{item.location}</td>
                  <td className={`p-2 ${item.status === '正常' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.status}
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
export default SafeRightPanel;
