import Banner from '../others/banner';
import About from '../others/aboutme';
import Cipher from '../others/cipher';
import OnWeb from '../others/onweb';
import Password from '../others/password';
import Professional from '../others/professional';
import Interests from '../others/interest';

import './ln.css';
const LNavBar=()=>{
    const clickHandler=()=>{
        document.getElementById("header-toggle").classList.toggle('bx-x')
        document.getElementById("nav-bar").classList.toggle('show')
        document.getElementById("body-pd").classList.toggle('body-pd')
        document.getElementById("header").classList.toggle('body-pd')
    }
    
    const linkColour = document.querySelectorAll('.nav_link');
    const linkColor=()=>{
        if(linkColour){
            linkColour.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }

    }
    linkColour.forEach(l=> l.addEventListener('click', linkColor))
    return <>
    <div id="body-pd" >
  <header className="header" id="header" style={{paddingLeft:"22px"}}>
    <div className="header_toggle">
      <i className="bx bx-menu" id="header-toggle"  style={{color:"black"}} onClick={clickHandler}/>
    </div>
  </header>
  <div className="l-navbar" id="nav-bar">
    <nav className="nav">
      <div className="nav_list">
        <a href="#2" className="nav_link active">
          <i className="bx bxs-home nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Home</span>
        </a>
        <a href="#1" className="nav_link">
          <i
            className="bx bxs-book-content nav_icon"
            style={{ color: "black" }}
          />
          <span className="nav_name">Courses</span>
        </a>
        <a href="#1" className="nav_link">
          <i
            className="bx bx-trending-up nav_icon"
            style={{ color: "black" }}
          />
          <span className="nav_name">Trending</span>
        </a>
        <a href="#1" className="nav_link">
          <i
            className="bx bxs-user-account nav_icon"
            style={{ color: "black" }}
          />
          <span className="nav_name">Following</span>
        </a>
        <a href="#1" className="nav_link">
          <i className="bx bxs-dashboard nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Dashboard</span>
        </a>
        <a href="#1" className="nav_link">
          <i className="bx bxl-discord nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Discord</span>
        </a>
        <a href="#2" className="nav_link">
          <i className="bx bxs-copy-alt nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Feedback</span>
        </a>
        <a href="#2" className="nav_link">
          <i className="bx bxs-copyright nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Creator access</span>
        </a>
        <a href="#3" className="nav_link">
          <i className="bx bx-sitemap nav_icon" style={{ color: "black" }} />
          <span className="nav_name">Tour</span>
        </a>
      </div>
      <a href="#3" className="nav_link">
        <i className="bx bx-log-out nav_icon" style={{ color: "black" }} />
        <span className="nav_name">SignOut</span>
      </a>
    </nav>
  </div>
  {/*Container Main start*/}
  <div className="height-100 bg-light back">
    {/* <h4>Main Components</h4> */}
    <Banner/>
    
    <div className='my-details'>
    <About/>
    <Cipher/>
    <OnWeb/>
    <Professional/>
    <Password/>
    <Interests/>

    </div>

  </div>
</div>

    </>
}

export default LNavBar