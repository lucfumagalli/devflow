import { RouteParams } from "@/types/global";

const Profile = async ({ params }: RouteParams) => {
  const { id } = await params;

  return <div>Profile {id}</div>;
};
export default Profile;
