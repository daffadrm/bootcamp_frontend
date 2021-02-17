import React, {Component} from 'react'
import Student from './Student'
import studentData from './StudentData'
import './ListStudent.css'
// import { tumblrSquare } from 'react-icons-kit/fa'


export default class ListStudent extends Component {
    state= {
        students: [],
        search :"",
        select :"",
        isSelected: false
    }
    componentDidMount(){
        this.setState({
            students:studentData
        })
    }
    // setiap kali user input keyboard, maka value akan di simpan di state search
    onHandleChange=(e)=>{
        this.setState({
            search : e.target.value,
            isSelected : false
        })
        console.log(this.state.search);

    }
    onHandleSelect=(e)=>{
        //tenary operation
        const value = e.target.selectedIndex !==0 ? e.target.options[e.target.selectedIndex].value : null;
        console.log(value);
        if(value !== null){
            this.setState({
                select : value,
                isSelected : true
            })
        }
    }

    render() {
        const {students,select,search, isSelected} = this.state;
        return (
        <>
            <div>
                <input placeholder="Search Student..." value={search} onChange={this.onHandleChange}/>
                <select value = {select} onChange = {this.onHandleSelect}>
                    <option value="">Filter By</option>
                    <option value="NAMA">Nama</option>
                    <option value="IPK">Ipk</option>
                    <option value="KOTA">Kota</option>
                </select>

            </div>
            <div className="student">
             { 
                !isSelected ? (
                    students
                .filter(f=> f.NAMA.toLowerCase().includes(search.toLowerCase()))
                .map(value => {
                    return( <Student
                        NIM={value.NIM}
                        NAMA={value.NAMA}
                        IPK={value.IPK}
                        KOTA={value.KOTA}
                        foto={value.foto}
                    />)
                }) )

                :
                (students
                .sort((a,b) => {
                    if(select === "NAMA"){
                        return (''+a.NAMA).localeCompare(b.NAMA);
                    }
                    if(select === "IPK"){
                        return b.IPK - a.IPK;
                    }
                    if(select === "KOTA"){
                        return (''+a.KOTA).localeCompare(b.KOTA);
                }
                })
                .map(value => {
                        return( <Student
                            NIM={value.NIM}
                            NAMA={value.NAMA}
                            IPK={value.IPK}
                            KOTA={value.KOTA}
                            foto={value.foto}
                        />
                        )
                    }) 
                )
                }

            </div>
        </>
        )
     }
 }
        // )
        // const gallery = studentData.map((student) => {
        //     return (
        //         <Student
        //             nim={student.nim}
        //             name={student.name}
        //             ipk={student.ipk}
        //             kota={student.kota}
        //             poster={student.poster_path}
        //         />
        //     );
        // });
//         return <div className="student">{gallery}</div>
//     }
// }
