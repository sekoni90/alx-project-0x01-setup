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
  id: number;
  title: string;
  body: string;
  userId?: number;
  createdAt?: string;
};
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
};
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
