import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {

  const butt =  (
  <button
    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-blue-600 hover:bg-blue-700 text-decoration-none"
  >
    {"Distribute"}
  </button>)
  return (
    <>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Primary</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-600 hover:shadow-lg">Secondary</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">Success</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">Danger</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg">Warning</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg">Info</button>
                </div>
                <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg">Dark</button>
                </div>

    <div className="d-flex justify-content-start">
    <div className="d-flex">
      {"Hello"}
    </div>
    <div className="d-flex justify-content-start">
      <Link to={routes.distribute()}>
        {butt}
      </Link>
    </div>
    </div>
    </>
 )
}


export default HomePage
