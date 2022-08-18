import React from 'react';
import DashboardContainer from "../_layout";

const LiveDemoLayout = ({children}) => {
  return (
    <DashboardContainer title={'Live Demo'}>
      {children}
    </DashboardContainer>
  );
};

export default LiveDemoLayout;