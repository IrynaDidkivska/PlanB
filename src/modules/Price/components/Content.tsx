import { Table } from './index';

type ContentProps = {
  activeTab: number | null;
  index: number;
};

export default function Content({ activeTab, index }: ContentProps) {
  return (
    <div className={`${activeTab === index ? 'block' : 'hidden'}`}>
      <Table />
    </div>
  );
}
