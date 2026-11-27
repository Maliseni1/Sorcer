import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import Logo from './Logo'
import { Button } from './ui'
import { theme } from '../styles/theme'

const Navbar = () => {
    const { user, setShowLogin, logout, credit, isDarkMode, toggleDarkMode } = React.useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className={`flex items-center justify-between py-4 bg-transparent ${theme.text.heading}`}>
            <Link to='/'>
                <Logo />
            </Link>

            <div>
                {
                user ?
                <div className='flex items-center gap-2 sm:gap-3'>
                    <button
                        onClick={toggleDarkMode}
                        className='p-2 rounded-full text-xl hover:bg-night/5 dark:hover:bg-cream/10'
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <button onClick={()=>navigate('/buycredit')} className='flex items-center gap-2 bg-gold/15 dark:bg-gold/20 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                        <img className='w-5' src={assets.credit_star} alt=''/>
                        <p className='text-xs sm:text-sm font-medium text-night/80 dark:text-cream/90'>Credits left : {credit}</p>
                    </button>
                    <p className={`${theme.text.body} max-sm:hidden pl-4`}>Hi, {user.name}</p>
                    <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10 drop-shadow' alt=''/>
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                            <ul className={`list-none m-0 p-2 bg-white dark:bg-night rounded-md border ${theme.border.subtle} text-sm`}>
                                <li onClick={logout} className={`py-1 px-2 cursor-pointer pr-10 ${theme.text.heading} hover:bg-night/5 dark:hover:bg-cream/10 rounded`}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='flex items-center gap-2 sm:gap-5'>
                    <button
                        onClick={toggleDarkMode}
                        className='p-2 rounded-full text-xl hover:bg-night/5 dark:hover:bg-cream/10'
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <p onClick={()=>navigate('/buycredit')}
                    className={`cursor-pointer ${theme.text.body}`}>Pricing</p>
                    <Button onClick={()=>setShowLogin(true)} className='px-7 py-2 sm:px-10 text-sm'>Login</Button>
                </div>
                }
            </div>

        </div>
    )
}

export default Navbar
