import * as Yup from "yup";
import {object} from "yup";

const twitterAlertSchema = object({
  message: Yup.string().required('Message Required.'),
})

export default twitterAlertSchema