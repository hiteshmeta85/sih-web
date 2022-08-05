import {Stat, StatLabel, StatNumber} from "@chakra-ui/react";
import PropTypes from "prop-types";

const StatCard = ({label, value, boxShadow, cardBgColor, titleColor, subTextColor}) => {
  return (
    <Stat
      bg={cardBgColor || ''}
      border={'1px solid lightgray'}
      padding={5}
      rounded={'lg'}
      boxShadow={boxShadow || 'lg'}
    >
      <StatLabel fontWeight={'bold'} fontSize={'xl'} color={titleColor || ''}>{label}</StatLabel>
      <StatNumber color={subTextColor || 'green.400'}>{value}</StatNumber>
    </Stat>
  )
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  boxShadow: PropTypes.string,
  cardBgColor: PropTypes.string,
  titleColor: PropTypes.string,
  subTextColor: PropTypes.string
}

export default StatCard