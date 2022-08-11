import React, {useEffect, useState} from 'react';
import axios from "axios";

const CeleryTest = () => {

  const [celeryKeys, setCeleryKeys] = useState({
    "twitter_task": "3cc71676-8ec7-44fb-b6ad-8c9b07b07500",
    "facebook_task": "461a1865-6866-49a8-ac05-f76f9adf1882"
  })
  const [twitterData, setTwitterData] = useState([])
  const [facebookData, setFacebookData] = useState([])
  const [didWeGetTaskIds, setDidWeGetTaskIds] = useState(false)

  const newFn = () => {
    if (localStorage.getItem('twitterKeys')) {
      let twitterKeys = localStorage.getItem('twitterKeys')
      twitterKeys = JSON.parse(twitterKeys)
      const getTwitterData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${twitterKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS') {
              console.log(response)
              setTwitterData(response.data.result)
              return true
            }
          }
        } catch (err) {
          console.log(err);
          return false
        }
      };
      //twitterKeys.shift()
      if (twitterKeys.length > 0) {
        const response = getTwitterData()
        console.log('initial', twitterKeys)
        if (response === true) {
          twitterKeys.shift()
          console.log('twitter success', twitterKeys)
        } else {
          console.log("twitter failed")
        }
      }
      if (twitterKeys.length === 0) {
        localStorage.removeItem('twitterKeys')
      } else {
        localStorage.setItem('twitterKeys', JSON.stringify(twitterKeys))
      }
    } else if (localStorage.getItem('facebookKeys')) {
      let facebookKeys = localStorage.getItem('facebookKeys')
      facebookKeys = JSON.parse(facebookKeys)
      const getFacebookData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${facebookKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS') {
              setFacebookData(response.data.result)
              return true
            }
          }
        } catch (err) {
          console.log(err);
          return false
        }
      };
      if (facebookKeys.length > 0) {
        console.log("1 length")
        const response = getFacebookData()
        if (response === true) {
          facebookKeys.shift()
          console.log('facebook success', facebookKeys)
        }  else {
          console.log("facebook failed")
        }
      }
      if (facebookKeys.length === 0) {
        localStorage.removeItem('facebookKeys')
      } else {
        localStorage.setItem('twitterKeys', JSON.stringify(facebookKeys))
      }
    } else if (Object.keys(celeryKeys).length === 0) {
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
      const getTwitterTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.twitter_task}`)
          if (response) {
            if (response.data.status === 'SUCCESS') {
              localStorage.setItem('twitterKeys', JSON.stringify(response.data.result))
              return true
            }
          }
        } catch (err) {
          console.log(err);
          return false
        }
      };
      const getFacebookTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.facebook_task}`)
          if (response) {
            if (response.data.status === 'SUCCESS') {
              localStorage.setItem('facebookKeys', JSON.stringify(response.data.result))
              return true
            }
          }
        } catch (err) {
          console.log(err);
          return false
        }
      };
      if ((!localStorage.getItem('twitterKeys') || !(localStorage.getItem('facebookKeys')))) {
        const twitterResponse = getTwitterTaskId()
        const facebookResponse = getFacebookTaskId()
        if (twitterResponse && facebookResponse) {
          setDidWeGetTaskIds(true)
        }
      }
    } else {
      console.log("Key Not Found")
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      newFn()
    }, 5000);

    return () => clearInterval(interval);
  }, [newFn]);

  console.log({'celeryKeys': celeryKeys}, {'twitterData': twitterData}, {'facebookData': facebookData})

  return (
    <div>
      Celery Test
    </div>
  );
};

export default CeleryTest;