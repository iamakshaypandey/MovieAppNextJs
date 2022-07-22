import Link from 'next/link'
import brand from '../public/barnd.svg'
import dark from '../public/dark.svg'
import light from '../public/light.svg'
import Image  from 'next/image'
import styles from '../styles/Home.module.css'
// import useDarkMode from './useDarkMode'

import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
      super(props)
      this.state = {
         theme: typeof window !== "undefined" ? localStorage.theme : "dark"
      }
    }

    setTheme = ()=>{
      const colorTheme = this.state.theme === "dark" ? "light" : "dark";
      // console.log('this is settheme',this.state.theme);
      return colorTheme
    }

    changeTheme = ()=>{
      const root = document.body;
      root.classList.remove(this.setTheme());
      root.classList.add(this.state.theme);
    }

    componentDidMount(){
      this.changeTheme()
    }
    
    componentDidUpdate(){
      this.changeTheme()
  
    if (typeof window !== "undefined") {
      localStorage.setItem("theme",this.state.theme);
      }
    }
    
  render() {
    return (
      <>
      <nav className={`navbar ${styles.bgNav} position-sticky top-0`} >
        <Link className="navbar-brand h1" href="/">
            <a>
                <Image src={brand} alt="brand" className='w-50 h-50' />
            </a>
        </Link>
        <div className=''>
          {console.log(this.setTheme())}
            {this.setTheme() === "light" ? (
                <Image  src={light} width={50} height={50} onClick={() => this.setState({theme:this.setTheme()})}>
                </Image>
            ) : (
                <Image  src={dark} width={50} height={50} onClick={() => this.setState({theme:this.setTheme()})}>  
                </Image>
            )}     
        </div>
    </nav>
      </>
    )
  }
}



