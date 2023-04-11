import "./un.css";
import logo2 from "./logo2.png";
const UpNavBar = () => {
  return <nav
  className="navbar navbar-expand-lg navbar-light bg-light"
  style={{ height: "10vh", paddingBottom: 5,zIndex:"100",top:"0" }}
>
  <div className="container-fluid">
    <a className="navbar-brand" href="#1">
      <img src={logo2} style={{ height: 40 }} alt="hi"/>
      <span
        style={{ fontWeight: "bold", fontSize: "1.6rem", marginLeft: "1rem" }}
      >
        CipherSchools
      </span>
    </a>
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown" style={{ marginLeft: 20 }}>
        <div
          className="nav-link dropdown-toggle active"
          href="#2"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bx bx-compass nav_icon" />
          Browse
        </div>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="#1">
              App Development
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#2">
              Web Development
            </a>
          </li>
          {/* <li><hr class="dropdown-divider"></li> */}
          <li>
            <a className="dropdown-item" href="#3">
              Game Development
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#4">
              Data Structures
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#5">
              Programming
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#5">
              Machine Learning
            </a>
          </li>
        </ul>
      </li>
    </ul>
         <span style={{marginTop:"1.02%",marginLeft:"1%"}}> <i className="bx bx-search-alt-2" /></span>
    <div className="search" style={{}}>
      <form className="d-flex" style={{ marginLeft: 20 }}>
        {/* <button className="btn btn-outline" type="submit"> */}
        {/* </button> */}
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search and learn"
          aria-label="Search"
          style={{
            width: 260,
            border: 0,
            borderRadius: "10%",
            backgroundColor: "beige",
            padding:"10 0 10 0",
            height:"40px"
          }}
        />
        <i
          className="bx bx-filter nav_icon"
          style={{ marginTop: 10, marginLeft: 0 }}
        />
      </form>
    </div>
    <div className="d-flex">
      <a className="nav-link" href="#3" style={{ marginLeft: 20 }}>
        <i className="bx bx-user" style={{ color: "black" }} />
      </a>
      <a className="nav-link" href="#3">
        <i className="bx bxs-bell" style={{ color: "black" }} />
      </a>
    </div>
    {/* </div> */}
  </div>
</nav>
}
export default UpNavBar;
