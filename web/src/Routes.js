// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PageheaderLayout from 'src/layouts/PageheaderLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PageheaderLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/distribute" page={DistributePage} name="distribute" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
