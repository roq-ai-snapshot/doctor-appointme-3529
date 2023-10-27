import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  doctor_id: string;
  clinic_id: string;
  day: string;
  start_time: any;
  end_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  clinic_id?: string;
  day?: string;
}
