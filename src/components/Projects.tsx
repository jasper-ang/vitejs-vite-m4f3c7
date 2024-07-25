import React, { useState } from 'react'
import './Project.css'

const Projects: React.FC = () => {
  const [activeButton, setActiveButton] = useState('website')
  const [showDetails, setShowDetails] = useState(false)

  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="button-group">
        <button
          className={activeButton === 'website' ? 'active' : ''}
          onClick={() => handleButtonClick('website')}
        >
          This website
        </button>
        <button
          className={activeButton === 'Aquila' ? 'active' : ''}
          onClick={() => handleButtonClick('Aquila')}
        >
          Aquila
        </button>
      </div>
      <div className="details-section">
        {activeButton === 'website' && (
          <div>
            <p>This is the website project description.</p>
            <br></br>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              porro a cumque culpa recusandae ab, aliquid cum saepe tempora
              laboriosam consectetur aperiam ad. Perferendis quam magnam illum
              sequi, praesentium culpa?
            </p>
            <br></br>
          </div>
        )}
        {activeButton === 'Aquila' && (
          <div>
            <p>This is the Aquila project description.</p>
            <br></br>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              porro a cumque culpa recusandae ab, aliquid cum saepe tempora
              laboriosam consectetur aperiam ad. Perferendis quam magnam illum
              sequi, praesentium culpa?
            </p>
            <br></br>
          </div>
        )}
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details ▽' : 'Show Details ▷'}
      </button>
      {showDetails && (
        <div className="details-content">
          <p>Here are some additional details about the project.</p>
          {/* Add more detailed content here */}
        </div>
      )}
    </div>
  )
}

export default Projects
