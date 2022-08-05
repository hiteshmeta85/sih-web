import React from 'react';
import EventFlowLayout from "./_layout";

const Conclusion = () => {
  return (
    <EventFlowLayout
      heading={'Step 10 - Conclusion'}
      progressPercent={100}
      forwardLink={'/dashboard'}
    >

    </EventFlowLayout>
  );
};

export default Conclusion;