import {Link} from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
            <div className="navbar-header">
                <span className="navbar-brand h1 text-white">
                Andrew Mitchell
                </span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsible-navbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/resume">Resume</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Projects</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/project-horizon">Project: Horizon</a>
                            <a className="dropdown-item" href="/capture-the-flag">Capture the Flag</a>
                            <a className="dropdown-item" href="/sudoku-solver">Sudoku Solver</a>
                            <a className="dropdown-item" href="/plexus-effect">Plexus Effect</a>
                        </div>
                    </li>
                </ul>
                <ul className="nav navbar-nav ms-md-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/AndrewMitchell25" target="blank" aria-label="GitHub">
                            <i className="bi bi-github nav-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/in/andrew-mitchell-572710225/" target="blank" aria-label="LinkedIn">
                          <i className="bi bi-linkedin nav-icon"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/andrew.jmitchell/?hl=en" target="blank" aria-label="Instagram">
                            <i className="bi bi-instagram nav-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-label="Email">
                            <i className="bi bi-envelope nav-icon"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="mailto: andrew.j.mitchell.247@gmail.com">andrew.j.mitchell.247@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}