import React from 'react';
import ClusterMap from '../../components/Map/ClusterMap';
import EventFlowLayout from "./_layout";

const GeolocationMarking = () => {
  return (
    <EventFlowLayout
      heading={'Step 8 - Geolocation Marking'}
      progressPercent={80}
      forwardLink={'/event-flow/analysis'}
    >
      <ClusterMap />
    </EventFlowLayout>
  );
};

export default GeolocationMarking;