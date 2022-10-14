const CompHome = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Edukate - Online Education Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      <link href="img/favicon.ico" rel="icon" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="css/style.css" rel="stylesheet" />

      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-book-reader mr-3"></i>Pharmaceutica
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto py-0">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                Products
              </a>

              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Join Us
            </a>
          </div>
        </nav>
      </div>

      <div className="container-fluid py-5 col-lg-12">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Bienvenidos
                </h6>
                <h1 className="display-4">
                  First Choice For Online Education Anywhere
                </h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row pt-3 mx-0">
                <div className="col-6 px-0">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Products</span>
                    </h6>
                  </div>
                </div>
                <div className="col-6 px-0">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Manager</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                    <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                </div>
            </div>
        </div>
        <div className="owl-carousel courses-carousel">
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-1.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-2.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-3.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      <script src="js/main.js"></script>
    </>
  );
};

export default CompHome;
