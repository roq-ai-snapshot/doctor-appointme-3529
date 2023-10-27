import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  day: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  doctor_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
