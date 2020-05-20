import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function Contact(props)
{
    return(
        <div className="container">
            <div className="row row-content">
            <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>ContactMe</BreadcrumbItem>
                    </Breadcrumb>
             <div className="col-12">
             <h3>Location Information</h3>
             </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h4>My Address</h4>
                    <address>
                        2109,TNHB colony<br />
                        Mela anuppanadi<br />
                        Madurai-9<br />
                <i className="fa fa-phone fa-lg"></i>:+8248286527<br />
                <i className="fa fa-fax fa-lg"></i>:+8248286527<br />
                <i className="fa fa-envelope fa-lg"></i><a href="mailto:thilakmani777@gmail.com">Thilakmani@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;