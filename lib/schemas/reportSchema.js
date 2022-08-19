import * as Yup from "yup";
import {object} from "yup";

const reportSchema = object({
  startDate: Yup.date('Invalid Date Format'),
  endDate: Yup.date('Invalid Date Format')
    .min(
      Yup.ref('startDate'),
      "End date can't be before start date"
    )
})

export default reportSchema