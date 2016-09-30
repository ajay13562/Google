import React from 'react';
import '../icon100x100.png';

var Contact = React.createClass({
  render: function() {
    return(
      <figure className="contact-row">
        <div className="col-xs-1"><i className="mdi mdi-account account2"></i></div>
        <div className="col-xs-4"><h5><b className="details">{this.props.contact.name}</b> </h5></div>
        <div className="col-xs-4 hidden-xs"><h5><b className="details">{this.props.contact.phone}</b> </h5></div>
        <div className="col-xs-3"><i className="fa fa-elipsis-v"></i></div>
      </figure>
    );
  }
});

export default Contact;
