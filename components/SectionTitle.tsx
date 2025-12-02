import React from 'react';

interface SectionTitleProps {
  title: string;
  extra?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, extra }) => {
  return (
    <div className="flex items-center justify-between mb-3 border-l-4 border-cyan-400 pl-3 bg-gradient-to-r from-cyan-900/40 to-transparent py-1">
      <h3 className="text-cyan-100 font-bold text-lg tracking-wide shadow-cyan-500 drop-shadow-sm">
        {title}
      </h3>
      {extra && <div>{extra}</div>}
    </div>
  );
};

export default SectionTitle;