import { Stack } from "@mui/material";
import Chatitem from "../Shared/Chatitem";

const Chatlist = ({
  w = "100%",
  chats = [],
  chatid,
  onlineUsers = [],
  newMesssagesAlert = [
    {
      chatid: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, i) => {
        const { avatar, name, _id, groupChat, members } = data;

        const newMessageAlert = newMesssagesAlert.find(
          ({chatid}) => chatid === _id
        );

        const isOnline = members.some((member) => onlineUsers.includes(member));

        return (
          <Chatitem
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatid === _id}
            handleDeleteChatOpen={handleDeleteChat}
            key={i}
            index={i}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
