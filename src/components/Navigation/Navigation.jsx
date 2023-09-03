import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import css from './Navigation.module.css';

// let activeClassName = {
//   // color: 'rgb(255, 255, 255)',
//   // backgroundColor: 'rgb(12, 46, 86)',
// };

const Navigation = () => (
  <AppBar position="static">
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={css.link}
            // style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <Button variant="contained">Home</Button>
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
            // style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            <Button variant="contained">Movies</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  </AppBar>
);

export default Navigation;
