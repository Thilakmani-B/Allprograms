import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
{/*Only class constructor can have local state */}
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            selecteProject:null
        };
    {/*console.log("constructor life cycle method called") */}

    }
    componentDidMount()
    {
            console.log("componentdidmount() life cycle method called");

    }
    onProjectSelected(project){
        this.setState({
            selectedProject:project
        });
    }
    renderProject(project)
    {
  if(project != null){
return(
<h3>
    Developer:{project.developer}<br />
    Duration:{project.duration}<br />
    Category:{project.category}<br />
    <a href={project.link} target="_blank">View</a>
</h3>
);
  }
  else{
      return(
      <div></div>);
  }

    }  
    render()
    {
        {/*projects array converted into the list by using map method */}
        const projectList = this.props.projects.map((project) =>
        {
            return(
                <div key={project.id} className = "col-12 mt-5">
                    <Media tag="li" onClick={()=>this.onProjectSelected(project)}>
                        <Media left middle>
                            <Media object width="100px" src={project.image} alt={project.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{project.name}</Media>
                            <p>{project.description}</p>
                            </Media> 
                    </Media>
                </div>
            );
        });

    return(
<div className="container">
<div className="row">
<Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">    <Media list>
        {projectList}
    </Media>
</div>
</div>

<div className="container row" id="description">
{this.renderProject(this.state.selectedProject)}
</div>
</div>
 );
}
}

export default Project;
