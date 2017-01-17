var React = require('react');
var ReactDOM = require('react-dom');

//ボディーの定義
var Body = React.createClass({
  render: function(){
    return (
      <UserRegistration/>
    );
  }
});

//ユーザー登録フォーム
var UserRegistration = React.createClass({
  getInitialState:function(){
    return {userData:""};
  },
handleChange: function (event) {
  this.setState({
    userData: event.target.value
  });
},
submitHandler: function (event) {
  event.preventDefault();
  alert(this.state.userData);
},
  render:function(){
    return <form onSubmit=(this.submitHandler)>
      <input
        type="text"
        value={this.state.userData}
        onChange={this.handleChange} />
      <br />
      　<label htmelFor="email">メールアドレス：</label>
      <textarea
        className="temail"
        value={this.state.userData}
        onChange={this.handleChange} />
      <button type="submit">送信</button>
    </form>
  }
});

module.exports = Body;
