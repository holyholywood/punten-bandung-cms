import { useState, useEffect } from 'react'
import Fetch from '../API'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    Fetch.get(url)
      .then((response) => {
        setData(response)
        setIsLoading(false)
      })
      .catch((error) => {
        setErrors(error)
        setIsLoading(false)
      })
  }, [url])

  return [data, isLoading, errors]
}

export default useFetch
