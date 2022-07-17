import * as Yup from "yup";
import {object} from "yup";

const hashtagSchema = object({
  hashtags: Yup.array().min(1, 'Select at least one hashtag.').of(Yup.string().required()).required(),
})

export default hashtagSchema