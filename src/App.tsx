import AppRoutes from "./routes/AppRoutes"
import BottomNav from "./components/BottomNav"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <>
      <Sidebar />
        <Header />
        <AppRoutes />
        <BottomNav />
      </>
    </BrowserRouter>
  )
}

export default App
