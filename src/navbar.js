import logo from './Assets/logo.png';  

export default function Navbar() {

    return(
        <header className="App-header">
        <nav>
          <img src={logo} alt="logo for brand" className="logo"></img>
          <ul>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/test">Test</a></li>
            <li className="nav-item"><a href="/profile">Profile</a></li>
          </ul>
        </nav>

      </header>
    )
}

