import * as Yup from "yup";
import {object} from "yup";

const alertSchema = object({
  address: Yup.string(),
  geolocation_lat: Yup.number(),
  geolocation_lng: Yup.number(),
})

export default alertSchema