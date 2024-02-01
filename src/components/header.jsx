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
                my: 3,
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
            <Button color="inherit" sx={{ width : 150}} onClick={() => {
              navigate("/home");
            }} >一覧</Button>
            <Button color="inherit" sx={{ width : 150}} onClick={() => {navigate("/search")}}>検索</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;