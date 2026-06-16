import { styled } from '@mui/system';
import { Box, Card, CardContent } from '@mui/material';

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  paddingInline: 20,
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
}));

const AuthCard = styled(Card)(() => ({
  maxWidth: 400,
  width: '100%',
  borderRadius: 12,
  background: 'rgb(158 158 158 / 0.4)',
  backdropFilter: 'blur(1px)',
  border: '3px solid rgba(255, 255, 255, 0.5)',
  boxShadow:
    '0 20px 60px rgba(0,0,0,0.3), inset 1px 70px 50px rgba(255, 255, 255, 0.6)',
}));

const AuthWrapper = ({ children }) => {
  return (
    <Wrapper>
      <AuthCard>
        <CardContent
          sx={{
            p: 1.5,
          }}
        >
          {children}
        </CardContent>
      </AuthCard>
    </Wrapper>
  );
};

export default AuthWrapper;
