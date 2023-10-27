import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PrescriptionInterface {
  id?: string;
  medicine_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  doctor_id: string;
  patient_id: string;
  created_at?: any;
  updated_at?: any;

  user_prescription_doctor_idTouser?: UserInterface;
  user_prescription_patient_idTouser?: UserInterface;
  _count?: {};
}

export interface PrescriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  medicine_name?: string;
  dosage?: string;
  frequency?: string;
  duration?: string;
  doctor_id?: string;
  patient_id?: string;
}
