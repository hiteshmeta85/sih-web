import * as Yup from "yup";
import {object} from "yup";

const socialMediaSchema = object({
  startDate: Yup.date(),
  endDate: Yup.date()
    .min(
      Yup.ref('startDate'),
      "End date can't be before start date"
    )
})

export default socialMediaSchema