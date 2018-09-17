import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../../constants';

const rows = (students, self)=>{
  return students.map((student, index)=>{
    let html = <tr key={student._id.$oid}><td>{(index+1)}</td><td>{student.name}</td><td>{student.dob}</td><td>{student.regno}</td>
    <td>{student.english}</td><td>{student.maths}</td><td>{student.physics}</td>
    <td>{student.chemistry}</td><td>{student.biology}</td><td>{student.total}</td><td>{student.rank}</td>
    <td>
      <Link className="btn btn-sm btn-warning" to={"/students/"+student._id.$oid}><span className="fa fa-pencil"></span></Link>
      <button className="btn btn-sm btn-danger" type="button" onClick={(ev)=>self.handleDelete(ev, student)}><span className="fa fa-trash"></span></button>
      </td></tr>;
    return html;
  })
}

const removeStudent = (studentId) => {
  const url = API.url + 'students/'+studentId+'?' + API.key;
 return fetch(url, {method:'DELETE'}).then(
    (response) => response.json()
  ).then(
    (response) => response
  ).catch(
    (err) => console.log(err)
  )
}

class StudentView extends Component {
  constructor() {
    super();
    this.state = { students: [] };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const url = API.url + 'students?' + API.key;
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ students: response }))
      .catch(err => console.log(err))
  }
  handleDelete(ev, student){
   const confirmDelete = window.confirm("Are you sure, you want to delete  "+ student.name);
   if(confirmDelete){
     removeStudent(student._id.$oid).then(
       (response) => window.location.reload()
     )
   }
  }
  render() {
    return (
      <div className="container">
        <div className="row students">
          <div className="col-sm-12">
            <Link className="btn btn-primary float-right my-2" to="/student-create">Create</Link>
          </div>
          <div className="col-sm-12">
            <table className="table table-striped table-bordered" id="studentsTable">
              <thead>
                <tr>
                  <th rowSpan="2">S.No</th>
                  <th rowSpan="2">Name</th>
                  <th rowSpan="2">DOB</th>
                  <th rowSpan="2">Reg No</th>
                  <th colSpan="5">Marks</th>
                  <th rowSpan="2">Total</th>
                  <th rowSpan="2">Rank</th>
                  <th rowSpan="2">Actions</th>
                </tr>
                <tr>
                  <th>English</th>
                  <th>Maths</th>
                  <th>Physics</th>
                  <th>Chemistry</th>
                  <th>Biology</th>
                </tr>
              </thead>
              <tbody>
                {rows(this.state.students, this)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentView;
