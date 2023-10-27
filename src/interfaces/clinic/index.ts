import { AppointmentInterface } from 'interfaces/appointment';
import { ScheduleInterface } from 'interfaces/schedule';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  schedule?: ScheduleInterface[];

  _count?: {
    appointment?: number;
    schedule?: number;
  };
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name?: string;
  tenant_id?: string;
}
