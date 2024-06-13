// stylecom.jsx
import { styled } from '@mui/material/styles';
import { Link as LinkComponent } from 'react-router-dom';
export const VisuallyHiddenInput = styled('input')({
  position: 'absolute',
  width: '1',
  height: '1',
  margin: '-1',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: '0',
  whiteSpace: 'nowrap',
});

export const Link = styled(LinkComponent)`
text-decoration:none;
color:black;
padding:1rem;
&:hover{background-color:rgba(0,0,0,0.1);}

`

