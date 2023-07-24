import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

let activeClassName = {
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(12, 46, 86)',
};

const Navigation = () => (
  <header className={css.header}>
    <div className={css.container}>
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={css.link}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={css.link}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Movies
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navigation;
