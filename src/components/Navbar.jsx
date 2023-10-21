import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import Resume from '../assets/Resume-JohnTrampe.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick =() => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="JT Logo" style={{width:'70px'}} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li> 
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {
                !nav ? <FaBars />
                : <FaTimes />
            }
        </div>

        {/* Mobile View */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/* LinkedIn */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/jtrampe/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>

                {/* GitHub */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1f1f]'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/jtrampe77">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>

                {/* Email */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e6425]'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:johntrampe07@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>

                 {/* Resume */}
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#686868]'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href={Resume} download>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

            </ul>
        </div>
      
    </div>
  )
}

export default Navbar