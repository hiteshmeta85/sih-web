import {Box, Stat, StatLabel, StatNumber} from "@chakra-ui/react";
import PropTypes from "prop-types";

const StatCard = ({label, value, boxShadow, cardBgColor, titleColor, subTextColor, icon, text, textColor}) => {
  return (
    <Stat
      bg={cardBgColor || ''}
      border={'1px solid lightgray'}
      padding={5}
      rounded={'lg'}
      boxShadow={boxShadow || 'lg'}
    >
      {icon && <Box mb={4}>{icon}</Box>}
      <StatLabel fontWeight={'bold'} fontSize={'xl'} color={titleColor || ''}>{label}</StatLabel>
      {text && <StatLabel fontWeight={'bold'} fontSize={'xl'} color={textColor || ''} textTransform={'capitalize'}>{text}</StatLabel>}
      <StatNumber color={subTextColor || 'green.400'}>{value}</StatNumber>
    </Stat>
  )
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  boxShadow: PropTypes.string,
  cardBgColor: PropTypes.string,
  titleColor: PropTypes.string,
  subTextColor: PropTypes.string,
  icon: PropTypes.any
}

export default StatCard