import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

const Location = () => {
  const DynamicMapLeafLet = useMemo(
    () =>
      dynamic(() => import('@/modules/Location/MapLeaflet'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <div>{<DynamicMapLeafLet />}</div>;
};

export default Location;
