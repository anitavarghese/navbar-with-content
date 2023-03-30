// Write your code here
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
        className="home-image"
        alt="about"
      />
      <h1 className="home-heading">About</h1>
    </div>
  </>
)

export default About
