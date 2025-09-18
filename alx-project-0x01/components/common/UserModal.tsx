// components/common/UserModal.tsx
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const user: UserData = {
      id: Math.floor(Math.random() * 1000), // temp ID generation
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      username: (form.elements.namedItem("username") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Name</label>
            <input name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label>Username</label>
            <input name="username" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <input name="email" type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label>Phone</label>
            <input name="phone" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label>Website</label>
            <input name="website" className="w-full p-2 border rounded" required />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
