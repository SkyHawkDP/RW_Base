import { render } from '@redwoodjs/testing'

import DistributePage from './DistributePage'

describe('DistributePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DistributePage />)
    }).not.toThrow()
  })
})
