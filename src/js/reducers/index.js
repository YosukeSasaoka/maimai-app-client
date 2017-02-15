import { combineReducers } from 'redux'
import uuid from './uuid'
import name from './name'

const app = combineReducers({ uuid, name })
export default app

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.History;

var UserForm = require('./componets/UserNameForm.jsx');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Top = React.createClass({
  handleSubmit:function(){
    //ログイン＆ポータル画面へ
  },
  render:function(){
    return (
      <div>
        <div className="main">
          <h1>ログイン</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="userid"/>
            <input placeholder="password"/>
            <div style={{textAlign:"center"}}>
              <button type="submit">ログイン</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var Main = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <div className="main">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
});

var Routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Top}/>
    <Route path="/top" component={Top}/>
    <Route path="/portal" component={Main}>
      <IndexRoute component={Body}/>
      <Route path="/userform" component={UserForm}/>
    </Route>
  </Route>
);

var Top = React.createClass({
  mixins: [ History ],

  handleSubmit:function(e){
    e.preventDefault();
    /* ログイン処理 */

    //ポータル画面へ
    this.history.pushState(null, '/portal');
  },

ReactDOM.render(
  <Router>{Routes}</Router>,
  document.getElementById('content')
);
