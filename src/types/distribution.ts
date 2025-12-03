export interface Distribution {
  id: string;
  region: string;
  date: string;
  status: 'Planned' | 'In Progress' | 'Completed' | 'Cancelled';
  beneficiaries: number;
  aidType: string;
  deliveryChannel: string;
  beneficiaryList?: Array<{ id: string; name: string }>;
}
