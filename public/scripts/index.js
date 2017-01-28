var React = require('react');
var ReactDOM = require('react-dom');//react-domをインポート
var Header = require('./views/header.jsx');//ヘッダをインポート
var Body = require('./views/body.jsx');//ボディをインポート
var Footer = require('./views/footer.jsx');//フッタをインポート

//コンポーネントを一つにまとめる
var Index = React.createClass({
  render:function(){
    return (
      <div>
        <Header/>
        <div className="main">
        <Body/>
        </div>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
