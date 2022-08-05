import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetCard from "../../components/Card/TweetCard";

const TweetWithImages = [
  {
    "id": 1546017399186784256,
    "conversation_id": "1546017399186784256",
    "created_at": "2022-07-10 11:54:06 IST",
    "date": "07-102022",
    "time": "11:54:06",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#AmarnathCloudburst #AmarnathYatra2022  #Rescue #Update",
    "language": "qht",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 1,
    "retweets_count": 8,
    "likes_count": 22,
    "hashtags": ["amarnathcloudburst", "amarnathyatra2022", "rescue", "update"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1546017399186784256",
    "retweet": false,
    "quote_url": "https://twitter.com/DDNewslive/status/1546011179403067392",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1546010003659599874,
    "conversation_id": "1546010003659599874",
    "created_at": "2022-07-10 11:24:43 IST",
    "date": "2022-07-10",
    "time": "11:24:43",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "'Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
    "language": "en",
    "mentions": [{
      "screen_name": "ndmaindia",
      "name": "ndma india | राष्ट्रीय आपदा प्रबंधन प्राधिकरण 🇮🇳",
      "id": "2611134289"
    }],
    "urls": ["http://awards.gov.in", "http://ndma.gov.in", "https://ndma.gov.in/subhas-chandra-bose-aapda-prabandhan-puraskar"],
    "photos": [],
    "replies_count": 0,
    "retweets_count": 4,
    "likes_count": 20,
    "hashtags": [],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1546010003659599874",
    "retweet": false,
    "quote_url": "https://twitter.com/ndmaindia/status/1545783857991266304",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545707624980553728,
    "conversation_id": "1545707624980553728",
    "created_at": "2022-07-09 15:23:10 IST",
    "date": "2022-07-09",
    "time": "15:23:10",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#आपदा_सेवा_सदैव_सर्वत्र 🙏🙏",
    "language": "und",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 1,
    "retweets_count": 8,
    "likes_count": 42,
    "hashtags": ["आपदा_सेवा_सदैव_सर्वत्र"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545707624980553728",
    "retweet": false,
    "quote_url": "https://twitter.com/13Bnndrf/status/1545672098927898626",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545681886541856769,
    "conversation_id": "1545681886541856769",
    "created_at": "2022-07-09 13:40:53 IST",
    "date": "2022-07-09",
    "time": "13:40:53",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#AmarnathCloudburst #AmarnathYatra2022  #Rescue #Update",
    "language": "qht",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 0,
    "retweets_count": 16,
    "likes_count": 58,
    "hashtags": ["amarnathcloudburst", "amarnathyatra2022", "rescue", "update"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545681886541856769",
    "retweet": false,
    "quote_url": "https://twitter.com/IAF_MCC/status/1545654852801351680",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545642653659762688,
    "conversation_id": "1545642653659762688",
    "created_at": "2022-07-09 11:04:59 IST",
    "date": "2022-07-09",
    "time": "11:04:59",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#AmarnathYatra2022  #Update #OpsContinues",
    "language": "qht",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 0,
    "retweets_count": 14,
    "likes_count": 29,
    "hashtags": ["amarnathyatra2022", "update", "opscontinues"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545642653659762688",
    "retweet": false,
    "quote_url": "https://twitter.com/PBNS_India/status/1545637621509943296",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545619306289176577,
    "conversation_id": "1545619306289176577",
    "created_at": "2022-07-09 09:32:13 IST",
    "date": "2022-07-09",
    "time": "09:32:13",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#AmarnathYatra22 #RescueOps #Update  🔸#Cloudburst leads #flashflood/landslide 🔸At Lower Holy Cave of Amarnath (J&amp;K) 🔸Rescuers save 5 precious lives 🔸Joint Search &amp; Rescue Ops continues  #आपदा_सेवा_सदैव_सर्वत्र  @HMOIndia @BhallaAjay26 @AtulKarwal @PIBHomeAffairs @PIBSrinagar  https://t.co/XhjSjJiOde",
    "language": "en",
    "mentions": [{
      "screen_name": "hmoindia",
      "name": "गृहमंत्री कार्यालय, hmo india",
      "id": "2541363451"
    }, {
      "screen_name": "bhallaajay26",
      "name": "ajay bhalla",
      "id": "741892853362630658"
    }, {"screen_name": "atulkarwal", "name": "atul karwal", "id": "4824143321"}, {
      "screen_name": "pibhomeaffairs",
      "name": "spokesperson, ministry of home affairs",
      "id": "753189526152081408"
    }, {"screen_name": "pibsrinagar", "name": "pib in jammu kashmir & ladakh", "id": "902109287480037376"}],
    "urls": [],
    "photos": [],
    "replies_count": 2,
    "retweets_count": 21,
    "likes_count": 60,
    "hashtags": ["amarnathyatra22", "rescueops", "update", "cloudburst", "flashflood", "आपदा_सेवा_सदैव_सर्वत्र"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545619306289176577",
    "retweet": false,
    "quote_url": "",
    "video": 1,
    "thumbnail": "https://pbs.twimg.com/ext_tw_video_thumb/1545619226710675456/pu/img/V7xtbj-kdxnRzs15.jpg",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545420422384037889,
    "conversation_id": "1545420422384037889",
    "created_at": "2022-07-08 20:21:55 IST",
    "date": "2022-07-08",
    "time": "20:21:55",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#AmarnathYatra2022  #Cloudburst #OpsContinues",
    "language": "qht",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 3,
    "retweets_count": 11,
    "likes_count": 33,
    "hashtags": ["amarnathyatra2022", "cloudburst", "opscontinues"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545420422384037889",
    "retweet": false,
    "quote_url": "https://twitter.com/News18India/status/1545405724460818434",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1545325984810905600,
    "conversation_id": "1545325984810905600",
    "created_at": "2022-07-08 14:06:40 IST",
    "date": "2022-07-08",
    "time": "14:06:40",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#WomenRescuer 🇮🇳 #SavingLivesAndBeyond",
    "language": "und",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 2,
    "retweets_count": 9,
    "likes_count": 50,
    "hashtags": ["womenrescuer", "savinglivesandbeyond"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1545325984810905600",
    "retweet": false,
    "quote_url": "https://twitter.com/13Bnndrf/status/1544931634675298306",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1544899606831439877,
    "conversation_id": "1544899606831439877",
    "created_at": "2022-07-07 09:52:23 IST",
    "date": "2022-07-07",
    "time": "09:52:23",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#SavingLivesAndBeyond 🇮🇳",
    "language": "und",
    "mentions": [],
    "urls": [],
    "photos": [],
    "replies_count": 4,
    "retweets_count": 2,
    "likes_count": 26,
    "hashtags": ["savinglivesandbeyond"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1544899606831439877",
    "retweet": false,
    "quote_url": "https://twitter.com/01NDRFGUWAHATI/status/1544724194516414464",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1544714056535195648,
    "conversation_id": "1544714056535195648",
    "created_at": "2022-07-06 21:35:05 IST",
    "date": "2022-07-06",
    "time": "21:35:05",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": ".@dr_mohit_gupta a Renowned Cardiologist cum eminent speaker, graces the event at #NDRF HQ.  For a very meaningful &amp; encouraging talk session with DG NDRF Sh. @AtulKarwal &amp; NDRF Rescuers on #Healthy #Lifestyle  #SavingLIvesAndBeyond 🇮🇳 #Motivation #Fitness @PIBHomeAffairs @ANI  https://t.co/gwJ2WWfQ2e",
    "language": "en",
    "mentions": [{
      "screen_name": "dr_mohit_gupta",
      "name": "dr mohit gupta",
      "id": "1001697522178560000"
    }, {"screen_name": "atulkarwal", "name": "atul karwal", "id": "4824143321"}, {
      "screen_name": "pibhomeaffairs",
      "name": "spokesperson, ministry of home affairs",
      "id": "753189526152081408"
    }, {"screen_name": "ani", "name": "ani", "id": "355989081"}],
    "urls": [],
    "photos": ["https://pbs.twimg.com/media/FW_tPTDagAABjXS.jpg"],
    "replies_count": 0,
    "retweets_count": 8,
    "likes_count": 30,
    "hashtags": ["ndrf", "healthy", "lifestyle", "savinglivesandbeyond", "motivation", "fitness"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1544714056535195648",
    "retweet": false,
    "quote_url": "",
    "video": 1,
    "thumbnail": "https://pbs.twimg.com/media/FW_tPTDagAABjXS.jpg",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1544365053750562816,
    "conversation_id": "1544365053750562816",
    "created_at": "2022-07-05 22:28:16 IST",
    "date": "2022-07-05",
    "time": "22:28:16",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#Tree #Plantation Drive Organized by @8NdrfGhaziabad   🔶In the gracious presence of Hon'ble MOS @Gen_VKSingh  🔶NDRF Plants 5000 saplings with DPS Students @ Ghaziabad (UP) 🔶Sh.@Gen_VKSingh also inaugurates newly constructed pond \"Subhash Sarovar\"  @PIBHomeAffairs  @ANI  https://t.co/75Y6hR4uQo",
    "language": "en",
    "mentions": [{
      "screen_name": "8ndrfghaziabad",
      "name": "8th ndrf ghaziabad",
      "id": "1158612824710475779"
    }, {
      "screen_name": "gen_vksingh",
      "name": "general vijay kumar singh",
      "id": "1856414335"
    }, {
      "screen_name": "gen_vksingh",
      "name": "general vijay kumar singh",
      "id": "1856414335"
    }, {
      "screen_name": "pibhomeaffairs",
      "name": "spokesperson, ministry of home affairs",
      "id": "753189526152081408"
    }, {"screen_name": "ani", "name": "ani", "id": "355989081"}],
    "urls": [],
    "photos": ["https://pbs.twimg.com/media/FW6v0ldakAERow4.jpg"],
    "replies_count": 0,
    "retweets_count": 5,
    "likes_count": 40,
    "hashtags": ["tree", "plantation"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1544365053750562816",
    "retweet": false,
    "quote_url": "",
    "video": 1,
    "thumbnail": "https://pbs.twimg.com/media/FW6v0ldakAERow4.jpg",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1542519744967806978,
    "conversation_id": "1542519744967806978",
    "created_at": "2022-06-30 20:15:40 IST",
    "date": "2022-06-30",
    "time": "20:15:40",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#NDRF #DM #Training 🔸@8NdrfGhaziabad conducts 🔸3 Days Trg. Program for @MCD_Delhi  🔸at MCD Zonal Office Shahdara, DL  #CapacityBuilding #BePreparedBeSafe  #Saving_Lives_and_Beyond 🇮🇳  @HMOIndia  @BhallaAjay26  @AtulKarwal  @PIBHomeAffairs  @PIB_India @ANI  https://t.co/El88ZDjZbl",
    "language": "en",
    "mentions": [{
      "screen_name": "8ndrfghaziabad",
      "name": "8th ndrf ghaziabad",
      "id": "1158612824710475779"
    }, {
      "screen_name": "mcd_delhi",
      "name": "municipal corporation of delhi",
      "id": "1008443214758461440"
    }, {
      "screen_name": "hmoindia",
      "name": "गृहमंत्री कार्यालय, hmo india",
      "id": "2541363451"
    }, {
      "screen_name": "bhallaajay26",
      "name": "ajay bhalla",
      "id": "741892853362630658"
    }, {"screen_name": "atulkarwal", "name": "atul karwal", "id": "4824143321"}, {
      "screen_name": "pibhomeaffairs",
      "name": "spokesperson, ministry of home affairs",
      "id": "753189526152081408"
    }, {"screen_name": "pib_india", "name": "pib india", "id": "231033118"}, {
      "screen_name": "ani",
      "name": "ani",
      "id": "355989081"
    }],
    "urls": [],
    "photos": ["https://pbs.twimg.com/media/FWghg-jacAA4H4Q.jpg"],
    "replies_count": 1,
    "retweets_count": 6,
    "likes_count": 27,
    "hashtags": ["ndrf", "dm", "training", "capacitybuilding", "bepreparedbesafe", "saving_lives_and_beyond"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1542519744967806978",
    "retweet": false,
    "quote_url": "",
    "video": 1,
    "thumbnail": "https://pbs.twimg.com/media/FWghg-jacAA4H4Q.jpg",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  },
  {
    "id": 1542519744967806978,
    "conversation_id": "1542519744967806978",
    "created_at": "2022-06-30 20:15:40 IST",
    "date": "2022-06-30",
    "time": "20:15:40",
    "timezone": "+0530",
    "user_id": 2791137282,
    "username": "ndrfhq",
    "name": "NDRF 🇮🇳",
    "place": "",
    "tweet": "#NDRF #DM #Training 🔸@8NdrfGhaziabad conducts 🔸3 Days Trg. Program for @MCD_Delhi  🔸at MCD Zonal Office Shahdara, DL  #CapacityBuilding #BePreparedBeSafe  #Saving_Lives_and_Beyond 🇮🇳  @HMOIndia  @BhallaAjay26  @AtulKarwal  @PIBHomeAffairs  @PIB_India @ANI  https://t.co/El88ZDjZbl",
    "language": "en",
    "mentions": [{
      "screen_name": "8ndrfghaziabad",
      "name": "8th ndrf ghaziabad",
      "id": "1158612824710475779"
    }, {
      "screen_name": "mcd_delhi",
      "name": "municipal corporation of delhi",
      "id": "1008443214758461440"
    }, {
      "screen_name": "hmoindia",
      "name": "गृहमंत्री कार्यालय, hmo india",
      "id": "2541363451"
    }, {
      "screen_name": "bhallaajay26",
      "name": "ajay bhalla",
      "id": "741892853362630658"
    }, {"screen_name": "atulkarwal", "name": "atul karwal", "id": "4824143321"}, {
      "screen_name": "pibhomeaffairs",
      "name": "spokesperson, ministry of home affairs",
      "id": "753189526152081408"
    }, {"screen_name": "pib_india", "name": "pib india", "id": "231033118"}, {
      "screen_name": "ani",
      "name": "ani",
      "id": "355989081"
    }],
    "urls": [],
    "photos": ["https://pbs.twimg.com/media/FWghg-jacAA4H4Q.jpg"],
    "replies_count": 1,
    "retweets_count": 6,
    "likes_count": 27,
    "hashtags": ["ndrf", "dm", "training", "capacitybuilding", "bepreparedbesafe", "saving_lives_and_beyond"],
    "cashtags": [],
    "link": "https://twitter.com/NDRFHQ/status/1542519744967806978",
    "retweet": false,
    "quote_url": "",
    "video": 1,
    "thumbnail": "https://pbs.twimg.com/media/FWghg-jacAA4H4Q.jpg",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": [],
    "retweet_date": "",
    "translate": "",
    "trans_src": "",
    "trans_dest": ""
  }
]

const BinaryImageClassification = () => {
  return (
    <EventFlowLayout
      heading={'Step 4 - Binary Image Classification'}
      progressPercent={40}
      forwardLink={'/event-flow/multi-label-image-classification'}
    >

      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Images'} value={1000} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Tweets'} value={800} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Tweets'} value={100} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
        <>
          {TweetWithImages.map((item, index) => {
            if (item.photos.length > 0)
              return (
                <TweetCard
                  key={index}
                  tweet={item.tweet}
                  image={item.photos.length > 0 && item.photos[0]}
                  username={item.username}
                  date={item.date}
                  socialMediaType={'facebook'}
                />
            )
          })}
        </>
      </SimpleGrid>

      {/* Heading 2 */}
      <Heading size={'lg'} my={8}>Non-Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
        <>
          {TweetWithImages.map((item, index) => {
            if (item.photos.length > 0)
              return (
                <TweetCard
                  key={index}
                  tweet={item.tweet}
                  image={item.photos.length > 0 && item.photos[0]}
                  username={item.username}
                  date={item.date}
                  socialMediaType={'instagram'}
                />
              )
          })}
        </>
      </SimpleGrid>

    </EventFlowLayout>
  );
};

export default BinaryImageClassification;