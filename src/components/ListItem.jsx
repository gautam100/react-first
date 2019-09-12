var React = require('react');
var createReactClass = require('create-react-class');
//var ListItem = React.createClass({
var ListItem = module.exports=createReactClass({
  render: function(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
