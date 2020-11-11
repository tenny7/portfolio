import { Component } from 'react';
import Thumbnail from './Thumbnail';
import yanelImage from './image/yanel.jpg';
import Joe from './image/joe.jpg';
import Dori from './image/dori.jpg';
import Tamara from './image/tamara.jpg';
import { motion } from "framer-motion"

export default class Projects extends Component { 
 
    constructor(props){
        super(props);

    }

   
    
  render(){
   
    return (
      <>
      
        <div className="container my-4 text-center ">
        <h3>Projects</h3>
        <div className="row d-flex justify-content-around px-2">

            
        <Thumbnail
            link="/twitter"
            image={yanelImage}
            title="Yanel Abranish"
            category="Mobile App Specialist"
        />

        <Thumbnail
            link="/instagram"
            image={Joe}
            title="Joe Bandside"
            category="AI Specialist"
        />
        <Thumbnail
            link="/instagram"
            image={Dori}
            title="Doe Bandside"
            category="Software Specialist"
        />
        <Thumbnail
            link="/instagram"
            image={Tamara}
            title="Tamara Bandside"
            category="Cloud Specialist"
        />
        </div>
        </div>
       
      </>
    );
  }
}
