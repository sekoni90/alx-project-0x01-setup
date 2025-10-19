// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

type Props = {
  user: UserProps;
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <article className="rounded-2xl p-5 shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow">
      <header className="mb-3">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </header>
      <div className="text-sm text-gray-700 space-y-2">
        <div>
          <strong>Email:</strong>{" "}
          <a className="text-blue-600 hover:underline" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>
        <div>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${user.phone}`}>{user.phone}</a>
        </div>
        <div>
          <strong>Website:</strong>{" "}
          <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="hover:underline">
            {user.website}
          </a>
        </div>
        <div>
          <strong>Company:</strong> {user.company.name}
          <div className="text-xs text-gray-500 italic">&ldquo;{user.company.catchPhrase}&rdquo;</div>
        </div>
        <div>
          <strong>Address:</strong>
          <div className="text-xs text-gray-500">
            {user.address.suite}, {user.address.street}, {user.address.city} {user.address.zipcode}
          </div>
        </div>
      </div>
      <footer className="mt-4">
        <span className="text-xs text-gray-400">User ID: {user.id}</span>
      </footer>
    </article>
  );
};

export default UserCard;

