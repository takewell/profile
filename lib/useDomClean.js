import { useEffect } from 'react'

export const useDomClean = () => {
  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')
  }, [])
}