// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

type Props = {
  userProps: UserProps;
};

const UserCard: React.FC<Props> = ({ userProps }) => {
  return (
    <article className="rounded-2xl p-5 shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow">
      <header className="mb-3">
        <h2 className="text-lg font-semibold">{userProps.name}</h2>
        <p className="text-sm text-gray-500">@{userProps.username}</p>
      </header>
      <div className="text-sm text-gray-700 space-y-2">
        <div>
          <strong>Email:</strong>{" "}
          <a className="text-blue-600 hover:underline" href={`mailto:${userProps.email}`}>
            {userProps.email}
          </a>
        </div>
        <div>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${userProps.phone}`}>{userProps.phone}</a>
        </div>
        <div>
          <strong>Website:</strong>{" "}
          <a href={`http://${userProps.website}`} target="_blank" rel="noreferrer" className="hover:underline">
            {userProps.website}
          </a>
        </div>
        <div>
          <strong>Company:</strong> {userProps.company.name}
          <div className="text-xs text-gray-500 italic">&ldquo;{userProps.company.catchPhrase}&rdquo;</div>
        </div>
        <div>
          <strong>Address:</strong>
          <div className="text-xs text-gray-500">
            {userProps.address.suite}, {userProps.address.street}, {userProps.address.city} {userProps.address.zipcode}
          </div>
        </div>
      </div>
      <footer className="mt-4">
        <span className="text-xs text-gray-400">User ID: {userProps.id}</span>
      </footer>
    </article>
  );
};

export default UserCard;
