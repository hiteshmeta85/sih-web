import {useRouter} from 'next/router'
import DashboardContainer from "../_layout";

const ViewIndividualProject = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <DashboardContainer title={"#"}>
      Project Id: {id}
    </DashboardContainer>
  )
}

export default ViewIndividualProject