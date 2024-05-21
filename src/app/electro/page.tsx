import React from 'react';
import { PageComponent } from '@/components';
import { ELECTRO } from '@/assets/consts/services';
import content from '../../assets/data/electro.json';

export default function Electro() {
  return (
    <PageComponent {...content} ELECTRO={ELECTRO} SUGARING={''} LASER={''} />
  );
}
