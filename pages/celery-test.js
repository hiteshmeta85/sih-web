import React, {useEffect, useState} from 'react';
import axios from "axios";

const CeleryTest = () => {

  const [celeryKeys, setCeleryKeys] = useState({
    "twitter_task_id": "8e4d39aa-a8aa-4406-9eb9-77538e296c80",
    "facebook_task_id": "a8771e71-7f6b-495c-af77-5db7d3b94cc5"
  })
  const [twitterData, setTwitterData] = useState([])
  const [facebookData, setFacebookData] = useState([])
  const [instagramData, setInstagramData] = useState([])
  const [didWeGetTaskIds, setDidWeGetTaskIds] = useState(false)

  const newFn = async () => {
    if (localStorage.getItem('twitterKeys')) {
      console.log("working on twitter keys")
      let twitterKeys = localStorage.getItem('twitterKeys')
      twitterKeys = JSON.parse(twitterKeys)
      const getTwitterData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${twitterKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              setTwitterData([...twitterData, ...response.data.result])
              return true
            }
          }
        } catch (err) {
          return false
        }
      };
      if (twitterKeys.length > 0) {
        const response = await getTwitterData()
        console.log("twitter response", response)
        console.log('initial', twitterKeys.length)
        if (response === true) {
          twitterKeys.shift()
          console.log('twitter success')
        } else {
          console.log("twitter failed for :", twitterKeys[0])
        }
      }
      if (twitterKeys.length === 0) {
        localStorage.removeItem('twitterKeys')
      } else {
        localStorage.setItem('twitterKeys', JSON.stringify(twitterKeys))
      }
    } else if (localStorage.getItem('facebookKeys')) {
      console.log("working on facebook keys")
      let facebookKeys = localStorage.getItem('facebookKeys')
      facebookKeys = JSON.parse(facebookKeys)
      const getFacebookData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${facebookKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              setFacebookData([...facebookData, ...response.data.result])
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };
      if (facebookKeys.length > 0) {
        const response = await getFacebookData()
        if (response === true) {
          facebookKeys.shift()
          console.log('facebook success', facebookKeys)
        } else {
          console.log("facebook failed")
        }
      }
      if (facebookKeys.length === 0) {
        localStorage.removeItem('facebookKeys')
      } else {
        localStorage.setItem('twitterKeys', JSON.stringify(facebookKeys))
      }
    } else if (Object.keys(celeryKeys).length === 0) {
      console.log("getting celery keys")
      const getCeleryKeys = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/new/projects/39/text`)
          if (response) {
            setCeleryKeys(response.data)
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCeleryKeys()
    } else if (Object.keys(celeryKeys).length !== 0 && didWeGetTaskIds === false) {
      console.log("getting tasks")
      const getTwitterTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.twitter_task_id}`)
          if (response) {
            console.log(response.data)
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              console.log(response.data.result)
              localStorage.setItem('twitterKeys', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };
      const getFacebookTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.facebook_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              localStorage.setItem('facebookKeys', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };
      const getInstagramTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.instagram_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              localStorage.setItem('instagramKeys', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };

      if ((celeryKeys.hasOwnProperty("twitter_task_id") && localStorage.getItem('twitterKeys') === null)
        || (celeryKeys.hasOwnProperty("facebook_task_id") && localStorage.getItem('facebookKeys') === null)
        || (celeryKeys.hasOwnProperty("instagram_task_id") && localStorage.getItem('instagramKeys') === null)) {
        let twitterResponse, facebookResponse, instagramResponse
        if (celeryKeys.hasOwnProperty("twitter_task_id")) {
          twitterResponse = await getTwitterTaskId()
        }
        if (celeryKeys.hasOwnProperty("facebook_task_id")) {
          facebookResponse = await getFacebookTaskId()
        }
        if (celeryKeys.hasOwnProperty("instagram_task_id")) {
          instagramResponse = await getInstagramTaskId()
        }
        if ((celeryKeys.hasOwnProperty("twitter_task_id") ? twitterResponse !== false : true) &&
          (celeryKeys.hasOwnProperty("facebook_task_id") ? facebookResponse !== false : true) &&
          (celeryKeys.hasOwnProperty("instagram_task_id") ? instagramResponse !== false : true)) {
          setDidWeGetTaskIds(true)
        }
      }
    } else {
      console.log("Keys Not Found: Dead End")
    }
  }

  console.log("Twitter Data", twitterData, "Facebook Data", facebookData, "Instagram Data", instagramData)

  useEffect(() => {
    const interval = setInterval(() => {
      newFn()
    }, 5000);

    return () => clearInterval(interval);
  }, [newFn]);

  return (
    <div>
      Celery Test
    </div>
  );
};

export default CeleryTest;