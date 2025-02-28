export type Item = {
  id: number;
  name: string;
  price: number;
}

export type ItemResponseApi = {
  calculateTotalAmounts: number;
  items: {
    current_page: number;
    data: Item[]
  }
}