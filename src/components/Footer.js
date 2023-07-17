import React from 'react'
import "../components/Footer.css"

function Footer() {
    return (
        <div className='footer-container'>
            <center>
                <ul>
                <li>
            <div className='text-footer'> <a href="https://www.linkedin.com/in/tristan-ray-73745b253/"> <i class="fa-brands fa-linkedin fa-3x"/> 
             </a> </div> </li>

            <li>
            <div className='text-footer'> <a href="https://github.com/tjray3403"> <i class="fa-brands fa-github fa-3x"/> 
             </a> </div></li>

             <li>
             <div className='text-footer'> <a href="https://replit.com/@Tj3403"> <i class="fa-regular fa-folder-open fa-3x"></i>
             </a> </div></li>
               
                </ul></center>
        </div>
    )
}

export default Footer;