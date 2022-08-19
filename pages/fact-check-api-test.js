import React from 'react';
import axios from "axios";
import {Button} from "@chakra-ui/react";

const FactCheckApiTest = () => {

  const handleSubmit = (value) => {
    axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(value)}&key=${process.env.NEXT_PUBLIC_FACT_CHECK_API}`)
      .then(r => console.log(r))
      .catch(e => console.log(e))
  }

  return (
    <div>
      <Button onClick={()=> handleSubmit('assam flood')}>fact check</Button>
    </div>
  );
};

export default FactCheckApiTest;