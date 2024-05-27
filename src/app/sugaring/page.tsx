import React from 'react';
import { PageComponent } from '@/components';
import { SUGARING } from '@/assets/consts/services';
import content from '../../assets/data/sugaring.json';

export default function Sugaring() {
  return <PageComponent {...content} SUGARING={SUGARING} />;
}
