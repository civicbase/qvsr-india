// FROM: https://github.com/bence-toth/react-hook-geolocation/blob/master/src/index.js
import { useEffect, useState } from 'react'

interface EnrichedGeolocationCoordinates extends GeolocationCoordinates {
  timestamp?: GeolocationPosition['timestamp']
  error?: GeolocationPositionError
}

type PositionOptions = {
  enableHighAccuracy?: boolean
  maximumAge?: number
  timeout?: number
  allowGeolocation?: boolean
}

type Callback = (geolocation: EnrichedGeolocationCoordinates) => void

const useGeolocation = (
  {
    enableHighAccuracy,
    maximumAge,
    timeout,
    allowGeolocation = true,
  }: PositionOptions = {},
  callback?: Callback,
) => {
  const [coordinates, setCoordinates] = useState({
    accuracy: undefined,
    altitude: undefined,
    altitudeAccuracy: undefined,
    heading: undefined,
    latitude: undefined,
    longitude: undefined,
    speed: undefined,
    timestamp: undefined,
    error: undefined,
  })

  useEffect(() => {
    let didCancel: boolean

    const updateCoordinates = ({ coords = {}, timestamp }: any) => {
      // console.log('update coordinates success')
      const {
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed,
      } = coords
      if (!didCancel) {
        setCoordinates({
          accuracy,
          altitude,
          altitudeAccuracy,
          heading,
          latitude,
          longitude,
          speed,
          timestamp,
          error: undefined,
        })
        if (callback instanceof Function) {
          callback({
            accuracy,
            altitude,
            altitudeAccuracy,
            heading,
            latitude,
            longitude,
            speed,
            timestamp,
            error: undefined,
          })
        }
      }
    }

    const setError = (error: any) => {
      if (!didCancel) {
        setCoordinates({
          accuracy: undefined,
          altitude: undefined,
          altitudeAccuracy: undefined,
          heading: undefined,
          latitude: undefined,
          longitude: undefined,
          speed: undefined,
          timestamp: undefined,
          error,
        })
      }
    }

    let watchId: number

    if (navigator.geolocation && allowGeolocation) {
      navigator.geolocation.getCurrentPosition(updateCoordinates, setError)
      watchId = navigator.geolocation.watchPosition(
        updateCoordinates,
        setError,
        {
          enableHighAccuracy,
          maximumAge,
          timeout,
        },
      )
    }
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId)
      }
      didCancel = true
    }
  }, [callback, enableHighAccuracy, maximumAge, timeout, allowGeolocation])

  return coordinates
}

export default useGeolocation
