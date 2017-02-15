import React, { Component, PropTypes } from 'react'

export default class UserNameForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value.trim();
    if (!name) {
      return;
    }
    this.props.onNameSubmit(name);
    this.refs.name.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <br />
        <table className="formT">
          <tr>
            <td>
        　<label htmelFor="u_email">メールアドレス：</label>
            </td>
            <td>
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

      </form>
    )
  }
}

UserNameForm.propTypes = {
  onNameSubmit: PropTypes.func.isRequired
};
