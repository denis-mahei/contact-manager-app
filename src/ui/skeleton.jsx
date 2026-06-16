import { Box, Skeleton } from '@mui/material';

export const ContactSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'column' },
        gap: 1,
        py: 1,
        px: 2,
        borderRadius: 3,
        border: '1px solid transparent',
        backgroundColor: 'rgb(204 203 203 / 0.31)',
        width: '100%',
      }}
    >
      <Skeleton variant="circular" width={80} height={80} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          p: 2,
        }}
      >
        <Skeleton variant="text" height={20} width={50} />
        <Skeleton variant="text" height={20} width={50} />
        <Skeleton variant="text" height={15} width={40} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'row',
            sm: 'column',
            md: 'column',
            lg: 'column',
          },
          gap: 1,
          alignItems: 'center',
        }}
      >
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="circular" width={32} height={32} />
      </Box>
    </Box>
  );
};

export const ContactListSkeleton = ({ count = 4 }) => {
  return Array.from({ length: count }).map((_, i) => (
    <ContactSkeleton key={i} />
  ));
};
