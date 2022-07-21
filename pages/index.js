import TweetsContainer from "../components/Tweet/TweetsContainer";
import {Flex, SimpleGrid} from "@chakra-ui/react";
import TweetCard from "../components/Tweet/TweetCard";
import SocialMediaAccountCard from "../components/Account/SocialMediaAccountCard";
import {AlertsData} from "../components/Alert/alerts-data";
import AlertCard from "../components/Alert/AlertCard";
import NewsCard from "../components/News/NewsCard";
import LandingPageLayout from "./_layout";
import {IoIosAlert} from "react-icons/io";
import {BsTwitter} from "react-icons/bs";

export const popularTwitterHandles = [
  {
    id: 1,
    name: 'Hitesh Meta',
    username: 'metahitesh85'
  },
  {
    id: 2,
    name: 'Om Surve',
    username: 'gamingflexer'
  },
  {
    id: 3,
    name: 'Yash Wakekar',
    username: 'yashwakekar'
  },
  {
    id: 4,
    name: 'Kunal Wagh',
    username: 'kunalwagh18'
  },
  {
    id: 5,
    name: 'Adwait Gawade',
    username: 'adwaitgawade'
  },
  {
    id: 6,
    name: 'Shreya Belanekar',
    username: 'shreyabelanekar'
  },
]

export const ndrfTweets2 = [
  {
    "id": 1546017399186784256,
    "conversation_id": "1546017399186784256",
    "created_at": "2022-07-10 11:54:06 IST",
    "date": "-07-102022",
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
  }
]

export const headlines2 = [
  {
    "id": "6071099688754801141",
    "title": "Punjab CM Bhagwant Mann Gives Nod to State Disaster Mitigation Fund",
    "url": "https://www.latestly.com/agency-news/india-news-punjab-cm-gives-nod-to-state-disaster-mitigation-fund-3957563.html",
    "description": "Punjab Chief Minister Bhagwant Mann has given his nod to constitute a fund aimed at tackling any unforeseen natural disaster effectively, an official statement said on Saturday.",
    "body": "Chandigarh, July 16: Punjab Chief Minister Bhagwant Mann has given his nod to constitute a fund aimed at tackling any unforeseen natural disaster effectively, an official statement said on Saturday. The statement quoting the CM said the state disaster mitigation fund (SDMF) has been constituted under section 48 1(c) of the Disaster Management Act 2005. With this fund, projects related to mitigation measures will be launched, Mann said, expressing hope that these measures will help the state in coping with and mitigating natural calamities. The fund has been constituted on the recommendations of the 15th Finance Commission.Punjab CM Bhagwant Mann To Launch Anti-Corruption WhatsAPP Helpline on Shaheed Diwas 2022. The state's share in the SDMF from 2021 to 2026 will be 25 perc ent while the Central share will be 75 per cent, said Mann. The chief minister said a total sum of Rs 729.60 crore will be available in the SDMF from 2021 to 2026, which will be instrumental in further augmenting the preparedness of the state for any sort of natural disaster. (This is an unedited and auto-generated story from Syndicated News feed, LatestLY Staff may not have modified or edited the content body)",
    "snippet": "... tackling any unforeseen natural <b>disaster</b> effectively, an official statement ... auto-generated story from Syndicated <b>News</b> feed, LatestLY Staff may not ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-16T12:28:10",
    "provider": {
      "name": "latestly",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://st1.latestly.com/wp-content/uploads/2022/06/resize-20-4.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "latestly",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.latestly.com/agency-news/india-news-punjab-cm-gives-nod-to-state-disaster-mitigation-fund-3957563.html"
    }
  },
  {
    "id": "2219808178008289980",
    "title": "Gujarat CM Visits Flood-affected Areas in Navsari",
    "url": "https://www.latestly.com/agency-news/india-news-gujarat-cm-visits-flood-affected-areas-in-navsari-3942258.html",
    "description": "Get latest articles and stories on India at LatestLY. Gujarat Chief Minister Bhupendra Patel visited the flood-affected areas of Navsari on Tuesday and met the victims.",
    "body": "Navsari (Gujarat) [India], July 13 (ANI): Gujarat Chief Minister Bhupendra Patel visited the flood-affected areas of Navsari on Tuesday and met the victims. Prime Minister Narendra Modi also assured Gujarat Chief Minister to provide all necessary help including NDRF to tackle the situation from the Centre to mitigate the sufferings of the people affected by the flood in the state.Also Read | Madhya Pradesh Rains: Lightning Strikes Claims 47 Lives in a Week; Health Department Issues Guidelines.Claiming one life, heavy rainfall caused a flood-like situation in Gujarat's Rajkot on Tuesday. Residents living in the lower reaches have been asked by the authority to remain alert.The Meteorological Department predicted light to moderate rainfall in the entire state for the next four days. Extremely heavy rainfall is expected in many districts of South Gujarat, Saurashtra and Kutch.Also Read | Nothing Phone (1) With Snapdragon 778G+ SoC Now Official, Check Price &amp;#038; Other Details Here.&quot;For the next 5 days, light to moderate rainfall is expected in the entire state. Extremely heavy rainfall is expected in many districts of South Gujarat, Saurashtra and Kutch. The intensity of rainfall will reduce by July 15,&quot; said Dr Manorama Mohanty, Director, Meteorological Department on Tuesday.Union Home Minister Amit Shah on Monday assured all possible help to Gujarat Chief Minister Bhupendra Rajnikant Patel as heavy rains caused flood-like situations in the state's various areas.Gujarat administration, State Disaster Response Force and National Disaster Response Force (NDRF) are engaged in providing quick help to the affected people, the Home Minister further said.According to Gujarat CM PRO, Modi had a telephonic conversation with Patel to enquire about the dire situation created by widespread and heavy rains in the state.The Gujarat Chief Minister gave full details to the Prime Minister about the heavy rains that have lashed out across the state in the last 48 hours, especially in the South and Central Gujarat region and the situation that has arisen as a result of the same.Several villages in Gujarat have been cut off, prompting officials to deploy helicopters to rescue people. Several people have lost their lives so far due to the floods.NDRF teams are working to rescue people. Over 2000 people have been evacuated from various areas. Efforts to rescue more are on.The Meteorological department said that Gujarat's situation is due to flash floods. The state received 18 inches of rainfall in just four hours. People are now struggling to procure even essential items. (ANI) (This is an unedited and auto-generated story from Syndicated News feed, LatestLY Staff may not have modified or edited the content body)",
    "snippet": "... latest articles and stories on <b>India</b> at LatestLY. (ANI) (This is an ... and auto-generated story from Syndicated <b>News</b> feed, LatestLY Staff may not have ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-13T01:06:24",
    "provider": {
      "name": "latestly",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://st1.latestly.com/wp-content/uploads/2022/07/rgknbrl2022071223411620220713003129.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "latestly",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.latestly.com/agency-news/india-news-gujarat-cm-visits-flood-affected-areas-in-navsari-3942258.html"
    }
  },
  {
    "id": "2239192309256479114",
    "title": "imd: IMD issues yellow alert in Kerala govt deploys NDRF response teams",
    "url": "http://economictimes.com/news/india/imd-issues-yellow-alert-in-kerala-govt-deploys-ndrf-response-teams/articleshow/92732001.cms",
    "description": "A total of 11 houses were completely damaged while 20 houses were partially damaged in the state from July 3 to 7. District administrations of Kasaragod and Kannur have declared holiday to all educational institutions including professional colleges on July 8. Meanwhile, the Idukki District collector has declared a holiday on Friday for educational institutions under Devikulam Taluk.",
    "body": "IMD\n) on Thursday issued a yellow alert to most of the districts in Kerala for next three days indicating isolated heavy rainfall, prompting the state government to deploy National Disaster Response Force (NDRF) teams in Idukki, Wayanad and Kozhikode districts.\nParts of Kerala has been receiving incessant rains for the past few days and as per the State Disaster Management Authority (\nSDMA\n), a total of six people have died across the state due to rain-related incidents since July 3.\nAccording to SDMA, Thrissur has opened two camps, while Alappuzha and Ernakulam one each and there are 58 inmates in those camps.\n\"Four people have been killed in Idukki district while one person each died in Malappuram and Kozhikode districts,\" said a senior SDMA official.\nA total of 11 houses were completely damaged while 20 houses were partially damaged in the state from July 3 to 7.\nRECOMMENDED\nSTORIES FOR YOU\nDistrict administrations of Kasaragod and Kannur have declared holiday to all educational institutions including professional colleges on July 8.\nMeanwhile, the Idukki District collector has declared a holiday on Friday for educational institutions under Devikulam Taluk.\nChief Minister Pinarayi Vijayan today cautioned people living in hilly areas in view of the IMD declaring a Yellow alert.\n\"There are reports that the water level in Kadalundi, Bharathapuzha, Shiriya, Karavannur, and Gayathri rivers of northern Kerala are rising. Similarly the water level in Vamanapuram, Neyyar, Karamana, kallada, Manimala and Meenachil rivers is also rising,\" Vijayan said in a Facebook post.\nHe also said Red alert have been issued around the regions of lower Periyar, Kallarkutti dams under the state Electricity Board.\nRead More News on",
    "snippet": "... prompting the state government to deploy National <b>Disaster</b> Response Force (NDRF) teams in Idukki, Wayanad and Kozhikode districts. Read More <b>News</b> on.",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-07T17:17:00",
    "provider": {
      "name": "economictimes",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://img.etimg.com/thumb/msid-92732050,width-1070,height-580,imgsize-34248,overlay-economictimes/photo.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "economictimes",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "http://economictimes.com/news/india/imd-issues-yellow-alert-in-kerala-govt-deploys-ndrf-response-teams/articleshow/92732001.cms"
    }
  },
  {
    "id": "220215941999816867",
    "title": "Rashtrapati Bhavan Organises Disaster Management Workshop",
    "url": "https://www.latestly.com/agency-news/india-news-rashtrapati-bhavan-organises-disaster-management-workshop-3921223.html",
    "description": "Get latest articles and stories on India at LatestLY.   The Rashtrapati Bhavan, in association with the National Institute of Disaster Management (NIDM), has organised a workshop on disaster management with a special focus on museums and heritage buildings, according to an official statement on Thursday.",
    "body": "New Delhi, Jul 7 (PTI) The Rashtrapati Bhavan, in association with the National Institute of Disaster Management (NIDM), has organised a workshop on disaster management with a special focus on museums and heritage buildings, according to an official statement on Thursday. The aim of this workshop is to create awareness among officials of the Rashtrapati Bhavan and other stakeholders towards disaster management with a special focus on heritage buildings, museums and cultural heritage. Also Read | Vivo India Remitted Rs 62,476 Crore Abroad, Almost 50% to China, Says ED. During the two-day workshop on July 7-8, participants will learn about various aspects of the Disaster Management Act, disaster management framework and guidelines, Sendai Framework for Disaster Risk Reduction, the prime minister's 10-point agenda on disaster risk reduction, etc., the statement said. On the first day, speakers stressed about the need of the awareness towards disaster management and imparting knowledge to train the stakeholders to mitigate the loss in the event of any disaster, it said. Also Read | Raj Babbar Sentenced to Two Years in Jail in a 1996 Case. They also highlighted the importance of disaster management in heritage buildings and laid emphasis on formulating effective guidelines and response mechanism for disaster management, the statement said. (This is an unedited and auto-generated story from Syndicated News feed, LatestLY Staff may not have modified or edited the content body)",
    "snippet": "... and stories on <b>India</b> at LatestLY. The aim ... other stakeholders towards <b>disaster</b> management with a ... story from Syndicated <b>News</b> feed, LatestLY Staff may ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-07T13:58:22",
    "provider": {
      "name": "latestly",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://st1.latestly.com/wp-content/uploads/2020/10/Latestly-India-News.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "latestly",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.latestly.com/agency-news/india-news-rashtrapati-bhavan-organises-disaster-management-workshop-3921223.html"
    }
  },
  {
    "id": "6095304096726720697",
    "title": "Cloudburst, landslide hit Himachal Pradesh; Shimla woman dead, 4 feared washed away",
    "url": "https://www.indiatvnews.com/news/india/himachal-pradesh-landslide-cloudburst-heavy-rains-flash-floods-death-toll-washed-away-disaster-management-live-updates-2022-07-06-790014",
    "description": "State Disaster Management Director Sudesh Mokhta stated that four to six people have been missing after the incident at Chojh village in Challal panchayat of Kullu district at around 6 am.",
    "body": "A woman from Shimla died after a landslide hit the city on Wednesday.\nTwo others have been critically injured, a senior state disaster management official said.\nBesides, flash floods due to a cloudburst hit Manikaran in Kullu.\nHimachal Pradesh news\n: A woman from Shimla died after a landslide hit the city, due to incessant rains. Two others have been critically injured, a senior state disaster management official said. Shimla district emergency operations centre (DEOC) said the incident occurred at Dhalli. Besides, flash floods due to a cloudburst hit Manikaran in Himachal Pradesh's Kullu district on Wednesday, due to which at least four people are feared washed away.\nState Disaster Management Director Sudesh Mokhta stated that four to six people have been missing after the incident at Chojh village in Challal panchayat of Kullu district at around 6 am.\nKullu Superintendent of Police Gurdev Sharma said four people have been reported missing as per initial reports. A search operation is in progress, he added. Though the rescue teams have been dispatched, they are stuck midway due to landslides.\n(With agency inputs)",
    "snippet": "State <b>Disaster</b> Management Director Sudesh Mokhta stated that ... Kullu district at around 6 am. Himachal Pradesh <b>news</b> : A woman from Shimla died after ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-06T06:01:00",
    "provider": {
      "name": "indiatvnews",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/07/himachal-floods-1657087033.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "indiatvnews",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.indiatvnews.com/news/india/himachal-pradesh-landslide-cloudburst-heavy-rains-flash-floods-death-toll-washed-away-disaster-management-live-updates-2022-07-06-790014"
    }
  },
  {
    "id": "3801142804923988789",
    "title": "Manipur landslide: Natures fury or a man-made disaster?",
    "url": "https://www.hindustantimes.com/india-news/new-in-the-northeast-manipur-landslide-nature-s-fury-or-a-man-made-disaster-101657013418166-amp.html",
    "description": "There is a possibility that increased construction works and other human activities play a role in the frequency and nature of these landslides. | Latest News India",
    "body": "{{^userSubscribed}}\n{{/userSubscribed}}\nBoth the environment ministrys statement in Rajya Sabha and the GSI landslide susceptibility report of the area in Manipur where last weeks landslide took place indicate that the devastation was a disaster waiting to happen. Lessons must be learnt from this one and steps must be taken to prevent such destruction and deaths in coming years.\nLast weeks devastating landslide in the Noney district of Manipur, which claimed nearly 50 lives, has raised questions about whether the disaster that took place close to a railway construction site was a natural one or caused by human activity in the regions topography. The landslide in Noney took place at Tupul. It is part of the 111 km railway line project aimed at connecting Jiribam in Manipur to the state capital, Imphal.\n{{^userSubscribed}}\n{{^userSubscribed}}\n{{/userSubscribed}}\nThe landslide, said to be the first of such magnitude in the states history, hit the railway construction camp at Marangching part 5 areas, about 75 km west of the state capital, on midnight of June 29. It also struck a camp of Territorial Army (TA) camps of the Indian Army deployed in the area for protecting the construction site. Most of the deaths have been of TA personnel and construction workers staying in the area.\nWhile landslides induced by heavy rainfall during the monsoon season are a common occurrence in Manipur and other hilly areas in the Northeast, theres a possibility that increased construction works such as the widening of roads, laying down of new railway tracks, and other activities could play a role in the frequency and nature of these landslides.\n{{^userSubscribed}}\n{{{headline}}}\n{{/items}}\nIn August, 2018, the Union environment ministry stated in Rajya Sabha that most landslides in Manipur were anthropogenically induced and were caused due to several factors, including the modification of mountain and hill slopes for construction and road widening. As per the ministrys data, the state witnessed six major landslides in 2018, three in 2017, one in 2015, and four in 2010.\nStudies have indicated that landslides in Manipur are mostly anthropogenically-induced, caused as a result of modification of slopes for construction, widening of the road, quarrying for construction materials, fragile lithology, complex geological structures and heavy rainfall, then Union minister of state for environment Mahesh Sharma told Rajya Sabha.\nIn 2019, the Geological Survey of India (GSI) prepared a landslide susceptibility report in the Tamenglong and Noney districts of Manipur and found that 170 landslides took place in the area between 2011 and 2017.\n{{^userSubscribed}}\n{{^userSubscribed}}\n{{/userSubscribed}}\nMost landslides have occurred in extensive slope cut during the construction of road/railway lines. Out of 170 recorded slides, only 30 were on natural slopes and the rest were of anthropogenic origin (due to human activity), the GSI report said.\nLandslides caused under natural conditions vary in size and constitute about 76% of the inventory and the remaining 24% are caused by anthropogenic activities like slope cutting for road and railway lines. Some of the bigger landslides in the area are mainly caused due to anthropogenic activities triggered by extensive slope cuts during the construction of road/railway line, the report added.\nThe report found that the majority of landslides affecting the NH37 are caused due to slopes that were cut unscientifically and left unsupported at the bottom, which are devoid of lined drainage, and become prone to landslides during monsoon rains. Most landslides were recorded on poorly maintained roads in the area.\n{{^userSubscribed}}\n{{^userSubscribed}}\n{{/userSubscribed}}\nThe report mentions the Noney-Maranching Road, which is around 24 km in length and is located on moderate to high susceptible slopes. The high susceptible zone is concentrated along the areas where there are extensive slope cuts and validated by many extensive slope cut failures in the area Slope cutting for the railway is being carried out extensively above the road stretch causing most of the landslides, the report mentioned.\nIn recent times, due to government schemes, the area has several road constructions and railway cutting. A huge number of landslides were collected from these roads and they were not necessarily due to extensive slope cuts. Some were deep gully erosion due to blockade of natural\nnala\n(drain) course by road construction. The roads are also unmetalled without any proper lined drainage on the sides and proper culverts and are accessible only during the dry season. Due to these anthropogenic activities, the landslides are distributed along all the susceptibility classes, the report said.\n{{^userSubscribed}}\n{{^userSubscribed}}\n{{/userSubscribed}}\nBoth the environment ministrys statement in Rajya Sabha and the GSI landslide susceptibility report of the area in Manipur where last weeks landslide took place indicate that the devastation was a disaster waiting to happen. Lessons must be learnt from this one and steps must be taken to prevent such destruction and deaths in coming years.\nEnjoy unlimited digital access with HT Premium\nSubscribe Now to continue reading",
    "snippet": "... that the devastation was a <b>disaster</b> waiting to happen. In 2019, the Geological Survey of <b>India</b> (GSI) prepared a landslide susceptibility report ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-05T13:15:04",
    "provider": {
      "name": "hindustantimes",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://images.hindustantimes.com/img/2022/07/05/1600x900/a4d79d78-f9e4-11ec-9399-aa8babdf721f_1656754535065_1657026671038.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "hindustantimes",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.hindustantimes.com/india-news/new-in-the-northeast-manipur-landslide-nature-s-fury-or-a-man-made-disaster-101657013418166-amp.html"
    }
  },
  {
    "id": "249976448202901446",
    "title": "Manipur Landslide: Mortal Remains of 5 Army Personnel Sent to Home Stations by IAF Aircraft",
    "url": "https://www.latestly.com/agency-news/india-news-manipur-landslide-mortal-remains-of-5-army-personnel-sent-to-home-stations-by-iaf-aircraft-3906226.html",
    "description": "Get latest articles and stories on India at LatestLY. The mortal remains of five Army personnel, including a Lieutenant Colonel of the Territorial Army killed in the Noney landslide, were sent to their respective home stations on Monday by an Indian Air Force aircraft.",
    "body": "Imphal (Manipur) [India], July 4 (ANI): The mortal remains of five Army personnel, including a Lieutenant Colonel of the Territorial Army killed in the Noney landslide, were sent to their respective home stations on Monday by an Indian Air Force aircraft.They were given full military honours at the Imphal International Airport by GOC Red Shield Division &amp;amp; IG IGAR (South) this morning.Also Read | DMK Leader A Raja Says, 'Don't Force Party To Revive Separate Tamil Nadu Demand'.Out of 80 confirmed victims, the death toll has so far risen to 42 and 18 bodies have been injured. A number of 20 bodies still remain missing, according to an official state government report.Meanwhile, search operations by the Indian Army, Assam Rifles, Territorial Army, State Disaster Response Fund (SDRF), and the National Disaster Response Force (NDRF) continued for the third consecutive day on Sunday in landslide-hit Tupul general area to find missing personnel and civilians. Also Read | National Commission of Women Seeks Action Against Samajwadi Party Chief Akhilesh Yadav for Tweet Against Nupur Sharma.Search for seven Territorial Army personnel and 21 civilians missing amidst the catastrophe is underway. The through-wall radar system and rescue dogs are being deployed to hasten the search operation.Manipur, already reeling from the first landslide hit on the 29th of June was hit by another landslide on July 1.The landslide hit the Noney area of Manipur on the intervening night of June 28 and 29 near the company location of 107 Territorial Army of the Indian Army deployed near Tupul Railway Station for the protection of the under-construction railway line from Jiribam to Imphal.The North-East Frontier Railway CPRO said the landslide triggered by incessant rains caused damage to the Tupul station building.Earlier on July 1, Manipur Chief Minister N Biren Singh termed the landslide as among the worst incident in the history of the state. Singh also visited the site to encourage the personnel engaged in rescue operations.&quot;It is the worst incident in the history of the state. We have lost 81 people's lives of which 18 including a territorial army (personnel) were rescued. Around 55 persons are trapped. It will take 2-3 days to recover all the dead bodies,&quot; Singh said.Prime Minister Narendra Modi on Thursday reviewed the landslide situation caused due to incessant rainfall in Manipur with Chief Minister N Biren Singh and assured full possible support from the central government. (ANI) (This is an unedited and auto-generated story from Syndicated News feed, LatestLY Staff may not have modified or edited the content body)",
    "snippet": "... latest articles and stories on <b>India</b> at LatestLY. (ANI) (This is an ... and auto-generated story from Syndicated <b>News</b> feed, LatestLY Staff may not have ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-04T09:04:22",
    "provider": {
      "name": "latestly",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://st1.latestly.com/wp-content/uploads/2022/07/gfdgjhf20220704085319.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "latestly",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.latestly.com/agency-news/india-news-manipur-landslide-mortal-remains-of-5-army-personnel-sent-to-home-stations-by-iaf-aircraft-3906226.html"
    }
  },
  {
    "id": "4620774199487165672",
    "title": "Shinde to hold disaster management meeting in Mumbai in view of rains",
    "url": "https://www.indiatvnews.com/news/india/eknath-shinde-maharashtra-cm-to-hold-disaster-management-meeting-in-mumbai-in-view-of-rains-latest-news-2022-07-01-788968",
    "description": "Maharashtra CM Eknath Shinde said the main aim of his government is to free the state of farmer suicides for which a slew of decisions will be taken.",
    "body": "Follow us on\nImage Source : PTI\nShiv Sena leader Eknath Shinde during his oath-taking ceremony as Maharashtra Chief Minister, at Raj Bhavan in Mumbai.\nMaharashtra Chief Minister Eknath Shinde left for Mumbai from Goa on Friday evening to take stock of the situation arising out of heavy downpour in the financial capital and other parts of the neighboring state.\nTalking to reporters outside a resort in Dona Paula near Panaji, where he met rebel Shiv Sena MLAs, Shinde said he would be chairing a meeting of the disaster management authority in Mumbai, which is receiving heavy rains for the last two days. The CM had arrived in Goa late Thursday night, hours after taking charge of the top post.\nThere is a heavy downpour in Mumbai and people are suffering losses. I will personally chair the meeting of the disaster management committee, he said, adding he has already spoken to civic authorities.\nSpeaking about the priorities of his government, the CM said he wants Maharashtra to be free of farmer suicides for which a slew of decisions will be taken. This decision was taken on the occasion of Krishi Din, which is commemorated on July 1 in the memory of former chief minister late Vasantrao Naik, he said.\nShinde said the Maharashtra government will ensure farmers get minimum support price for their crops. There is a need to provide technical support to farmers. We are committed to make life of farmers better, he said. The chief minister said stalled development projects would be revived and expedited by his government.\nThese projects may be related to farmers or watershed management, metro project or water resources department all these would be taken up on a priority basis, he said.\nALSO READ |",
    "snippet": "... Sena MLAs, Shinde said he would be chairing a meeting of the <b>disaster</b> management authority in Mumbai, which is receiving heavy rains for the last two ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-01T18:10:32",
    "provider": {
      "name": "indiatvnews",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/07/shinde-1656698970.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "indiatvnews",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.indiatvnews.com/news/india/eknath-shinde-maharashtra-cm-to-hold-disaster-management-meeting-in-mumbai-in-view-of-rains-latest-news-2022-07-01-788968"
    }
  },
  {
    "id": "8731381658131894341",
    "title": "Maharashtra Chief Minister Eknath Shinde To Chair Disaster Management Meet After Heavy Rain Alert",
    "url": "https://www.ndtv.com/india-news/maharashtra-chief-minister-eknath-shinde-to-chair-disaster-management-meet-after-heavy-rain-alert-3118498",
    "description": "Maharashtra Chief Minister Eknath Shinde is set to chair a meeting of the State Disaster Management Department this evening as India Meteorological Department has sounded an orange alert as heavy rains lashed Mumbai.",
    "body": "Updated: July 01, 2022 4:34 pm IST\nThis comes in the wake of heavy rainfall in Maharashtra. (File)\nMumbai:\nMaharashtra Chief Minister Eknath Shinde is set to chair a meeting of the State Disaster Management Department this evening at Mantralaya, Mumbai.\nThis comes in the wake of heavy rainfall in Maharashtra.\nMeanwhile, India Meteorological Department (IMD) has sounded an orange alert as heavy rains lashed Mumbai causing waterlogging in several parts of the city.\nTrain and bus services were badly hit across the city. Several parts of Mumbai, including Kurla, Chembur, Sion, Dadar and Andheri, witnessed heavy rain.\nMaharashtra Chief Minister Eknath Shinde and Deputy CM Devendra Fadnavis held the first cabinet meeting of the new government in Mumbai on Thursday evening.\nThe Maharashtra Cabinet has also decided to call a special session of the state assembly for two days-- July 2 and July 3.\nRebel Shiv Sena MLA Eknath Shinde took oath as the new Chief Minister of Maharashtra and Bharatiya Janata Party (BJP) leader Devendra Fadnavis as the Deputy Chief Minister on Thursday.\nMr Thackeray resigned on Wednesday after the Shinde-led group kept adding to its numbers and the Supreme Court gave a go-ahead for a floor test in the assembly.\nPromoted",
    "snippet": "... set to chair a meeting of the State <b>Disaster</b> Management Department this evening as <b>India</b> Meteorological Department has sounded an orange alert as ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-01T11:04:47",
    "provider": {
      "name": "ndtv",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://c.ndtvimg.com/2022-07/qh6a6h84_eknath-shinde_625x300_01_July_22.jpg",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "ndtv",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.ndtv.com/india-news/maharashtra-chief-minister-eknath-shinde-to-chair-disaster-management-meet-after-heavy-rain-alert-3118498"
    }
  },
  {
    "id": "4817909085878252093",
    "title": "Mudslide leaves 16 dead over 70 missing in northeast India",
    "url": "https://www.newsbreak.com/news/2653418064747/mudslide-leaves-16-dead-over-70-missing-in-northeast-india",
    "description": "GAUHATI, India  (AP)  Rescuers found two more bodies as they resumed clearing operations after an overnight halt looking for nearly 70 missing people after a mudslide triggered by weeks of heavy downpours killed at least 16 people at a railroad construction site in India's northeast, officials said Friday.",
    "body": "WFTV Channel 9 Orlando\n4 days ago\nIndia Mudslide This photograph provided by India's National Disaster Response Force (NDRF) shows NDRF personnel and others trying to rescue those buried under the debris after a mudslide in Noney, northeastern Manipur state, India, Thursday, June 30, 2022. (National Disaster Reponse Force via AP) (Uncredited)\nGAUHATI, India  (AP)  Rescuers found two more bodies as they resumed clearing operations after an overnight halt looking for nearly 70 missing people after a mudslide triggered by weeks of heavy downpours killed at least 16 people at a railroad construction site in India's northeast, officials said Friday.\nMore than 200 disaster response workers and police are using earth-clearing equipment like bulldozers to rescue those buried under the debris in Noney, a town near Imphal, the capital of Manipur state. But the terrain is making it difficult to move heavy equipment, said H. Guite, district magistrate, adding that he has asked for reinforcements.\nIntermittent rain continues in the region.\nSixteen bodies have been recovered so far after a hillock caved in and buried the railroad project area, Guite told The Associated Press.\nA flowing river has been blocked by the debris creating a dam-like structure in the area, he said. People living nearby have been asked to move to safe areas, media reports said.\nSeven of the confirmed dead were members of the Territorial Army, state chief minister N. Biren Singh said. He said five Indian Railway officials were among those feared missing.\nBecause there is a rebel insurgency in the area, army personnel were there providing security for the railway officials. The states decades-old insurgency seeks a separate homeland for ethnic and tribal groups.\nMost of the victims were sleeping when the landslide hit the area early Thursday. Some survivors recalled being swept down by the gush of the hill debris, The Times of India daily cited Daichuipao, a resident, as saying.\nPrime Minister Narendra Modi said he reviewed the situation with local authorities. \"Assured all possible support from the Centre (federal government),\" he tweeted.",
    "snippet": "(National <b>Disaster</b> Reponse Force via AP) (Uncredited) GAUHATI, <b>India</b> (AP) Rescuers found two more bodies as they resumed clearing operations after an ...",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2022-07-01T03:49:00",
    "provider": {
      "name": "newsbreak",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://img.particlenews.com/img/id/1ploHb_0gReKGcU00?type=thumbnail_1200x627&amp;limit=20",
      "height": 0,
      "width": 0,
      "thumbnail": "",
      "thumbnailHeight": 0,
      "thumbnailWidth": 0,
      "base64Encoding": "",
      "name": null,
      "title": null,
      "provider": {
        "name": "newsbreak",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.newsbreak.com/news/2653418064747/mudslide-leaves-16-dead-over-70-missing-in-northeast-india"
    }
  }
]

export default function Home({headlines, ndrfTweets}) {

  return (
    <LandingPageLayout>
      {headlines2 && <TweetsContainer title={'News'} href={'/news'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
          {headlines2.slice(0, 4)
            .map((item, index) => {
              return (
                <NewsCard key={index} title={item.title} datePublished={item.datePublished} description={item.description}/>
              )
            })}
        </SimpleGrid>
      </TweetsContainer>}
      <TweetsContainer title={<Flex alignItems={'center'} gap={2}><IoIosAlert color={'#EB4747'}/> Alerts</Flex>} href={'/alerts'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 4, lg: 10}}>
          {AlertsData.slice(0, 6)
            .map((item, index) => {
              return (<AlertCard key={index} title={item.title} description={item.description} image={item.image}/>)
            })}
        </SimpleGrid>
      </TweetsContainer>
      {ndrfTweets2 && <TweetsContainer title={<Flex alignItems={'center'} gap={2}><BsTwitter color={'#1DA1F2'}/> NDRF’s Latest Tweets</Flex>} href={'/tweets'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 4, lg: 10}}>
          {ndrfTweets2.slice(0, 6)
            .map((item, index) => {
              return (<TweetCard key={index} username={item.username} description={item.tweet} image={item.photos.length > 0 && item.photos[0]} date={item.date}/>)
            })}
        </SimpleGrid>
      </TweetsContainer>}
      <TweetsContainer title={'Active Social Media Accounts'} href={'/active-accounts'}>
        <Flex gap={4} overflowX={'scroll'} py={6} px={0.5}>
          {popularTwitterHandles.slice(0, 10)
            .map((item, index) => {
              return (
                <SocialMediaAccountCard key={index} name={item.name} username={item.username}/>
              )
            })}
        </Flex>
      </TweetsContainer>
    </LandingPageLayout>
  )
}

// export async function getServerSideProps() {

  // let headlines, ndrfTweets;
  //
  // try {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/get-headlines`)
  //   if (res.data) {
  //     headlines = res.data.data.value
  //   }
  // } catch (e) {
  //   headlines = null
  // }
  //
  // try {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/ndrf-tweets`)
  //   if (res.data) {
  //     ndrfTweets = res.data.data
  //   }
  // } catch (e) {
  //   ndrfTweets = null
  // }
  //
  //
  // return {
  //   props: {
  //     headlines,
  //     ndrfTweets
  //   }
  // }
// }