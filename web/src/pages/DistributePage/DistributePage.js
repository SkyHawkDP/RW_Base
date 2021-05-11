import { Link, routes } from '@redwoodjs/router'

const DistributePage = () => {
  console.log("At Dist")
  return (
    <>
      <header>
        <h2>Distribute Page</h2>
        <nav>
          <ul>
            <li>
              <Link to={routes.distribute()}>Distribution</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
}

export default DistributePage
