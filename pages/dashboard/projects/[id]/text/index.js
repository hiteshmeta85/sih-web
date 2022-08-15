import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "../_tabsLayout";
import CustomTable from "../../../../../components/Table/CustomTable";
import axios from "axios";

const ProjectTextView = ({twitterData}) => {

  // const [tweets, setTweets] = useState([])
  //
  // const router = useRouter()
  // const {id} = router.query
  //
  // const getTwitterData = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/projects/39/text`, {
  //       headers: {
  //         'content-type': 'application/json',
  //         "access-control-allow-origin": "*",
  //         "access-control-all-headers": "*",
  //       }
  //     })
  //
  //     const twitterData = response.data.data.twitterData
  //
  //     setTweets([...tweets, twitterData]);  // set State
  //
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //
  //   getTwitterData()
  //   // const interval = setInterval(() => {
  //   //   getPosts()
  //   // }, 10000)
  //
  //   //
  //   // return () => clearInterval(interval)
  // }, [])
  //
  // if(!tweets) {
  //   return '...loading'
  // }

  return (
    <TabsLayout defaultIndex={0}>
      <TabPanels bg={"white"}>
        <TabPanel overflowX={'scroll'}>
          {twitterData && <CustomTable data={twitterData}/>}
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextView

export async function getServerSideProps(context) {
  const { id } = context.query;
  let twitterData

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/${id}/text`)
    if (res.data) {
      console.log(res.data)
      twitterData = res.data.data.twitterData
      console.log(twitterData)
    }
  } catch (e) {
    console.log(e)
    twitterData = null
  }

  return {
    props: {
      twitterData
    }
  }
}