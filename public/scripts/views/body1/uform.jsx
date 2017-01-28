var React = require('react');
var ReactDOM = require('react-dom');

//ユーザー登録フォーム
var UserRegistration = React.createClass({
  getInitialState:function(){
    return {
      u_email: "",
      u_pass: "",
      c_code: ""
    };
  },
handleChange: function (event) {
  var newState ={};
  newState[event.targt.name] = event.target.value;
  this.setState(newState);
  },
submitHandler: function (event) {
  event.preventDefault();
  var words = [
    "Hi",
    this.state.u_email,
    this.state.u_pass,
    this.state.c_code
  ];
  alert(words.join(" "));
},
  render:function(){
    return <form onSubmit={this.submitHandler}>
      <br />
      <table className="formT">
        <tr>
          <td>
      　<label htmelFor="u_email">メールアドレス：</label>
          </td>
          <td>
            //メールアドレスのtextフォーム
            <input
              type="text"
              name="u_email"
              className="temail"
              value={this.state.u_email}
              onChange={this.handleChange} />

          </td>
        </tr>
        <tr>
          <td>
      　<label htmelFor="u_pass">パスワード：</label>
          </td>
          <td>
            //パスワードのフォーム
            <input
              type="password"
              name="u_pass"
              className="passw"
              value={this.state.u_pass}
              onChange={this.handleChange} />
          </td>
        </tr>
        <tr>
          <td>
      　<label htmelFor="c_code">コミュニティーコード：</label>
      <br />（不明な場合は空欄で構いません）
          </td>
          <td>
            //コミュニティーコードのフォーム
            <input
              type="password"
              name="c_code"
              className="passw"
              value={this.state.c_code}
              onChange={this.handleChange} />
          </td>
        </tr>

      <br />
      </table>
      <button type="submit" value="">登録</button>
    </form>;
  }
});

module.exports = UserRegistration;
