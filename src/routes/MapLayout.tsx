import { Outlet } from "react-router-dom"
import { MapView } from "../components/MapView"
import { useAvailableEmotions } from "../hooks/useAvailableEmotions"
import { useEmotionsStore } from "../store/emotionsStore"
import { useEffect } from "react"

const MapLayout = () => {
  const { data: availableEmotions } = useAvailableEmotions()
  const setEmotions = useEmotionsStore((state) => state.setEmotions)

  useEffect(() => {
    if (availableEmotions) {
      setEmotions(availableEmotions)
    }
  }, [availableEmotions, setEmotions])

  return (
    <div>
      <MapView />
      <Outlet />
    </div>
  )
}

export default MapLayout
