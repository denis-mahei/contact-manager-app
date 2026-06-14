import { Box, Skeleton } from '@mui/material';

export const ContactSkeleton = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        borderRadius: 2,
        backgroundColor: 'rgb(255 255 255 / 0.2)',
        width: '100%',
      }}
    >
      {/* AVATAR */}
      <Skeleton variant="circular" width={80} height={80} />
      {/* INFO BLOCK */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* NAME */}
        <Skeleton variant="text" width="40%" height={22} />
        {/* PHONE */}
        <Skeleton variant="text" width="30%" height={20} />
        {/* CONTACT TYPE */}
        <Skeleton variant="text" width="10%" height={20} />
      </Box>
      {/* ACTIONS */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
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

export const ContactListSkeleton = ({count = 5}) => {
  return Array.from({ length: count }).map((_, i) => (

    <ContactSkeleton key={i} />

  ));
}