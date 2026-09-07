import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/config/constants';

export const StakeholderQueries = {
  getAll(): StakeholderGroup[] {
    return STAKEHOLDER_GROUPS;
  },

  getById(id: string): StakeholderGroup | undefined {
    return STAKEHOLDER_GROUPS.find(g => g.id === id);
  }
};
