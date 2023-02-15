import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";
import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const agentProfile = data?.data ?? [];

  const { name, email, avatar, allProperties } = agentProfile;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Profile
      type="Agent"
      name={name}
      email={email}
      avatar={avatar}
      properties={allProperties}
    />
  );
};

export default AgentProfile;
