import { render } from '@redwoodjs/testing'

import PageheaderLayout from './PageheaderLayout'

describe('PageheaderLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageheaderLayout />)
    }).not.toThrow()
  })
})
