import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  const { name, email, avatar, allProperties } = myProfile;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Profile
      type="My"
      name={name}
      email={email}
      avatar={avatar}
      properties={allProperties}
    />
  );
};

export default MyProfile;
