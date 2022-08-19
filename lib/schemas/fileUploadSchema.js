import * as Yup from "yup";
import {object} from "yup";

const fileUploadSchema = object({
  file: Yup.string()
    .required('Select a file').nullable()
})

export default fileUploadSchema