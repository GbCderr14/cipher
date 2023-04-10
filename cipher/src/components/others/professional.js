import './professional.css';
const Professional=()=>{
    return <>
    <div className="onweb">
        <div className="firstline">
    <h4>Professional Information</h4>
    <button className="edit">Edit</button>
    </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Highest Education</h6>
            <input type="text" className="web" placeholder='Graduation'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>What do you do currently?</h6>
            <input type="text" className="web" placeholder="Student"/>
        </div>
      </div>
    </div>   
    </>
}

export default Professional;