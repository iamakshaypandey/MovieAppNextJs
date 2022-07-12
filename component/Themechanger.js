// import { useTheme } from 'next-themes'
import { useState } from 'react'
import styled from 'styled-components'
import { darkMode } from '../tailwind.config'

const ThemeChanger = () => {
    //   const { theme, setTheme } = useTheme()
    const [theme,setTheme] = useState(undefined)
    function LightmodeFun(){  
        if(theme===undefined){
            const storeValue = localStorage.setItem('theme',false)
            setTheme(true)
        }else{
            setTheme(false)
        }
        const b =document.body.style.backgroundColor='red'
        console.log('lightmod',b);
    }
    function DarkModeFun(){  
        if(theme===undefined){
            const storeValue = localStorage.setItem('theme',false)
            setTheme(true)
        }else{
            setTheme(false)
        }
        console.log('dark mod');
        const b = document.body.style.backgroundColor='white'

        const ChangBackground = styled.body`background-color:green`
    }

  return (
    <div>
      {/* The current theme is: {theme} */}
      <button onClick={LightmodeFun}>Light Mode</button>
      <button onClick={DarkModeFun}>Dark Mode</button>
    </div>
  )
}

export default ThemeChanger