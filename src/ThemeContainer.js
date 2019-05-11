import React, { Component } from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import ShowTheme from './ShowTheme';

class ThemeContainer extends Component {
  state = {
    theme: 'dark'
  }

  onSwitchTheme = (theme, e) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  render() {
    const { theme } = this.state;
    return (
      <main>
        <ThemeSwitcher
          theme={theme}
          switchTheme={this.onSwitchTheme} />
        <ShowTheme
          theme={theme}
        />
      </main>
    );
  }
}

export default ThemeContainer
