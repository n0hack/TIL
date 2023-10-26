import { Address } from './address';

type User = {
  name: string;
  id: string;
  email: string;
  password: string;
  address?: Address;
};

export default User;
