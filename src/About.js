import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import devop from './image/devop.png'
import php from './image/php1.png'
import rest from './image/rest.jpg'
import git from './image/git.jpg'

export default class About extends Component {
 
  render(){
    return (
      <>
        <div className="container text-center">
            <h3>About</h3>

            
            <div className="row my-4 text-center">
                
                    <Card>
                        <Card.Body>I am a diligent self-starter, a continuous learner, and a highly motivated Technical Support
                    Engineer with solid knowledge in Software Engineering and an avid interest in technology.

                    <p>Successfully developed and demonstrated the ability to establish and maintain excellent verbal
                    and written communication with customers as well as collaborate with key stakeholders in support 
                    of business goals and objectives through my position as a Technical Support Engineer at Tek-Experts.</p> 

                    <p>Detail-oriented and vastly invested in project execution. Certified Microsoft Azure DevOps Expert,
                    Azure Administrator, OCI Cloud Operations Associate, and OCI Architect Associate.</p>

                    <h5>Specialties: Java, PHP, Rest API, Git, Azure DevOps, Data Structures, and Algorithms. </h5></Card.Body>
                    </Card>

                    
            
            </div>
            <div className="d-flex justify-content-center">
                <img src={devop} className="px-2 image-edited"/>
                <img src={php} className="px-2 image-edited"/>
                <img src={rest} className="px-2 image-edited"/>
                <img src={git} className="px-2 image-edited"/>
            </div>
        </div>
      </>
    );
  }
}
