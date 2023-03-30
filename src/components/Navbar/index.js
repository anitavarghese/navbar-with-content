// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickButton = () => {
        toggleTheme()
      }

      return (
        <nav className="nav-bar-container">
          <div className="navbar-content">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="theme"
                alt="website logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="theme"
                alt="website logo"
              />
            )}

            {isDarkTheme ? (
              <ul className="home-about-container">
                <Link to="/" className="home">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                  <li>About</li>
                </Link>
              </ul>
            ) : (
              <ul className="home-about-container">
                <Link to="/" className="home light">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="about light">
                  <li>About</li>
                </Link>
              </ul>
            )}

            {isDarkTheme ? (
              <button
                type="button"
                data-testid="theme"
                className="button"
                onClick={onClickButton}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme"
                  alt="theme"
                />
              </button>
            ) : (
              <button
                type="button"
                data-testid="theme"
                className="button"
                onClick={onClickButton}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme"
                  alt="theme"
                />
              </button>
            )}
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
