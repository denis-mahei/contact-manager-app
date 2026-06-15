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
  maxWidth: 420,
  width: '100%',
  borderRadius: 16,
  background:
    'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03) 45%, transparent 70%)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '4px solid rgba(255, 255, 255, 0.4)',
  boxShadow:
    '0 20px 60px rgba(0,0,0,0.15), inset 0 20px 60px rgba(255, 255, 255, 0.3)',
}));

const AuthWrapper = ({ children }) => {
  return (
    <Wrapper>
      <AuthCard>
        <CardContent
          sx={{
            p: 3,
          }}
        >
          {children}
        </CardContent>
      </AuthCard>
    </Wrapper>
  );
};

export default AuthWrapper;
