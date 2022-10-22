import EventFlowLayout from "./_layout";
import ModelDescriptionCarousel from "../../components/Carousel/ModelDescriptionCarousel";
import React from "react";
import {modelDescriptionData} from "../../constants/modelDescriptionData";
import {Heading} from "@chakra-ui/react";

const Index = () => {
  return (
    <EventFlowLayout
      heading={'Event Flow'}
      progressPercent={0}
      forwardLink={'/event-flow/raw-data-extraction'}
    >
      <Heading size={'lg'} mb={4} mx={4}>Machine Learning Models</Heading>
      <ModelDescriptionCarousel data={modelDescriptionData}/>
    </EventFlowLayout>
  );
};

export default Index;