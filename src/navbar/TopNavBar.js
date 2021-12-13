import './TopNavBar.css'

export default function TopNavBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-github"></i>
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">Home</li>
              <li className="topListItem">Projects</li>
              <li className="topListItem">Blogs</li>
          </ul>
      </div>
      <div className="topRight">
          <img className="topImage"></img>
          <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
