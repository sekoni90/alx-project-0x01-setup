// pages/users/index.tsx
import React from "react";
import { NextPage } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // keeping "posts" per instructions
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: { posts },
  };
}

const Users: NextPage<UsersPageProps> = ({ posts }) => {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
};

export default Users;
