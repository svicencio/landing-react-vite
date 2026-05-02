import { useState, useEffect } from 'react'
import { getDollar } from '../services/api'

export function useDollar() {
  const [dollar, setDollar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchDollar = async () => {
      try {
        setLoading(true)
        setError(null)

        const value = await getDollar()
        setDollar(value)

      } catch {
        setError('Error al obtener dólar')
      } finally {
        setLoading(false)
      }
    }

    fetchDollar()

    const id = setInterval(fetchDollar, 10000)

    return () => clearInterval(id)

  }, [])// los corchetes sirven para decir ejecuta esto una vez o [X] cuando cambia X o sin nada, todo el tiempo que se renderiza.

  return { dollar, loading, error }
}