
import React from 'react';
import WaterLeftPanel from './panels/WaterLeftPanel';
import PVLeftPanel from './panels/PVLeftPanel';
import HVACLeftPanel from './panels/HVACLeftPanel';
import LightingLeftPanel from './panels/LightingLeftPanel';
import SafeLeftPanel from './panels/SafeLeftPanel';
import EnergyLeftPanel from './panels/EnergyLeftPanel';

interface LeftPanelProps {
  activeTab: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'energy':
      return <EnergyLeftPanel />;
    case 'water':
      return <WaterLeftPanel />;
    case 'hvac':
      return <HVACLeftPanel />;
    case 'light':
      return <LightingLeftPanel />;
    case 'safe':
      return <SafeLeftPanel />;
    case 'pv':
    default:
      return <PVLeftPanel />;
  }
};

export default LeftPanel;
