import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography, Container } from '@mui/material';

function LogIn(props) {
  const { setUser } = props;
  const navigate = useNavigate();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                console.log('ログイン成功');
                setUser(1);
                navigate("/home");
              }}
              >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default LogIn;