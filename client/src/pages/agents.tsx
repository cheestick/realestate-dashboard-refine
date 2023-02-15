import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";
import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
          borderRadius: "10px",
        }}
      >
        {allAgents.map(({ _id, avatar, email, name, allProperties }) => (
          <AgentCard
            key={_id}
            id={_id}
            name={name}
            email={email}
            avatar={avatar}
            noOfProperties={allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agents;
