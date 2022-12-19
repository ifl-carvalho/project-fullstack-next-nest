import { ReactNode } from 'react'

import { StyledComponentsRegistry, ToastContainer } from '@/lib'
import { GlobalStyles } from '@/styles'

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ToastContainer />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
