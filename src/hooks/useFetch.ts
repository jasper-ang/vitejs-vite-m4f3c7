import { useState, useEffect } from 'react'
import api from '../services/api'

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null) // Reset error before fetching data

      try {
        const response = await api.get(endpoint)
        setData(response.data)
      } catch (err) {
        // Ensure err is properly typed
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unexpected error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading, error }
}

export default useFetch
