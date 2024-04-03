import { ELECTRO, LASER, SUGARING } from '@/assets/consts/services';
import laser from '../img/laser@2x.jpeg';
import electro from '../img/electro@2x.jpeg';
import sugaring from '../img/sugar@2x.jpeg';

export const services = [
  {
    id: 1,
    title: LASER,
    scr: laser,
    alt: 'Laser apparat',
  },
  {
    id: 2,
    title: ELECTRO,
    scr: electro,
    alt: 'Electro apparat',
  },
  {
    id: 3,
    title: SUGARING,
    scr: sugaring,
    alt: 'Sugaring procedure',
  },
];
