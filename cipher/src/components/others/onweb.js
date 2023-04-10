import './onweb.css';

const OnWeb =()=>{
   
    return <>
    <div className="onweb">
        <div className="firstline">
    <h4>On The Web</h4>
    <button className="edit">Edit</button>
    </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Linkedin</h6>
            <input type="text" className="web" placeholder='linkedin'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Github</h6>
            <input type="text" className="web" placeholder="github" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Facebook</h6>
            <input type="text" className="web" placeholder='Facebook'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Twitter</h6>
            <input type="text" className="web" placeholder="twitter"/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Instagram</h6>
            <input type="text" className="web" placeholder='Instagram'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Website</h6>
            <input type="text" className="web" placeholder="website"/>
        </div>
      </div>
    </div>   
    
    </>
}

export default OnWeb;