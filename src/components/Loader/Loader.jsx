import { Box } from '@mui/material';
import { GridLoader } from 'react-spinners';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <GridLoader color="#ffffff" />
    </Box>
  );
};
export default Loader;
