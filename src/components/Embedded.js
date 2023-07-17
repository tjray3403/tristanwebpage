import React from 'react';
import '../App.css';
import './Embedded.css';
import file from '../files/RESUME_TristanRay.pdf';

function Embedded() {
    return (
        <div className='e-container'>
            <center>
        <embed src ={file} type="application/pdf" width="80%" height="550px"/>
        </center>
        </div>
    )
}

export default Embedded