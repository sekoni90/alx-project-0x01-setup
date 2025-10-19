// interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs?: string;
  };
  address: {
    suite: string;
    street: string;
    city: string;
    zipcode: string;
  };
};

export interface PostProps {
  id: number | string;
  title: string;
  body: string;
  userId?: number | string;
  createdAt?: string;
};
export interface PostData {
  userId: number;
  title: string;
  body: string;
};