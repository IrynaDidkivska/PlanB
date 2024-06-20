import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

const Location = () => {
  const DynamicMapLeafLet = useMemo(
    () =>
      dynamic(() => import('@/modules/Location/components/MapLeafLet'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <>{<DynamicMapLeafLet />}</>;
};

export default Location;
