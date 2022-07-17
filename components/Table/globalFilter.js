import React from "react";
import {Flex, Input, Text} from "@chakra-ui/react";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = (value) => {
    return setGlobalFilter(value || undefined)
  }

  return (
    <Flex alignItems={'center'} gap={4} mb={4}>
      <Text fontSize={'sm'}>Search:</Text>
      <Input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} records...`}
        size={'md'}
        maxW={'xs'}
        _focus={{boxShadow: 'none'}}
      />
    </Flex>
  )
}