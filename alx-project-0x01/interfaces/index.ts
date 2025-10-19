// interfaces/index.ts
export type UserProps = {
  id: number | string;
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

export type PostProps = {
  id: number | string;
  title: string;
  body: string;
  userId?: number | string;
  createdAt?: string;
};
export type PostData = {
  userId: number | string;
  title: string;
  body: string;
};