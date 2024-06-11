// stylecom.jsx
import { styled } from '@mui/material/styles';

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
