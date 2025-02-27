



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch , Link , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Nav, Container, Row, Col, Card
} from 'react-bootstrap';
// import{
// 	BrowserRouter as Router ,
// 	Switch ,
// 	Link ,
// 	Route 
// }
import Login from './Component/Login/Login' // folder then filename
import Registration from './Component/Registration/registration' // folder then filename

class Index extends React.Component {

        constructor() {

            super()
        }

        Footer = () => {
        	return(
        		<Row>
                <Col sm={4}>
                About Hotel,
                Location
                </Col>
                
                <Col sm={4}>Copyright</Col>
                
                <Col sm={4}>Map</Col>

                </Row>
        		)
        }

        //routing navigation reactnavigation 
        //we will use react-router dom
       //routing
        render() {
            return (
            	<Container>
            	  <Row>
				    <Col sm={8}></Col>
				    <Card style= {{marginBottom:'30px'}}>
				    <h3>Welcome</h3>
				    <Card>
					  <Card.Body>
					    <Card.Title>Card Title</Card.Title>
					    <Card.Text>
					      Some quick example text to build on the card title and make up the bulk of
					      the card's content.
					    </Card.Text>
					  </Card.Body>
					  <Card.Body>
					    <Card.Link href="#">Card Link</Card.Link>
					    <Card.Link href="#">Another Link</Card.Link>
					  </Card.Body>
					</Card>
					</Card>
				    <Col sm={4}></Col>
				    <h2>Welcome to React</h2>
				  </Row>
                <div> {/* for wrapping jsx components  or use fragment*/}
                {/*< Login />*/}
                <Router>
                <Row>
                <div>               
                <Nav variant="pills" defaultActiveKey="/home">
					  <Nav.Item>
					    <Nav.Link as= {Link} to="/" active={true}> Home</Nav.Link> {/*as to use custom components*/}
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link as= {Link} to="/registration">Registration</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link as= {Link} to="/login">Login</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link as= {Link} to="/logout">Logout</Nav.Link>
					  </Nav.Item>
				
					</Nav>
                </div>
                </Row>
                <Switch>
                {/*<Router path="/">
                <Home />
                </Router>*/}
                 <Router exact path="/">
                
                </Router>
                <Router exact path="/login">
                <Login />
                </Router>
                <Router exact path="/registration">
                <Registration />
                </Router>
                <Router exact path="/logout">
                
                </Router>
                 {/*<Router path="/registration" component= {Login} />*/}
                </Switch>
                </Router>
                </div>
                 </Container>
                
               

             )
}

}

ReactDOM.render(<Index />, document.getElementById('root'))