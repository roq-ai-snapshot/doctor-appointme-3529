interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Patient'],
  tenantRoles: ['Administrator', 'Doctor', 'Nurse', 'Receptionist'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Read clinic information',
    'Manage own appointments',
    'Read own prescriptions',
    'Read own medical records',
  ],
  ownerAbilities: ['Manage user data', 'Manage clinic data', 'Manage appointment data', 'Manage prescription data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6e70ecca-d015-4fe5-902d-6672a749035e',
};
