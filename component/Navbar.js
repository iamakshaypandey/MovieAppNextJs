import Link from 'next/link'
import brand from '../public/barnd.svg'
import dark from '../public/dark.svg'
import light from '../public/light.svg'
import Image  from 'next/image'
import styles from '../styles/Home.module.css'
import useDarkMode from './useDarkMode'




function Navbar() {
    const [colorTheme, setTheme] = useDarkMode();

  return (
   <>
    <nav className={`navbar ${styles.bgNav} position-sticky top-0`} >
        <Link className="navbar-brand h1" href="/">
            <a>
                <Image src={brand} alt="brand" className='w-50 h-50' />
            </a>
        </Link>
        <div className=''>
            {colorTheme === "light" ? (
                <Image  src={light} width={50} height={50} onClick={() => setTheme("light")}>
                </Image>
            ) : (
                <Image  src={dark} width={50} height={50} onClick={() => setTheme("dark")}>  
                </Image>
            )}     
        </div>
    </nav>
   </>
  )
}

export default Navbar