'use client';

import React from 'react';
import { 
  Landmark, 
  Fish, 
  Users, 
  GraduationCap, 
  Building2, 
  Anchor, 
  CheckCircle2 
} from 'lucide-react';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/config/constants';

interface Props {
  selectedGroup: StakeholderGroup | null;
  onSelectGroup: (group: StakeholderGroup) => void;
}

export default function StakeholderPicker({ selectedGroup, onSelectGroup }: Props) {
  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'Fish': return <Fish className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <Anchor className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {STAKEHOLDER_GROUPS.map((group) => {
        const isSelected = selectedGroup?.id === group.id;

        return (
          <div
            key={group.id}
            onClick={() => onSelectGroup(group)}
            className={`cursor-pointer rounded-2xl p-5 border-2 transition-all relative flex flex-col justify-between ${
              isSelected
                ? 'border-ocean-600 bg-ocean-50/70 shadow-lg ring-2 ring-ocean-200 scale-[1.02]'
                : 'border-slate-200 bg-white hover:border-ocean-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-ocean-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {getStakeholderIcon(group.iconName)}
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${group.badgeColor}`}>
                  Target: {group.target} Org
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 mb-1.5 leading-snug">
                {group.nama}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {group.deskripsi}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100/80">
              <span className="text-[11px] font-medium text-slate-400 block truncate" title={group.contohSubjek}>
                <strong>Contoh:</strong> {group.contohSubjek}
              </span>
            </div>

            {isSelected && (
              <div className="absolute top-3 right-3 w-5 h-5 bg-ocean-600 text-white rounded-full flex items-center justify-center shadow">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
