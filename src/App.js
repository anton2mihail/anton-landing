import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useExternalScripts from "./hooks/useExternalScripts"
import { Navbar, Button, Nav, Spinner } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className="loader bg-dark">
        <Spinner animation="grow" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>

      <div id="top"></div>


      <Navbar bg="white" expand="lg" fixed="top" variant="dark" className="site-navbar-transparent shadow-light p-lg-4" data-navbar-base="navbar-dark" data-navbar-toggled="navbar-light" data-navbar-scrolled="navbar-light">
        <Navbar.Brand href="#">
          <img src="assets/images/logo.png" className="navbar-brand-img" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" className="navbar-toggler-alternative">
          <span className="navbar-toggler-alternative-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ml-auto" id="navigation">
            <Nav.Link href="#home" className="nav-item active" data-menuanchor="home">Home</Nav.Link>
            <Nav.Link href="#our-mission" className="nav-item" data-menuanchor="our-mission">Our mission</Nav.Link>
            <Nav.Link href="#what-we-do" className="nav-item" data-menuanchor="what-we-do">What we do</Nav.Link>
            <Nav.Link href="#our-solutions" className="nav-item" data-menuanchor="our-solutions">Our solutions</Nav.Link>
            <Nav.Link href="#our-work" className="nav-item" data-menuanchor="our-work">Our work</Nav.Link>
            <Nav.Link href="#contact" className="nav-item" data-menuanchor="contact">Contact</Nav.Link>
          </Nav>
          <Button variant="soft-white" className="btn btn-soft-white d-block d-lg-none d-xl-inline-block mb-3 mb-lg-0 ml-lg-3 w-100 w-lg-auto" data-toggle="modal" data-target="#documentationModal" data-on-navbar-light="btn-soft-secondary" data-on-navbar-dark="btn-soft-white">Documentation</Button>
          <Button variant="primary" href="!#" className="btn btn-primary d-block d-lg-inline-block ml-lg-3">Buy now</Button>
        </Navbar.Collapse>
      </Navbar>


      <a href="#top" className="backtotop">
        <span>Back To Top</span>
        <i className="fas fa-angle-up"></i>
      </a>


      <div className="scroll-progress">
        <div className="sp-left">
          <div className="sp-inner"></div>
          <div className="sp-inner progress"></div>
        </div>
        <div className="sp-right">
          <div className="sp-inner"></div>
          <div className="sp-inner progress"></div>
        </div>
      </div>


      <div className="ln-fullpage" data-navigation="true">


        <section className="ln-section d-flex min-vh-100" data-anchor="home" data-tooltip="Home" data-overlay-color="#00050e" data-overlay-opacity="50">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-10.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-70"></div>
          </div>
          <Container className="align-self-center text-center text-white">
            <Row>
              <Col md={12} xl={9} className="mx-auto">
                <h1 className="mb-4 animated" data-animation="fadeInUp">We bulid beautiful digital experiences</h1>
                <p className="mb-7 animated" data-animation="fadeInUp" data-animation-delay="200">A beautiful and easy to use template that lets you create the perfect website for your future agency or business.</p>
                <Button href="#our-mission" variant="primary" className="mr-3 scrollto animated" data-animation="fadeInUp" data-animation-delay="400">Learn more</Button>
                <Button variant="light" className="scrollto animated" data-animation="fadeInUp" data-animation-delay="600" data-toggle="modal" data-target="#subscribeModal">Subscribe</Button>
              </Col>
            </Row>
          </Container>
        </section>


        <section className="ln-section d-xl-flex" data-anchor="our-mission" data-tooltip="Our mission" data-overlay-color="#00050e" data-overlay-opacity="90">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-7.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-70"></div>
          </div>
          <div className="container align-self-xl-center">

            <div className="row">
              <div className="col-12 col-lg-10 mx-lg-auto text-center">
                <h2 className="text-white mb-4 animated" data-animation="fadeInUp" data-animation-delay="150">Our Mission</h2>
                <p className="text-white animated" data-animation="fadeInUp" data-animation-delay="150">Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut interdum nibh sit amet imperdiet condimentum. Nulla sed tellus placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra porta libero, a sagittis nisl tristique non. Etiam sapien purus, cursus eu pulvinar et, tempor sit amet ipsum. Sed a nisl sit amet lorem dictum hendrerit.</p>
              </div>
            </div>

          </div>
        </section>


        <section className="ln-section d-xl-flex" data-anchor="what-we-do" data-tooltip="What we do" data-overlay-color="#2d5aec" data-overlay-opacity="90">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-2.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-50"></div>
          </div>
          <div className="container align-self-xl-center text-white">

            <div className="row">
              <div className="col-12 col-xl-5 mb-8 mb-xl-0">
                <h2 className="animated mb-4" data-animation="fadeInUp">What we Do</h2>
                <p className="animated" data-animation="fadeInUp" data-animation-delay="150"><span>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus. Pellentesque tempus ultricies nisi at cursus. Nulla at nisi tellus. Suspendisse potenti.</span></p>
              </div>
              <div className="col-12 col-xl-6 offset-xl-1">
                <div className="row">

                  <div className="col-md-6 col-sm-6 mb-8 animated" data-animation="fadeInUp">
                    <div className="icon-7x mb-4">
                      <i className="ti-timer"></i>
                    </div>
                    <h3 className="h4 mb-0">Launch Quickly</h3>
                  </div>

                  <div className="col-md-6 col-sm-6 mb-8 animated" data-animation="fadeInUp" data-animation-delay="150">
                    <div className="icon-7x mb-4">
                      <i className="ti-brush-alt"></i>
                    </div>
                    <h3 className="h4 mb-0">Stylish Design</h3>
                  </div>

                  <div className="col-md-6 col-sm-6 mb-8 animated" data-animation="fadeInUp" data-animation-delay="300">
                    <div className="icon-7x mb-4">
                      <i className="ti-book"></i>
                    </div>
                    <h3 className="h4 mb-0">Well Documented</h3>
                  </div>

                  <div className="col-md-6 col-sm-6 mb-8 animated" data-animation="fadeInUp" data-animation-delay="450">
                    <div className="icon-7x mb-4">
                      <i className="ti-layers"></i>
                    </div>
                    <h3 className="h4 mb-0">Multiple Styles</h3>
                  </div>

                  <div className="col-md-6 col-sm-6 mb-8 mb-sm-0 animated" data-animation="fadeInUp" data-animation-delay="600">
                    <div className="icon-7x mb-4">
                      <i className="ti-settings"></i>
                    </div>
                    <h3 className="h4 mb-0">Fully Customizable</h3>
                  </div>

                  <div className="col-md-6 col-sm-6 animated" data-animation="fadeInUp" data-animation-delay="750">
                    <div className="icon-7x mb-4">
                      <i className="ti-headphone-alt"></i>
                    </div>
                    <h3 className="h4 mb-0">Friendly Support</h3>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="ln-section d-xl-flex" data-anchor="our-solutions" data-tooltip="Our solutions" data-overlay-color="#00050e" data-overlay-opacity="90">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-3.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-70"></div>
          </div>
          <div className="container align-self-xl-center text-white">
            <div className="row mb-8">
              <div className="col-12 col-xl-9">
                <h2 className="mb-4 animated" data-animation="fadeInUp">A complete marketing solution</h2>
                <p className="animated" data-animation="fadeInUp" data-animation-delay="150">Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut interdum nibh sit amet imperdiet condimentum. Nulla sed tellus placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra porta libero, a sagittis nisl tristique non.</p>
              </div>
            </div>
            <div className="row">

              <div className="col-12 col-lg-6 mb-8 animated" data-animation="fadeInUp" data-animation-delay="150">
                <h4>We are</h4>
                <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
              </div>

              <div className="col-12 col-lg-6 mb-8 animated" data-animation="fadeInUp" data-animation-delay="300">
                <h4>We practice</h4>
                <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
              </div>

              <div className="col-12 col-lg-6 mb-8 mb-lg-0 animated" data-animation="fadeInUp" data-animation-delay="450">
                <h4>We deliver</h4>
                <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
              </div>

              <div className="col-12 col-lg-6 animated" data-animation="fadeInUp" data-animation-delay="600">
                <h4>We create and innovate</h4>
                <p className="mb-0">Quisque ultrices non velit sit amet consectetur. Cras turpis dolor, facilisis a nibh non, ullamcorper facilisis mauris. Nulla rutrum arcu sed ligula malesuada, quis condimentum eros sollicitudin. Morbi eget lorem turpis. Maecenas id metus sapien. Aliquam et est turpis. Sed sit amet dui vel sapien sagittis pellentesque nec id sem.</p>
              </div>

            </div>
          </div>
        </section>


        <section className="ln-section d-xl-flex" data-anchor="our-work" data-tooltip="Our work" data-overlay-color="#00050e" data-overlay-opacity="80">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-13.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-50"></div>
          </div>
          <div className="container align-self-xl-center text-white ">
            <div className="row mb-8">
              <div className="col-12 col-xl-8">
                <h2 className="mb-4 animated" data-animation="fadeInUp">Our Work</h2>
                <p className="animated" data-animation="fadeInUp" data-animation-delay="150">Donec sollicitudin libero vitae massa placerat tempor. Duis rutrum nisl eu ipsum varius, nec feugiat tortor vulputate. Integer pellentesque leo id metus dictum, a tristique tellus faucibus.</p>
              </div>
            </div>
            <div className="slider dots-light animated" data-animation="fadeInUp" data-animation-delay="300" data-slick='{"dots": true}'>

              <div>
                <div className="portfolio-item mb-8">
                  <div className="row">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                      <div className="item-media">
                        <a href="assets/images/portfolio/project-6.jpg" className="mfp-image">
                          <div className="media-container">
                            <div className="bg-image-holder bg-cover">
                              <img src="assets/images/portfolio/project-6-min.jpg" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="pt-lg-8">
                        <div className="divider divider-alt bg-white mt-0 mb-8 d-none d-lg-block"></div>
                        <h4 className="h3">Mountains</h4>
                        <p className="text-italic">Web Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="portfolio-item mb-8">
                  <div className="row flex-lg-row-reverse">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                      <div className="item-media">
                        <a href="assets/images/portfolio/project-1.jpg" className="mfp-image">
                          <div className="media-container">
                            <div className="bg-image-holder bg-cover">
                              <img src="assets/images/portfolio/project-1-min.jpg" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 d-lg-flex justify-content-lg-end text-lg-right">
                      <div className="pt-lg-8">
                        <div className="divider divider-alt bg-white mt-0 mb-8 ml-auto mr-0 d-none d-lg-block"></div>
                        <h4 className="h3">Love</h4>
                        <p className="text-italic">Web Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="portfolio-item mb-8">
                  <div className="row">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                      <div className="item-media">
                        <a href="assets/images/portfolio/project-2.jpg" className="mfp-image">
                          <div className="media-container">
                            <div className="bg-image-holder bg-cover">
                              <img src="assets/images/portfolio/project-2-min.jpg" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="pt-lg-8">
                        <div className="divider divider-alt bg-white mt-0 mb-8 d-none d-lg-block"></div>
                        <h4 className="h3">Beautiful Girl</h4>
                        <p className="text-italic">Brand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="portfolio-item mb-8">
                  <div className="row flex-lg-row-reverse">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                      <div className="item-media">
                        <a href="assets/images/portfolio/project-3.jpg" className="mfp-image">
                          <div className="media-container">
                            <div className="bg-image-holder bg-cover">
                              <img src="assets/images/portfolio/project-3-min.jpg" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 d-lg-flex justify-content-lg-end text-lg-right">
                      <div className="pt-lg-8">
                        <div className="divider divider-alt bg-white mt-0 mb-8 ml-auto mr-0 d-none d-lg-block"></div>
                        <h4 className="h3">Future City</h4>
                        <p className="text-italic">Web Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="portfolio-item">
                  <div className="row">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0">
                      <div className="item-media">
                        <a href="assets/images/portfolio/project-4.jpg" className="mfp-image">
                          <div className="media-container">
                            <div className="bg-image-holder bg-cover">
                              <img src="assets/images/portfolio/project-4-min.jpg" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="pt-lg-8">
                        <div className="divider divider-alt bg-white mt-0 mb-8 d-none d-lg-block"></div>
                        <h4 className="h3">Golden Gate Bridge</h4>
                        <p className="text-italic">Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="ln-section d-xl-flex" data-anchor="contact" data-tooltip="Contact" data-overlay-color="#00050e" data-overlay-opacity="90">
          <div className="overlay overlay-advanced">
            <div className="overlay-inner bg-image-holder bg-cover">
              <img src="assets/images/image-14.jpg" alt="background" />
            </div>
            <div className="overlay-inner bg-dark opacity-50"></div>
          </div>
          <div className="container align-self-center text-white">
            <div className="row mb-7">
              <div className="col-12 col-xl-6">
                <h2 className="mb-4 animated" data-animation="fadeInUp">Contact Us</h2>
                <p className="animated" data-animation="fadeInUp" data-animation-delay="150">Want to say hello? Want to know more about us? Give us a call or drop us an email and we will get back to you as soon as we can.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5 mb-8 mb-lg-0">
                <div className="row">

                  <div className="col-12 col-md-4 col-lg-6 mb-8 mb-md-0 mb-lg-5 animated" data-animation="fadeInUp" data-animation-delay="150">
                    <div className="icon-5x mb-4">
                      <i className="ti-mobile"></i>
                    </div>
                    <p className="mb-0">(0091) 1111 1234567<br />
                      (084) 2222 1234567</p>
                  </div>

                  <div className="col-12 col-md-4 col-lg-6 mb-8 mb-md-0 mb-lg-5 animated" data-animation="fadeInUp" data-animation-delay="150">
                    <div className="icon-5x mb-4">
                      <i className="ti-location-pin"></i>
                    </div>
                    <p className="mb-0">69 Halsey St, New York, Ny 10002,<br />
                      United States</p>
                  </div>

                  <div className="col-12 col-md-4 col-lg-6 animated" data-animation="fadeInUp" data-animation-delay="150">
                    <div className="icon-5x mb-4">
                      <i className="ti-email"></i>
                    </div>
                    <p className="mb-0"><a href="mailto:support@example.com" className="text-white">support@example.com</a><br />
                      <a href="mailto:hello@example.com" className="text-white">hello@example.com</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      <footer className="position-relative py-10 py-lg-12 bg-dark text-gray-500">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-12 col-xxl-10 mx-auto text-center">
              <ul className="list-inline mb-5">
                <li className="list-inline-item mx-0">
                  <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                    <i className="fab fa-facebook-f btn-icon-inner"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                    <i className="fab fa-twitter btn-icon-inner"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                    <i className="fab fa-linkedin-in btn-icon-inner"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a className="btn btn-icon btn-text-secondary text-gray-400" href="#" tabIndex="0">
                    <i className="fab fa-dribbble btn-icon-inner"></i>
                  </a>
                </li>
              </ul>
              <p className="mb-0">© 2020 Lana - All Rights Reserved - <a href="#!" className="text-gray-400">Terms of Service</a></p>
            </div>
          </div>
        </div>
      </footer>


      <nav className="ln-social-icons">
        <ul className="mx-auto">
          <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#!"><i className="fab fa-pinterest"></i></a></li>
        </ul>
      </nav>


      <div className="ln-copyright text-right">
        <p>© 2020 Lana - All Rights Reserved - <a href="#!">Terms of Service</a></p>
      </div>


      <div className="modal fade" id="documentationModal" tabIndex="-1" role="dialog" aria-labelledby="documentation" aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered" role="document">
          <div className="modal-content hover-parent">


            <button type="button" className="btn btn-sm btn-icon btn-primary position-absolute top-0 right-0 mt-n3 mr-n3 zindex-1" data-dismiss="modal" aria-hidden="true">
              <i className="fas fa-times btn-icon-inner"></i>
            </button>


            <div className="modal-body py-5 py-lg-8 px-5 px-lg-8 text-center">

              <div className="icon icon-boxed icon-7x rounded bg-soft-primary text-primary mb-8">
                <i className="ti-book"></i>
              </div>
              <h2 id="documentation" className="mb-3">Documentation</h2>
              <p className="mb-8">This theme is easy to configure and comes witch a well documented help file, which will assist you in the configuration of your new website in few minutes.</p>

              <a className="btn btn-primary d-block d-lg-inline-block" href="!#">Buy theme</a>

            </div>

          </div>
        </div>
      </div>


      <div className="modal fade" id="subscribeModal" tabIndex="-1" role="dialog" aria-labelledby="subscribeNewsletter" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content hover-parent">


            <button type="button" className="btn btn-sm btn-icon btn-white position-absolute top-0 right-0 mt-n3 mr-n3 zindex-1" data-dismiss="modal" aria-hidden="true">
              <i className="fas fa-times btn-icon-inner"></i>
            </button>


            <div className="overlay overlay-advanced">
              <div className="overlay-inner bg-cover" style={{ backgroundImage: './assets/images/image-12.jpg' }}></div>
              <div className="overlay-inner bg-primary opacity-70 hover-opacity-80"></div>
              <div className="overlay-inner bg-gradient-v-transparent-dark opacity-90 hover-opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
