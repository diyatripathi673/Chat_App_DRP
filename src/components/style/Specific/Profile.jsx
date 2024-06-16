import { Stack, Avatar, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "180px",
          height: "180px",
          objectFit: "contain", // Changed ObjectFit to objectFit
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"hello koko the world is yours"} />
      <ProfileCard heading={"Bio"} text={"hello koko the world is yours"} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return ( 
    <Stack
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && <img src={Icon} alt="icon" />}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"grey"} variant="caption">{heading}</Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
