import React from 'react'


export default function Navbar(){
    return(
        
            <nav className='menu'>                                                    
                    <ul className='menu-lists'>                        
                        <img src= {require('./cati.png')} />
                        <li> <a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
            
    </nav>
        
    )
}