import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MusicNavbar from "./components/MusicNavbar"

import { MusicPlayer } from "react-bootstrap-icons"

function App() {
  return (
    <>
      <MusicNavbar />
      <MusicPlayer />
    </>
  )
}

export default App
