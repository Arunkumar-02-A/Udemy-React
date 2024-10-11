

function Navbar() {
  return (
    <div className="Navbar">

      <div className="Navbar-1">
        <h1>Udemy</h1>
      </div>

      <div className="Navbar-2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for anything here. Tech, Business, Art ....." />
      </div>

      <div className="Navbar-3">
        <p>Courses</p>
        <div className="Learning">
          <p>My Learning</p>
          <div className="Learning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <p><i className="fa-solid fa-cart-shopping"></i></p>
        <p><i className="fa-solid fa-bell"></i></p>
        <p><i className="fa-solid fa-user"></i></p>
      </div>

      <div className="Navbar-4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>

  );
}

export default Navbar