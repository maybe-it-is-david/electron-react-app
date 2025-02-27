import ContentStep from '../ContentStep'
import CodeWindowIcon from '../icons/CodeWindowIcon'
import FanIcon from '../icons/FanIcon'
import ColorSchemeIcon from '../icons/ColorSchemeIcon'
import AsterikIcon from '../icons/AsterikIcon'

const EraContent = () => {
  return (
    <div>
      <h2>Electron React App</h2>
      <p>
        Welcome to the Electron React App! This application provides a custom window titlebar, rapid hot reloads, and an
        enhanced developer experience.
      </p>
      <p>
        This project is built with Electron, React, Vite, TypeScript, and Tailwind CSS to provide a modern development
        environment with the latest features.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Custom Window Titlebar & Menus"
          description="Customize the look and feel of the application window"
          icon={CodeWindowIcon}
        />

        <ContentStep
          title="Fast & Hot Reload"
          description="Make changes to your code and see the changes instantly"
          icon={FanIcon}
        />

        <ContentStep
          title="Dark & Light Mode"
          description="Switch between dark and light mode with a click of a button"
          icon={ColorSchemeIcon}
        />

        <ContentStep
          title="Improved Project Structure"
          description="Organized project with a better folder structure to get you started"
          icon={AsterikIcon}
        />
      </div>
    </div>
  )
}

export default EraContent
