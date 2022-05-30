import React,{useState} from 'react'
import{ FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png';

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        // Navigation
    <div className='fixed w-full h-[4.5rem] flex justify-between items-center px-4 bg-fuchsia-400 text-white'>
        <div>
            <img src={Logo} alt="Company logo" style={{ width: '100px' }}  />
        </div>
        <nav>
            <ul className="hidden md:flex">
                <li>Vision and Mission</li>
                <li>Value Company</li>
                <li>company strategy</li>
                <li>Structure</li>
            </ul>
        </nav>
        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        <ul
        className={
            !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-fuchsia-400 flex flex-col justify-center items-center mix-blend-overlay md:hidden lg:hidden'
        }
        >
        <li className='py-6 text-2xl hover:scale-75'>Vision and Mission</li>
        <li className='py-6 text-2xl hover:scale-75'>Value Company</li>
        <li className='py-6 text-2xl hover:scale-75'>Company strategy</li>
        <li className='py-6 text-2xl hover:scale-75'>Structure</li>
        </ul>
    </div>
    );
}

export default Header