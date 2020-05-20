import React from 'react';
import {Card,CardImg,CardTitle,CardBody,CardText,Button} from 'reactstrap';
function Home(props)
{
    return(
        <div className="container">
            <h1>Posts</h1>
            <div className="row justify-content-center">
                <div className="col-auto mt-1">
                <Card style={{ width: '20rem' }} className="posts">
  <CardImg variant="top" src="assets/images/js.png" />
  <CardBody>
    <CardTitle> What should you do after learning javascript?
</CardTitle>
    <CardText>
    After learning Javascript, Most of the developers thinking about deciding one of the best frameworks to learn to do front-end development.
    </CardText>
    <Button variant="primary">Read more</Button>
  </CardBody>
</Card>
                </div>
                <div className="col-auto mt-1">
                <Card style={{ width: '20rem' }} className="posts">
  <CardImg variant="top" src="assets/images/reactvsnative.jpeg" />
  <CardBody>
    <CardTitle>Is React and React JS are same?, Then What is React Native?
</CardTitle>
    <CardText>
    I was confused with this question, when I get myself into learning React.js for my web development skills, so I did a research about it, I think I got a answer 
    </CardText>
    <Button variant="primary">Read more</Button>
  </CardBody>
</Card>
                </div>
                <div className="col-auto mt-1">
                <Card style={{ width: '20rem' }} className="posts">
  <CardImg variant="top" src="assets/images/qc.jpeg" />
  <CardBody>
    <CardTitle>Quantum Computing And It's Uses
</CardTitle>
    <CardText>
    An article about Quantum computing & it's applications #artificialintelligence #machinelearning #quantumcomputing By Thilakmani
    </CardText>
    <Button variant="primary">Read more</Button>
  </CardBody>
</Card>
                </div>
            </div>
        </div>
    );
}
export default Home;