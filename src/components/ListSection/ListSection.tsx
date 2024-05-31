import { twMerge } from 'tailwind-merge';
import Subtitle from '../Subtitle/Subtitle';

interface ListItem {
  title: string;
  description: string;
}

const ListSection = ({
  title,
  items,
  className,
}: {
  title: string;
  items: ListItem[];
  className?: string;
}) => (
  <div className={twMerge(`mb-20 xl:w-1/2`, className)}>
    <Subtitle className="mb-2.5 text-stone-900">{title}</Subtitle>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-3 last:mb-0">
          <p className="text-xl font-bold">
            {item.title}
            <span className="text-lg font-normal">{item.description}</span>
          </p>
        </li>
      ))}
    </ul>
  </div>
);
export default ListSection;
