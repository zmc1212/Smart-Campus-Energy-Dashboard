
import React from 'react';
import { X, MapPin, Building, Zap, Fan, Lightbulb, ShieldCheck, Activity } from 'lucide-react';

interface CenterMapProps {
  activeTab: string;
}

const CenterMap: React.FC<CenterMapProps> = ({ activeTab }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
      {/* Placeholder for the 3D Campus Map */}
      <img 
        src="https://picsum.photos/1920/1080" 
        alt="Campus Map" 
        className="w-full h-full object-cover opacity-60"
      />
      
      {/* Gradient Overlay to darken edges for UI readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 pointer-events-none"></div>

      {/* Interactive HUD Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]">
        
        {/* The Connector Line */}
        <div className="absolute -bottom-20 left-1/2 w-0.5 h-20 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 translate-y-full">
           <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping absolute"></div>
           <div className="w-4 h-4 bg-cyan-400 rounded-full relative shadow-[0_0_10px_#22d3ee]"></div>
        </div>

        {/* The HUD Card */}
        <div className="relative bg-slate-900/90 border border-cyan-500/60 p-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-md">
          {/* Header */}
          <div className="flex justify-between items-start mb-4 border-b border-cyan-500/30 pb-2">
            <h2 className="text-xl font-bold text-white tracking-wider">
              {activeTab === 'light' ? '台北路校区体育场' : 
               activeTab === 'safe' ? '教学楼南楼配电室' : 
               activeTab === 'energy' ? '教学楼南楼' : '台北路校区图书馆'}
            </h2>
            <X size={18} className="text-gray-400 cursor-pointer hover:text-white" />
          </div>

          {/* Content Grid - Toggles based on Active Tab */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-cyan-200">
              <MapPin size={14} className="mr-2" />
              <span>
                  {activeTab === 'safe' ? '所在方位: 南楼 306 楼梯间旁配电室' : 
                   activeTab === 'energy' ? '所在方位: 位于学校南部  占地面积: 1400 平方米' :
                   '所在方位: 南门入口台北路直行 200 米右侧'}
              </span>
            </div>
            
            {activeTab === 'water' ? (
              // Water View Details
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">节水改造:</span>
                  <span className="text-white font-mono">96 处</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">平均耗水:</span>
                  <span className="text-white font-mono">216 吨/天</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">平均节约:</span>
                  <span className="text-white font-mono">16 吨/天</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">流量监测:</span>
                  <span className="text-white font-mono">0</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">时长监测:</span>
                  <span className="text-white font-mono">0</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">负压监测:</span>
                  <span className="text-white font-mono">0</span>
                </div>
              </div>
            ) : activeTab === 'hvac' ? (
              // HVAC View Details
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">空调系统:</span>
                  <span className="text-white font-mono">中央空调</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">平均耗电:</span>
                  <span className="text-white font-mono">216 度/天</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">当前状态:</span>
                  <span className="text-green-400 font-bold">已开启</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">当前模式:</span>
                  <span className="text-white font-mono">制热</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">室内温度:</span>
                  <span className="text-white font-mono">22℃</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">室外温度:</span>
                  <span className="text-white font-mono">12℃</span>
                </div>
              </div>
            ) : activeTab === 'light' ? (
              // Lighting View Details
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">照明数量:</span>
                  <span className="text-white font-mono">106 个</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">平均耗电:</span>
                  <span className="text-white font-mono">216 度/天</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">当前开启:</span>
                  <span className="text-cyan-400 font-bold">98 个</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">离线数量:</span>
                  <span className="text-white font-mono">2 个</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1 col-span-2">
                  <span className="text-gray-400">上次检修:</span>
                  <span className="text-white font-mono">2025 年 10 月 8 日</span>
                </div>
              </div>
            ) : activeTab === 'safe' ? (
              // Safe Electricity View Details
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">进线电压:</span>
                  <span className="text-white font-mono">30kV</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">出线电压:</span>
                  <span className="text-white font-mono">220V</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">运行电流:</span>
                  <span className="text-white font-mono">1200A</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">设备油温:</span>
                  <span className="text-white font-mono">42.8℃</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">室内温度:</span>
                  <span className="text-white font-mono">31.3℃</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">室内湿度:</span>
                  <span className="text-white font-mono">67.8%</span>
                </div>
              </div>
            ) : activeTab === 'energy' ? (
              // Energy Consumption View Details
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">建筑面积:</span>
                  <span className="text-white font-mono">5528 平方米</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">层数:</span>
                  <span className="text-white font-mono">4</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">房间数量:</span>
                  <span className="text-white font-mono">57 间</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">耗电:</span>
                  <span className="text-white font-mono">986 度/天</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1 col-span-2">
                  <span className="text-gray-400">耗水:</span>
                  <span className="text-white font-mono">26 吨/天</span>
                </div>
              </div>
            ) : (
              // PV View Details (Default)
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">光伏板数:</span>
                  <span className="text-white font-mono">182 块</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">装机容量:</span>
                  <span className="text-white font-mono">105 kWp</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">今日发电:</span>
                  <span className="text-white font-mono">360.9 kWh</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">运行状态:</span>
                  <span className="text-green-400 font-bold">正常运行</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">逆变器:</span>
                  <span className="text-white font-mono">2 台</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span className="text-gray-400">倾斜角度:</span>
                  <span className="text-white font-mono">25°</span>
                </div>
              </div>
            )}
          </div>

          {/* Decorative Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg -mt-1 -ml-1"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg -mb-1 -mr-1"></div>
        </div>
      </div>

      {/* Floating map icons (Decoration) */}
      <div className="absolute top-[30%] left-[25%] p-2 bg-blue-600/50 rounded-lg border border-blue-400/50 backdrop-blur animate-pulse">
        <MapPin className="text-white" size={24} />
      </div>
      
      {/* Dynamic icon based on tab */}
      <div className="absolute top-[40%] right-[30%] p-2 bg-cyan-600/50 rounded-lg border border-cyan-400/50 backdrop-blur">
        {activeTab === 'water' ? (
          <Building className="text-white" size={24} />
        ) : activeTab === 'hvac' ? (
          <Fan className="text-white" size={24} />
        ) : activeTab === 'light' ? (
          <Lightbulb className="text-white" size={24} />
        ) : activeTab === 'safe' ? (
          <ShieldCheck className="text-green-400" size={24} />
        ) : activeTab === 'energy' ? (
          <Activity className="text-blue-400" size={24} />
        ) : (
          <Zap className="text-yellow-400" size={24} />
        )}
      </div>

    </div>
  );
};

export default CenterMap;
