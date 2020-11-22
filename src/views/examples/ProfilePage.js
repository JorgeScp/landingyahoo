/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"
import classnames from "classnames"
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar"
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  CardImg,
  CardFooter,
  CardTitle,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap"

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js"
import Footer from "components/Footer/Footer.js"

const carouselItems = [
  {
    src: require("assets/img/tumblr1.png"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/tumblr2.png"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/tumblr3.png"),
    altText: "Slide 3",
    caption: "",
  },
]

const carouselItems2 = [
  {
    src: require("assets/img/yahooanw1.png"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/yahooanw2.png"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/yahooanw3.png"),
    altText: "Slide 3",
    caption: "",
  },
]

const carouselItems3 = [
  {
    src: require("assets/img/yahooemail1.png"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/yahooemail2.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/yahooemail3.jpg"),
    altText: "Slide 3",
    caption: "",
  },
]

let ps = null

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: 1,
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on"
      document.documentElement.classList.remove("perfect-scrollbar-off")
      let tables = document.querySelectorAll(".table-responsive")
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
    document.body.classList.toggle("profile-page")
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy()
      document.documentElement.className += " perfect-scrollbar-off"
      document.documentElement.classList.remove("perfect-scrollbar-on")
    }
    document.body.classList.toggle("profile-page")
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault()
    this.setState({
      [stateName]: index,
    })
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="align-items-center">
            <h1 className="title">Conoce Nuestras Plataformas</h1>
          </div>
          {/* <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <div className="align-items-center">
              <h1 className="title">Conoce Nuestras Plataformas</h1>
            </div>

            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Mike Scheinder</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    Offices parties lasting outward nothing age few resolve.
                    Impression to discretion understood to we interested he
                    excellence. Him remarkably use projection collecting. Going
                    about eat forty world has round miles.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href="https://dribbble.com/creativetim"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">Transactions</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Wallet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Send
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            News
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">COIN</th>
                                <th className="header">AMOUNT</th>
                                <th className="header">VALUE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>BTC</td>
                                <td>7.342</td>
                                <td>48,870.75 USD</td>
                              </tr>
                              <tr>
                                <td>ETH</td>
                                <td>30.737</td>
                                <td>64,53.30 USD</td>
                              </tr>
                              <tr>
                                <td>XRP</td>
                                <td>19.242</td>
                                <td>18,354.96 USD</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Label sm="3">Pay to</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input
                                  placeholder="e.g. 1Nasd92348hU984353hfid"
                                  type="text"
                                />
                                <FormText color="default" tag="span">
                                  Please enter a valid address.
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">Amount</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="1.587" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            className="btn-simple btn-icon btn-round float-right"
                            color="primary"
                            type="submit"
                          >
                            <i className="tim-icons icon-send" />
                          </Button>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Latest Crypto News</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Nexo to Pay on Stable...</td>
                              </tr>
                              <tr>
                                <td>Venezuela Begins Public of Nation...</td>
                              </tr>
                              <tr>
                                <td>PR: BitCanna – Dutch Blockchain...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div> */}
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Tumblr</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description text-left">
                    Simplemente la mejor plataforma de microblogueo.
                  </p>
                  <div className="btn-wrapper pt-3">
                    {/* <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button> */}
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://www.tumblr.com/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Conocela!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="5">
                  <h1 className="profile-title text-left">Yahoo Respuestas</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    Yahoo Respuestas, la mejor plataforma de conocimiento
                    compartido! Todos aprenden y comparten informaci[on mediante
                    pregunta-respuesta.
                  </p>
                  <div className="btn-wrapper pt-3">
                    {/* <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button> */}
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://answers.yahoo.com/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Conocela!
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems2} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems3} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Yahoo Email</h1>
                  <h5 className="text-on-back">03</h5>
                  <p className="profile-description text-left">
                    Uno de los mejores servicios de Email, disponible para uso
                    personal y empresarial.
                  </p>
                  <div className="btn-wrapper pt-3">
                    {/* <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button> */}
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://login.yahoo.com/?.src=ym&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Conocela!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container>
              <div id="images">
                <h3 className="mb-5">Algunos de Nuestros Servicios</h3>
                <Row>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Finanzas
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow"
                      src={require("assets/img/yahoofinance.png")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Noticias
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/yahoonews.jpeg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Deportes
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow-lg"
                      src={require("assets/img/yahoosports.jpeg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Cine
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow-lg"
                      src={require("assets/img/yahoocine.jpeg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <div className="section">
            <Container>
              <div id="images">
                <h3 className="mb-5">Y muchos más</h3>
                <Row>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Tiempo
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow"
                      src={require("assets/img/yahooweather.png")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Buscador
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/yahoosearch.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Grupos
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded shadow-lg"
                      src={require("assets/img/yahoogroups.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                      Vida y Estilo
                    </small>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow-lg"
                      src={require("assets/img/yahoovss.jpg")}
                      style={{ width: "150px" }}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </>
    )
  }
}

export default ProfilePage
