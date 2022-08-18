import React from 'react';
import DashboardContainer from "../_layout";

const LiveDemoLayout = ({children}) => {
  return (
    <DashboardContainer title={'Live Demo'} isSidebarOpenByDefault={false}>
      {children}
    </DashboardContainer>
  );
};

export default LiveDemoLayout;