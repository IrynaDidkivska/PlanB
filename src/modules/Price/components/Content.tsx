import { TableData } from '../data/dataTypes';
import { Table } from './index';

interface ContentProps {
  activeTab: number | null;
  index: number;
  data: TableData;
}

export default function Content({ activeTab, index, data }: ContentProps) {
  return (
    <div className={`${activeTab === index ? 'block tr-accordion' : 'hidden'}`}>
      <Table data={data} activeTab={activeTab} />
    </div>
  );
}
