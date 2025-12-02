
import React from 'react';
import WaterRightPanel from './panels/WaterRightPanel';
import PVRightPanel from './panels/PVRightPanel';
import HVACRightPanel from './panels/HVACRightPanel';
import LightingRightPanel from './panels/LightingRightPanel';
import SafeRightPanel from './panels/SafeRightPanel';
import EnergyRightPanel from './panels/EnergyRightPanel';

interface RightPanelProps {
  activeTab: string;
}

const RightPanel: React.FC<RightPanelProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'energy':
      return <EnergyRightPanel />;
    case 'water':
      return <WaterRightPanel />;
    case 'hvac':
      return <HVACRightPanel />;
    case 'light':
      return <LightingRightPanel />;
    case 'safe':
      return <SafeRightPanel />;
    case 'pv':
    default:
      return <PVRightPanel />;
  }
};

export default RightPanel;
