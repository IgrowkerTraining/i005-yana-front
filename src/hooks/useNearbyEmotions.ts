import { useQuery } from "@tanstack/react-query"

interface Props {
  latitude: string
  longitude: string
  radius: string
}

const urlCore = "http://127.0.0.1:8000"

const fetchNearbyEmotions = async ({ latitude, longitude, radius }: Props) => {
  const url = new URL(`${urlCore}/emociones/api/nearby-emotions`)
  url.searchParams.set("latitude", latitude)
  url.searchParams.set("longitude", longitude)
  url.searchParams.set("radius", radius)

  const res = await fetch(url.toString())

  if (!res.ok) {
    throw new Error("Error getting emotions")
  }

  return res.json()
}

export const useNearbyEmotions = ({ latitude, longitude, radius }: Props) => {
  const query = useQuery({
    queryKey: ["nearbyEmotions", latitude, longitude, radius],
    queryFn: () => fetchNearbyEmotions({ latitude, longitude, radius }),
    enabled: !!latitude && !!longitude,
  })

  return query
}
