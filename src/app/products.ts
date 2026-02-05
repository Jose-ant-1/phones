export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  supplierId: number;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    supplierId: 1,
    stock: 4,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    supplierId: 2,
    stock: 6,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A normal phone',
    supplierId: 2,
    stock: 0
  }
];
