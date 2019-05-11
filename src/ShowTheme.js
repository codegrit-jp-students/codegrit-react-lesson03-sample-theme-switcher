import React from 'react'
import PropTypes from 'prop-types'

const ShowTheme = ({ theme }) => {
  let bgStyle, fontStyle;
  switch (theme) {
    case 'normal':
      bgStyle = {
        backgroundColor: 'gray',
      }
      fontStyle = {
    color: 'black',
      }
      break;
    case 'dark':
      bgStyle = {
        backgroundColor: 'black',
      }
      fontStyle = {
        color: 'white',
      }
      break;
    default:
      bgStyle = {
        backgroundColor: 'cyan',
      }
      fontStyle = {
        color: 'black',
      }
      break;
  }
  return (
    <div className="wrapper" style={bgStyle}>
      <p style={fontStyle}>現在のテーマは{theme}です。</p>
    </div>
  );
}

ShowTheme.defaultProps = {
  theme: 'normal'
}

ShowTheme.propTypes = {
  theme: PropTypes.string
}

export default ShowTheme;