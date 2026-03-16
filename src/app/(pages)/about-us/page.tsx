import {getUsers} from "@/src/services/userService";
export default async function AboutUsPage() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}