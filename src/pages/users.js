import React from 'react';
import "./user.css"
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navbar,Nav,NavDropdown,Form,FormCheck,FormControl,Container,Row,Col,InputGroup } from 'react-bootstrap';
const validationSchema = Yup.object().shape({
  fullname: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  message: Yup.string()
  .required("*Message is required"),
});

class UsersPage extends React.Component{
    constructor(){
        super()
        this.state={
            fullname:"",
            email:"",

        }
        this.handle=this.handle.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handle(event){
        this.setState({[event.target.name]:event.target.value})

    }
    handleSubmit(){

    }

    render( ){


    return(
        <div>

        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Button variant="primary" href="/"><Link to="/"> </Link>Back</Button>{' '}
        <Link to="/"> back</Link>
        <div className="contact-form">

          <Container id="fa" fluid>
          <div  className="col-md-12 text-center">
            <h1> CONTACT US</h1>
            <br/>


          </div>
          <div className="col-md-10 text-center">
          <Formik initialValues={{fullname:"",email:"",message:""}}
          validationSchema={validationSchema}
          onSubmit={(values,{setSubmitting, resetForm}) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);
            
            console.log("submmitint")
            fetch('http://127.0.0.1:8000/article/',{
                method:'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
            },
                body:JSON.stringify({
                    "id": 9,
        "title": "meo changedd",
        "author": "meddaa" 
                }),

            }
            
            );

            // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
          >
          {({values,
          errors,
          touched,handleChange,handleBlur,handleSubmit,isSubmitting,isValid})=>(
            <Form id="fq" onSubmit={handleSubmit}>

            <Form.Group controlId="formGroupEmail">
            <Row >
            <Col md={2}></Col>
            <Col>
            <Form.Control id="error" onBlur={handleBlur}  className={touched.email && errors.email ? "error" : null} name="email" onChange={handleChange} value={values.email} type="email" placeholder="Enter email address" />
            {touched.email && errors.email ? (
                <div id="error-message" className="error-message">{errors.email}</div>
              ): null}
            </Col>
            
            <Col>
            <Form.Control id="error"  onBlur={handleBlur} className={touched.fullname && errors.fullname ? "error" : null} name="fullname" onChange={handleChange} value={values.fullname} type="text" placeholder="Enter Full Name" />
            {touched.fullname && errors.fullname ? (
                <div id="error-message" className="error-message">{errors.fullname}</div>
              ): null}
            </Col>
            </Row>
            </Form.Group> 






            <Form.Group controlId="formGroupEmail" >
            <Row >
            <Col md={2}></Col>
            <Col md={10}>
            <Form.Control rows="6" placeholder="Message" as="textarea" style={{resize:"none"}} id="error"  onBlur={handleBlur} className={touched.message && errors.message ? "error" : null} name="message" onChange={handleChange} value={values.message}/>
            {touched.message && errors.message ? (
                <div id="error-message" className="error-message">{errors.message}</div>
              ): null}
            </Col>
            </Row>
            </Form.Group> 



            <div className="col-md-12 text-left">
            <Row >
            <Col md={2}></Col>
            <Col >
            <Button id="fa1" disabled={isSubmitting} variant="primary" type="submit">Send</Button>{' '}
            </Col> 
            </Row> 
            </div>
            </Form>
          )}

            </Formik>
          </div>
          </Container>
        
        
        
        </div>

        </div>
    )
    }
}
export default UsersPage;