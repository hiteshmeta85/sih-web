import React from 'react';
import EventFlowLayout from "./_layout";

const GeolocationMarking = () => {
  return (
    <EventFlowLayout
      heading={'Step 8 - Geolocation Marking'}
      progressPercent={80}
      forwardLink={'/event-flow/analysis'}
    >
      Map
    </EventFlowLayout>
  );
};

export default GeolocationMarking;