import * as Yup from "yup";
import {object} from "yup";

const socialMediaSchema = object({
  socialMedia: Yup.array().min(1, 'Select at least one Social Media.').of(Yup.string().required()).required(),
})

export default socialMediaSchema