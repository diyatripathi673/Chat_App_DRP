import { ListItem } from '@mui/material'
import React from 'react'
{}
const UserItem = ({user,hnadler,handlerisLoading}) => {
    const {name,_id,avtar}=user
  return (
   <ListItem>
    <Stack>
        <Avtar/>
    </Stack>
   </ListItem>
  )
}

export default memo (UserItem)
