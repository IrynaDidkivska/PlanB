import React from 'react';
import { PageComponent } from '@/components';
import { LASER } from '@/assets/consts/services';
import content from '../../assets/data/laser.json';

export default function Laser() {
  return <PageComponent {...content} LASER={LASER} />;
}
