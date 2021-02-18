import {skills} from './../student/StudentData'
import _ from 'lodash';

function getStudentData(skillId){
    let studentSkill=[];
    for (let skillsiswa of skillId){
        studentSkill.push(_.find(skills,x=>  x.id_skills === skillsiswa).skills_name);
    }
    return studentSkill
}
export {getStudentData}