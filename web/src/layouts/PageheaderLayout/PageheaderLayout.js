import { Link, routes } from '@redwoodjs/router'
//import Routes from 'src/Routes'

let loggedin = 1

const PageheaderLayout = ({ children }) => {

  const truncate = (text, length = 50) => {
    if (typeof text !== 'string') return ''
    return text.substring(0, length) + '...'
  }

  const checkLogin = (log) => {
    if (log === 0) {
      loggedin = 1
      return loggedin
    }
    else{
      loggedin = 0
    } return loggedin
  }

  const logBut = checkLogin(loggedin) ? (
    <header>
      <button
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-blue-600 hover:bg-blue-700"
      >
        {"Distribute"}
      </button>
    </header>

  ) : (
    <header>
      <div className="sm-8 flex items-center justify-end md:flex-1 lg:w-0">
        <button
          disabled={false}
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-blue-600 hover:bg-blue-700"
        >
          {'Home'}
        </button>
    </div>
    </header>
  )

  return (
    loggedin ? (
    <div className="m-4">
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4 flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to={routes.distribute()}>
                <img className="h-10" src="/favicon.png" />
                {logBut}
              </Link>
            </div>
            <main>{children}</main>
          </div>

        </div>
      </div>
    </div>) : (
        <div className="m-4">
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-4 flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
              <main>
                <Link to={routes.home()}>
                  <img className="h-10" src="/favicon.png" />
                  {logBut}
                </Link>
              </main>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  )
/*  return (
    <>
    <header>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.distribute()}>Distribution</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{ children }</main>
  </>
  )*/
}

export default PageheaderLayout
