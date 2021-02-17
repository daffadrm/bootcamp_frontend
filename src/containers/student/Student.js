import React from 'react'
import './Student.css'
import {Link} from 'react-router-dom';
import { alignCenter } from 'react-icons-kit/fa';


const Student = (props)=> {
    return (
        <div className="kartu" style={{backgroundImage: `url(images/${props.foto})`}}>
            <Link to ="/student">
                <div className = "siswa">
                    NIM : {props.NIM}<br></br>
                    NAMA : {props.NAMA}<br></br>
                    IPK : {props.IPK}<br></br>
                    KOTA : {props.KOTA}<br></br>
                    VOTE : {props.VOTE}<br></br>
                </div>
                </Link> 
                <alignCenter>
                    <button> Vote </button>
                </alignCenter>
        </div>
            
    )
}
export default Student;