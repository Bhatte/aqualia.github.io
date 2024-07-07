import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="py-4 px-6 flex items-center justify-between">
            <Link to='/' className="flex items-center gap-2" prefetch={false}>
                {/* <DatabaseIcon className="h-6 w-6" /> */}
                <span className="text-lg font-semibold">Aqualia</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link to='/about' className="hover:underline" prefetch={false}>
                    Who are we
                </Link>
                <Link to='/contact' className="hover:underline" prefetch={false}>
                    Contact
                </Link>
                {/* <Link href="#" className="hover:underline" prefetch={false}>
                    Contact
                </Link> */}
            </nav>
            <button>Get Started</button>
        </header>

    )
}

export default Header