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
  handleDeleteChatOpen,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((chat, index) => {
        const { avatar, name, _id, groupChat, members, sameSender, isOnline } = chat;

        const newMessageAlert = newMesssagesAlert.find(
          (alert) => alert.chatid === _id
        );

        const isChatOnline = members.some((member) => onlineUsers.includes(member));

        return (
          <Chatitem
            key={_id}
            index={index}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={sameSender}
            isOnline={isChatOnline}
            newMessageAlert={newMessageAlert}
            handleDeleteChatOpen={handleDeleteChatOpen}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
