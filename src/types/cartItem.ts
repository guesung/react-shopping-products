export interface GetCartItemsResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Content[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
export interface Content {
  id: number;
  quantity: number;
  product: Product;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
export interface Pageable {
  offset: number;
  sort: Sort;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}
