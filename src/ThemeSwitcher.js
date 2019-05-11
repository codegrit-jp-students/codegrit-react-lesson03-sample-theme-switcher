import React from 'react'
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul>
    <li>
      <a href onClick={(e) => switchTheme('normal', e)}>
        Normal
      </a>
    </li>
    <li>
      <a href onClick={(e) => switchTheme('light', e)}>
        Light
      </a>
    </li>
    <li>
      <a href onClick={(e) => switchTheme('dark', e)}>
        Dark
      </a>
    </li>
  </ul>
);

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func.isRequired
}

export default ThemeSwitcher