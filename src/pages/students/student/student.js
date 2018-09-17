import React, { Component } from 'react';
import { API } from '../../../constants';

const getStudent = (studentId) => {
  const url = API.url + 'students/'+studentId+'?' + API.key;
  return fetch(url)
        .then(response => response.json())
        .then(response => response)
        .catch(err => err)
}

const post  = (student) =>{
  const url = API.url + 'students?' + API.key;
  const headers = {'Content-Type':'application/json'}
  return fetch(url, {method:"POST", body:JSON.stringify(student), headers:headers})
  .then((response)=> response.json())
  .then((response) => response)
  .catch((err) => console.log(err));
}

const put  = (student) =>{
  const url = API.url + 'students/'+student._id.$oid+'?' + API.key;
  const headers = {'Content-Type':'application/json'}
 return fetch(url, {method:"PUT", body:JSON.stringify(student), headers:headers})
  .then((response)=> response.json())
  .then((response) => response)
  .catch((err) => console.log(err));
}

class StudentCreateUpdate extends Component {
  constructor(){
    super();
    this.state = {_id:{$oid:null}, name:"", regno:"", dob:"", english:"", maths:"", physics:"", chemistry:"", biology:""}
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {

    const { id } = this.props.match.params;
    const temp = {_id:{$oid:id || ""}};
    if(id){
     getStudent(id).then(
       (response) => this.setState(response)
     );
    }
    this.setState(temp);

    
  }
  handleChange(event, field){
    const temp = {};
    temp[field] = event.target.value;
    this.setState(temp)
  }
  onSubmit(){
    const student = this.state;
    if(!student._id || !student._id.$oid){
      delete student._id;
      post(student).then(
        () => this.props.history.push('/students')
      );
      return;
    }
    put(student).then(
      () => this.props.history.push('/students')
    );
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <input type="hidden"         defaultValue={this.state._id.$oid}/>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name"  onChange={(event) =>this.handleChange(event, 'name')} value={this.state.name} className="form-control" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="regno">Reg no</label>
              <input type="text" id="regno" onChange={(event) =>this.handleChange(event, 'regno')} value={this.state.regno} className="form-control" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <input type="text" id="dob" onChange={(event) =>this.handleChange(event, 'dob')} value={this.state.dob} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="english">English</label>
              <input type="text" id="english" onChange={(event) =>this.handleChange(event, 'english')} value={this.state.english} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="maths">Maths</label>
              <input type="text" id="maths" onChange={(event) =>this.handleChange(event, 'maths')} value={this.state.maths} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="physics">Physics</label>
              <input type="text" id="physics" onChange={(event) =>this.handleChange(event, 'physics')} value={this.state.physics} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="chemistry">Chemistry</label>
              <input type="text" id="chemistry" onChange={(event) =>this.handleChange(event, 'chemistry')} value={this.state.chemistry} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="biology">Biology</label>
              <input type="text" id="biology"onChange={(event) =>this.handleChange(event, 'biology')} value={this.state.biology} className="form-control" />
            </div>
          </div>
          <div className="col-sm-2">
              <button className="btn btn-primary float-right mt-4" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentCreateUpdate;
