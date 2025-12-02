
import React from 'react';
import { ArrowUp } from 'lucide-react';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

// --- LIGHTING DATA ---
const facilityDetails = [
    { name: '体育场', count: 86, icon: '🏟️' },
    { name: '图书馆', count: 168, icon: '📚' },
    { name: '道路', count: 126, icon: '🛣️' },
    { name: '教学楼', count: 269, icon: '🏫' },
    { name: '宿舍', count: 362, icon: '🏠' },
    { name: '体育馆', count: 96, icon: '🏀' },
    { name: '景观', count: 32, icon: '🌳' },
    { name: '其他', count: 32, icon: '⚙️' },
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

const LightingRightPanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pl-1 pb-20">
      
      {/* 1. Facility Quantity Breakdown */}
      <Card>
        <SectionTitle title="照明设施数量" />
        <div className="grid grid-cols-2 gap-3">
            {facilityDetails.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-800/30 p-2 rounded border border-slate-700/50">
                    <div className="flex items-center">
                        <span className="mr-2 text-lg filter grayscale opacity-80">{item.icon}</span>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-display text-white">{item.count}<span className="text-xs font-sans text-gray-400 ml-1">个</span></span>
                            <span className="text-xs text-gray-400">{item.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Card>

      {/* 2. Safety Inspection Record */}
      <Card className="flex-grow">
        <SectionTitle title="安全用电巡检记录" />
        <div className="flex justify-between items-center mb-3 bg-slate-800/50 p-2 rounded text-sm">
           <div className="flex items-center">
             <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 mr-2">故障设备</span>
             <span className="text-cyan-400 font-bold font-display text-lg">56</span>
             <ArrowUp size={12} className="text-cyan-400 ml-1" />
           </div>
           <div className="flex items-center">
             <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded border border-blue-800 mr-2">维修中</span>
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
export default LightingRightPanel;
