export type Item = {
  id: number | null;
  name: string;
  price: number | null;
}

export type ItemResponseApi = {
  calculateTotalAmounts: number;
  items: {
    current_page: number;
    data: Item[]
  }
}