import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material';
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "180px",
          height: "180px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"hello koko"} />
      <ProfileCard heading={"Username"} text={"@Rahulgoswami963"} Icon={UserNameIcon} />
      <ProfileCard heading={"Name"} text={"Rahul Goswami"} Icon={FaceIcon} />
      <ProfileCard heading={"Joined"} text={moment("2024-01-01").fromNow()} Icon={CalendarIcon} />
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
      {Icon && <Icon />}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"grey"} variant="caption">{heading}</Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
