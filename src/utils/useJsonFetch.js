import { useEffect, useState } from "react"

export const useJsonFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)

        const response = await fetch(url, options)

        if (response.ok) {
          const data = await response.json()
          setData(data)
          setLoading(false)
        } else {
          throw new Error(response.statusText)
        }
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    getData()
  }, [url])


  return [data, loading, error]
}