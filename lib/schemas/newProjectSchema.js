import * as Yup from "yup";
import {object} from "yup";

const newProjectSchema = object({
  projectName: Yup.string().required('Project Name Required.'),
  disasterType: Yup.string().required('Disaster Type Required.'),
})

export default newProjectSchema