import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VehicleInventory from './pages/vehicleInventory/VehicleInventory'
import MainLayout from './layouts/MainLayout'
import JdmSportsPage from './pages/vehicleInventory/JdmSportsPage'
import JdmClassicPage from './pages/vehicleInventory/JdmClassicPage'
import NonJdmPage from './pages/vehicleInventory/NonJdmPage'
import HowToBuyPage from './pages/HowToBuyPage'
import CarPurchasePage from './pages/CarPurchasePage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="vehicle-inventory" element={<VehicleInventory />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="vehicle-inventory/:jdm-sports"
          element={<JdmSportsPage />}
        />
        <Route
          path="vehicle-inventory/:jdm-classic"
          element={<JdmClassicPage />}
        />
        <Route path="vehicle-inventory/:non-jdm" element={<NonJdmPage />} />
        <Route path="how-to-buy" element={<HowToBuyPage />} />
        <Route path="vehicle-inventory/:id" element={<CarPurchasePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
