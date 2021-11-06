export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: CarRentDTO;
  fuel_type: string;
  thumbnail: string;
  accessories: CarAccessoryDTO[];
  photos: string[];
}

export interface CarAccessoryDTO {
  type: string;
  name: string;
}

export interface CarRentDTO {
  period: string;
  price: number;
}
