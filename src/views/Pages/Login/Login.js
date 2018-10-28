import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Mmc from '../../../gateway/Mmc';

import LoadingButton from '../../../Components/LoadingButton'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      grantType: 'password',
      username: 'admin@haccp.com',
      password: 'xCM9kj2xNtx4)Kr4',
      clientId: 2,
      clientSecret: 'N8y1JBLpijxodiNe8JjuqBGqO9XWEeIbuLEJG3md',

      loginButtonLoader: false,
    }
  }

  login = async (event) => {

    event.preventDefault();

    try {

      this.setState({ loginButtonLoader: true });

      await Mmc.login(
        this.state.grantType,
        this.state.username,
        this.state.password,
        this.state.clientId,
        this.state.clientSecret
      );

      this.props.history.push('/');
    } catch (error) {
      toast.error(error.message);
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <LoadingButton
                            loading={this.state.loginButtonLoader}
                            color="danger" className="px-4" onClick={this.login} value="LOGIN" />
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-danger bg-dark py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>HACCP</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <a color="danger" className="btn btn-danger mt-3" active href="http://haccp.milady.io/app-center/app-release.apk" >DOWNLOAD APK</a>
                      {/* <Button color="danger" className="mt-3" active>DOWNLOAD APK</Button> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <ToastContainer />

      </div>
    );
  }
}

export default Login;
