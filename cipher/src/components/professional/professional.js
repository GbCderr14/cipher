import './professional.css';
import { useState, useEffect } from 'react';

const Professional = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [education, setEducation] = useState(props.education || 'Graduation');
  const [position, setPosition] = useState(props.position || 'Student');

  useEffect(() => {
    if (props.education === 'Graduation') {
      setEducation('Graduation');
    } else if (props.education === 'Post Graduation') {
      setEducation('Post Graduation');
    } else if (props.education === 'Phd') {
      setEducation('Phd');
    } else if (props.education === 'Other') {
      setEducation('Other');
    }

    if (props.position === 'Student') {
      setPosition('Student');
    } else if (props.position === 'Working Professional') {
      setPosition('Working Professional');
    } else if (props.position === 'Other') {
      setPosition('Other');
    }
  }, [props.education, props.position]);

  const clickHandler = async() => {
    if(isDisabled===true){
      setIsDisabled(false);
  }
  else{
    setIsDisabled(true);
          const formData=
          {
            "highestEducation":education,
            "currentPosition":position
          }
          const token=localStorage.getItem('token');
          await fetch("http://localhost:5000/api/v1/auth/updatedetails", {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              "authorization":`Bearer ${token}`
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
    }
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="onweb">
      <div className="firstline">
        <h4>Professional Information</h4>
        <button className="edit" onClick={clickHandler}>
          {isDisabled ? 'Edit' : 'Save'}
        </button>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h6>Highest Education</h6>
          <select className="webb" value={education} onChange={handleEducationChange} disabled={isDisabled}>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Phd">Phd</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h6>What do you do currently?</h6>
          <select className="webb" value={position} onChange={handlePositionChange} disabled={isDisabled}>
            <option value="Student">Student</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Professional;
