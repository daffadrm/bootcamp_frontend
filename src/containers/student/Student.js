import React from 'react'
import './Student.css'
import {Link} from 'react-router-dom';
import { alignCenter } from 'react-icons-kit/fa';


const Student = (props)=> {
    const handleUpVote1 = (nim) => {
        props.onLike(nim);
    };
    return (
        <div className="kartu" style={{backgroundImage: `url(images/${props.foto})`}}>
            <Link to ="/student">
                <div className = "siswa">
                    NIM : {props.NIM}<br></br>
                    NAMA : {props.NAMA}<br></br>
                    IPK : {props.IPK}<br></br>
                    KOTA : {props.KOTA}<br></br>
                    VOTE : {props.VOTE}<br></br>
                    SKILL : {props.SKILL}<br></br>
                </div>
                </Link> 
                <alignCenter>
                    <button onClick={()=>handleUpVote1(props.NIM)} >Vote
                    </button>
                </alignCenter>
        </div>
            
    )
}
export default Student;