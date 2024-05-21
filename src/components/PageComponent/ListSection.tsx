import Subtitle from '../Subtitle/Subtitle';

interface ListItem {
  title: string;
  description: string;
}

export const ListSection = ({
  title,
  items,
}: {
  title: string;
  items: ListItem[];
}) => (
  <div>
    <Subtitle className="mb-2.5 text-stone-900">{title}</Subtitle>
    <ul className="mb-20">
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
