import * as Yup from "yup";
import {object} from "yup";

const twitterAlert = object({
  message: Yup.string().required('Message Required.'),
})

export default twitterAlert