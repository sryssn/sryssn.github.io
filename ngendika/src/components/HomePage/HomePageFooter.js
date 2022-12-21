import React from 'react';
import {
  BottomNavigation, BottomNavigationAction, Paper, useScrollTrigger, Slide,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PropTypes from 'prop-types';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

function HomePageFooter({ logOut }) {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HideOnScroll>
      <Paper
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',
        }}
        elevation={0}
      >
        <BottomNavigation showLabels sx={{ width: 700 }} value={value} onChange={handleChange} className="home-page-footer-wrapper">
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
            type="button"
          />
          <BottomNavigationAction
            label="Leaderboard"
            value="leaderboard"
            icon={<LeaderboardIcon />}
            type="button"
          />
          <BottomNavigationAction
            label="Logout"
            value="logout"
            icon={<LogoutIcon />}
            type="button"
            onClick={logOut}
          />
        </BottomNavigation>
      </Paper>
    </HideOnScroll>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

HomePageFooter.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default HomePageFooter;
