import { Component } from 'react';
import { Link } from '@reach/router'
export default class Thumbnail extends Component {
 

  render(){

    const features = this.props;
    return (
      <>
        <div className="project">
            
        <Link to={features.link}>
            <div className="project-image">
            <img src={features.image} alt="Project Image"/>
            </div>
            <div className="project-title">{features.title}</div>
            <div className="project-category">{features.category}</div>
        </Link>
        </div>
      </>
    );
  }
}
