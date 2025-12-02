export interface PVStat {
  location: string;
  count: number;
  icon: 'building' | 'book' | 'flask' | 'home';
}

export interface EquipmentStatus {
  label: string;
  value: string;
  unit: string;
  icon: 'zap' | 'activity' | 'battery' | 'gauge';
}

export interface AlertItem {
  id: string;
  location: string;
  time: string;
  type: string;
  status: 'pending' | 'fixing';
}

export enum BuildingType {
  Teaching = 'Teaching',
  Library = 'Library',
  Lab = 'Lab',
  Dorm = 'Dorm'
}