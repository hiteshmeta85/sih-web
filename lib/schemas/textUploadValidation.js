import * as Yup from "yup";
import {object} from "yup";

const textUploadSchema = object({
  name: Yup.string().required('Text is Required.'),
})

export default textUploadSchema