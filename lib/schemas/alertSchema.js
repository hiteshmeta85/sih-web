import * as Yup from "yup";
import {object} from "yup";

const alertSchema = object({
  title: Yup.string().required('Title Required.'),
  description: Yup.string().required('Description Required.'),
  label: Yup.string().required('Label Required.'),
  severityType: Yup.string().required('Select severity.'),
  geolocation_lat: Yup.number(),
  geolocation_lng: Yup.number(),
  address: Yup.string(),
})

export default alertSchema