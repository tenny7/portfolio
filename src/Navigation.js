import { Component } from 'react';
import { Link } from '@reach/router';
import './css/navigation.css';
export default class Navigation extends Component {
 
  render(){
    return (
      <>
            <div className="d-flex justify-content-center my-4 py-3">
                <Link to="/projects" className="nav-link navitem ">
                    Projects
                </Link>
            
                <Link to="/about" className="nav-link navitem">
                    About
                </Link> 
        
                <Link to="/skills" className="nav-link navitem">
                    Skills
                </Link>

                <Link to="/experience" className="nav-link navitem">
                    Experience
                </Link>
            </div>
 
      </>
    );
  }
}
