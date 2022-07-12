import Link from 'next/link'
import brand from '../public/barnd.svg'
import Image  from 'next/image'
import styles from '../styles/Home.module.css'
import ThemeChanger from './Themechanger'
import { useTheme } from 'next-themes'
import {MoonIcon,SunIcon} from '@heroicons/react/solid'
import {useState,useEffect} from 'react'

function Navbar() {

    // const [mounted,setMounted] = useState(false)

    // useEffect(()=>{
    //     setMounted(true)
    // },[])

    // const {systemTheme,theme,setTheme } = useTheme()

    // const renderThemeChanger = () =>{
    //     const currentTheme = theme ==='system' ? systemTheme : theme;
    //     if(currentTheme==='dark'){
    //         console.log('click1');
    //         return(
    //             <SunIcon className='w-25 h-25' role='button' onClick={()=>setTheme('light')}/>
    //         )      
    //     }else{
    //         console.log('click2');
    //         return(
    //             <MoonIcon className='w-25 h-25' role='button' onClick={()=>setTheme('dark')}/>
    //         )
    //     }
    // }

  return (
   <>
   {/* <ChangBackground> */}
    <nav className={`navbar navbar-expand-lg ${styles.bgNav}  navbar-light`} >
        <Link className="navbar-brand h1" href="/">
            <a>
                <Image src={brand} alt="brand" className='w-50 h-50' />
            </a>
        </Link>
        <div>
        <ThemeChanger/>
        {/* {renderThemeChanger()} */}
        </div>
    </nav>
   {/* </ChangBackground> */}
   </>
  )
}

export default Navbar