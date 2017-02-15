var React = require('react');
var ReactDOM = require('react-dom');
var UserRegistration = require('./body1/uform.jsx');//ユーザー登録フォームをインポート

//ボディーの定義
var Body = React.createClass({
  render: function(){
    return (
      <div className="uform">
      <UserRegistration/>
      </div>
    );
  }
});

module.exports = Body;
