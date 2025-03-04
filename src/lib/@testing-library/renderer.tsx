import React, { PropsWithChildren, ReactElement } from 'react'
import { configure, render, RenderResult } from '@testing-library/react' // eslint-disable-line no-restricted-imports

configure({ testIdAttribute: 'data-test' })

/* https://testing-library.com/docs/react-testing-library/setup */
const customRender = (ui: ReactElement, { ...renderOptions } = {}): RenderResult => {
  const AllTheProviders = ({ children }: PropsWithChildren<unknown>) => {
    return (
      // providers to be added later on as: react-i18next
      <>{children}</>
    )
  }
  return render(ui, { wrapper: AllTheProviders, ...renderOptions })
}

// eslint-disable-next-line no-restricted-imports
export * from '@testing-library/react'
export { customRender as render }
