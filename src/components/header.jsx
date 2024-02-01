import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AutoStoriesIcon sx={{ mr: 2 }} />

            <Typography
              style={ {userSelect: 'none'} }
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
              読書管理アプリ
            </Typography>
            <Button color="inherit" onClick={() => {
              navigate("/home");
            }} sx={{ width : 100}}>一覧</Button>
            <Button color="inherit" onClick={() => {navigate("/search")}} sx={{ width : 100}}>検索</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;