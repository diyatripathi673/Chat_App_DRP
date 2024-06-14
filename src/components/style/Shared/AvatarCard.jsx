import { Box, Stack, Avatar } from '@mui/material';
import React from 'react';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <Box sx={{ position: 'relative', width: '5rem', height: '3rem' }}  >
        {avatar.slice(0, max).map((i, index) => (
          <Avatar
            key={index}
            src={i}
            alt={`Avatar ${index}`}
            sx={{
              width: '2rem',
              height: '2rem',
              position: 'absolute',
left:{
                xs:`${index+0.5}rem`,
                sm:`${index}rem`,
            }
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AvatarCard;
