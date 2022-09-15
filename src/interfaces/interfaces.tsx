export interface Products {
  _id: string;
  name: string;
  avatar: string;
  category: string;
  createdAt: Date;
  description: string;
  developerEmail: string;
  price: number;
  updatedAt: Date;
  __v: number;
}

export interface Categories {
  _id: string;
  name: string;
  updatedAt: Date;
  __v: number;
  createAt: Date;
}
