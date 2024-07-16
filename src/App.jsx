import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes/Routes"
import { GlobalStyle } from '../src/global-styles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  )
}

export default App
