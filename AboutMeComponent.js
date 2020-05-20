import React, { Component } from 'react';
import {Form,Button,FormGroup,Label,Input, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
class AboutMe extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            email:'',
            phonenum:'',
            review:'',
            message:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event)
    {
const target = event.target;
const value= target.type === 'checkbox' ? target.checked : target.value;
const name=target.name;
this.setState(
    {
        [name]:value
    }
)
}
    handleSubmit(event)
    {
        console.log('Retrieved data ',JSON.stringify(this.state));
        event.preventDefault();
    }
    render()
    {
        return(
                <div className="container">
                    <div className="row" row-content>
                    <div className="col-12">
                        <h4>Send us Your Feedback</h4>
                        </div>
                        <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
<FormGroup row>
    <Label htmlFor="firstname" md={2}>First Name</Label>
    <Col md={10}>
        <Input type="text" id="firstname" name="firstname" placeholder ="First Name" value={this.state.firstname} onChange={this.handleInputChange}/>
        {/*col-md-10 means for medium to xtra large screen sizes it will occupy 10 colums */}
    </Col>
</FormGroup>
<FormGroup row>
    <Label htmlFor="lastname" md={2}>Last Name</Label>
    <Col md={10}>
        <Input type="text" id="lastname" name="lastname" placeholder ="Last Name" value={this.state.lastname} onChange={this.handleInputChange}/>
        {/*col-md-10 means for medium to xtra large screen sizes it will occupy 10 colums */}
    </Col>
</FormGroup>
<FormGroup row>
    <Label htmlFor="phonenum" md={2}>Mobile Number</Label>
    <Col md={10}>
        <Input type="tel" id="phonenum" name="phonenum" placeholder ="Phone Number" value={this.state.phonenum} onChange={this.handleInputChange} />
        {/*col-md-10 means for medium to xtra large screen sizes it will occupy 10 colums */}
    </Col>
</FormGroup>
<FormGroup row>
    <Label htmlFor="email" md={2}>Email</Label>
    <Col md={10}>
        <Input type="email" id="email" name="email" placeholder ="Email ID" value={this.state.email} onChange={this.handleInputChange}/>
        {/*col-md-10 means for medium to xtra large screen sizes it will occupy 10 colums */}
    </Col>
</FormGroup>
<FormGroup row>
<Label htmlFor="review" md={{size:3,offset:1}}>Review</Label>
    <Col md={{size:6,offset:2}}>
        <Input type="select" name="review"  value={this.state.review} onChange={this.handleInputChange}>
<option>Excellent</option>
<option>Good</option>
<option>Satisfactory</option>
<option>Bad</option>
</Input>
    </Col>
</FormGroup>
<FormGroup row>
    <Label htmlFor="message" md={2}>Your Feedback</Label>
    <Col md={10}>
        <Input type="textarea" id="message" name="message" placeholder ="Enter Message here" value={this.state.message} onChange={this.handleInputChange} />
        {/*col-md-10 means for medium to xtra large screen sizes it will occupy 10 colums */}
    </Col>
</FormGroup>
<FormGroup row>
<Col md={{size:10,offset:2}}>
    <Button type="submit" color="primary">Send Feedback</Button>
</Col>
</FormGroup>
</Form>


                    </div>
                    </div>
                </div>
        );
    }
}
export default AboutMe;