export interface TableData {
  services: {
    category: string | null;
    items: {
      service: string;
      price: string;
      discount?: string;
    }[];
  }[];
}
