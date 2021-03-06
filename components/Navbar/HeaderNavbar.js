import Link from 'next/link'
import React from 'react'

export const HeaderNavbar = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container justify-content-between">
                    <div className='nav-logo'>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/about">About</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    )
}