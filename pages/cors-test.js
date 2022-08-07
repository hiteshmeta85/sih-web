import {useEffect} from 'react';
import axios from "axios";

const CorsTest = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/tweets/translated`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      Cors Test
    </div>
  );
};

export default CorsTest;