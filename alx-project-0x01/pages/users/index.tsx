import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user: UserProps) => {
    console.log("User added", user);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: { posts },
  };
}

export default Users;

