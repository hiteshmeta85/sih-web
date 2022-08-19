import React from "react";
import LiveDemoLayout from "./_layout";
import {
  Flex,
  Textarea,
  Button,
} from "@chakra-ui/react";
import {Formik} from "formik";
// import textUploadSchema from "../../../lib/schemas/";
import { Highlights } from "../../../components/LiveDemo/Highlights";
import { NerData } from "../../../components/LiveDemo/NerData";
import { Labels } from "../../../components/LiveDemo/Labels";

const Index = () => {
  return (
    <LiveDemoLayout >
      {/* todo: add to urls */}
      <Flex flexDir={'column'} gap={4} p={4}>
        <Textarea
            variant="outline"
            placeholder="Enter your text here"
            maxW={"600px"}
            size="lg"
            bg="white"
          />
      <Button
          type={"submit"}
          bg={"blackAlpha.800"}
          textColor={"white"}
          _hover={{ bg: "blackAlpha.700" }}
          _active={{ bg: "blackAlpha.800" }}
          px={12}
          w={'100px'}
        >
          Submit
        </Button>
        <Highlights />
        <NerData />
        <Labels />
      </Flex>
    </LiveDemoLayout>
  );
};

export default Index;
