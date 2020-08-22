import React from 'react'
import { ThemeConfigContext } from 'lib/config-context'

export const ThemeConfigProvider = React.memo(({ onChange, children }) => {
  return <ThemeConfigContext.Provider value={{ onChange }}>{children}</ThemeConfigContext.Provider>
})
