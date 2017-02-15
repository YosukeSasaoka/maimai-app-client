var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

//ヘッダの定義
var Header = React.createClass({
  mixins: [ History ],
  render: function(){
    return (
      <header>
        <div style={{position:"absolute", margin: "-15px 0px"}}>
      <h1>みんなで作る安心・安全な街</h1>
        <hr/>
      </header>
    );
  }
});

module.exports = Header;
