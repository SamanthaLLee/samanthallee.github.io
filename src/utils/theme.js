import React, { Component } from "react"
import { Howl } from "howler"

const sound = new Howl({
  src: ["../../sounds/knob.mp3"],
  volume: 0.2,
  format: ["mp3"],
})

const defaultState = {
  dark: true,
  toString: () => `dark`,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: true,
  }

  toString = () => (this.state.dark ? `dark` : `light`)

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark })
    sound.stop()
    sound.play()
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
