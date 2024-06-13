import React from 'react'
import Header from './Header';
import Title from './../Shared/Title';
import { Grid } from '@mui/material';
import Chatlist from './../Specific/chatlist';
import { samplechats } from '../../../Constants/sampleData';
import { useParams } from 'react-router-dom';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

const params = useParams();
const chatid = params.chatid 


    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh -4rem)"}>
          <Grid item sm={4} md={3} sx={{
            display: { xs: "none", sm: "block" }
          }} height={"100%"}>
            <Chatlist chats={samplechats} chatid={chatid} newMesssagesAlert={[{ chatid,  count: 4 }]} 
            onlineUsers={["1","2"]}
            />
            </Grid>


          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100vh"}
            sx={{
              display: { xs: 'none', md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }} >
            ab bol bhai
          </Grid>
        </Grid>

        <div>Footer</div>
      </>
    )
  }
}

export default AppLayout
