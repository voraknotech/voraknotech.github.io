export interface User {
  id: number;
  name: string;
  email: string;
  adress: Address;
}

interface Address {
  street: string;
  city: string;

}
