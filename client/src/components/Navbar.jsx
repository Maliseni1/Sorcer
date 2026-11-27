import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import Logo from './Logo'

const Navbar = () => {
    const { user, setShowLogin, logout, credit, isDarkMode, toggleDarkMode } = React.useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between py-4 bg-transparent text-night dark:text-cream'>
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
                    <p className='text-night/70 dark:text-cream/70 max-sm:hidden pl-4'>Hi, {user.name}</p>
                    <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10 drop-shadow' alt=''/>
                        <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                            <ul className='list-none m-0 p-2 bg-white dark:bg-night rounded-md border border-night/10 dark:border-cream/10 text-sm'>
                                <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 text-night dark:text-cream hover:bg-night/5 dark:hover:bg-cream/10 rounded'>Logout</li>
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
                    className='cursor-pointer text-night/70 dark:text-cream/70'>Pricing</p>
                    <button onClick={()=>setShowLogin(true)} className='bg-night text-cream dark:bg-gold dark:text-night px-7 py-2 sm:px-10 text-sm rounded-full font-semibold'>Login</button>
                </div>
                }
            </div>

        </div>
    )
}

export default Navbar
