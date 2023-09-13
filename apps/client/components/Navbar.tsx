import Image from "next/image";

const Navbar = () => <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <Image src="/assets/compass.svg" alt="logo" width={80} height={80} />
    </a>
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
      <a className="navbar-item" href="/about">
        About
      </a>
      <a className="navbar-item" href="/career-path-information">
        What Is a Career Path
      </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary" href="/test">
            <strong>Take test</strong>
          </a>
          <a className="button is-light">
            Tips
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

export default Navbar;
