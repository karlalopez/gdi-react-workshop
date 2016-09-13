var React = require('react');
var ReactDOM = require('react-dom');

var Twitter = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    $.get(this.props.url, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };
  
    // POST to add tweet to database
    $.post(this.props.url, tweet, function (data) {
        this.setState({ data: data });
      }.bind(this)
    );
  },
  componentDidMount: function () {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={this.handleTweetSubmit}/>
        <TweetList data={this.state.data}/>
      </div>
    );
  }
});

var TweetForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.value;
    var text = this.refs.text.value;
    if (!text || !author) {
      return;
    }
    this.props.onTweetSubmit(author, text);
    this.refs.author.value = '';
    this.refs.text.value = '';
  }, 
  render: function () {
    return (
      <form className="tweetForm" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Author Name" ref="author" />
        <input type="text" placeholder="Tweet" ref="text" />
        <button type="submit" className="btn btn-info">Tweet</button>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var tweetData = this.props.data;
    var tweetArray = tweetData.map(function(tweet) {
      return <Tweet author={tweet.author} text={tweet.text} />;
    });
    return (
      <div className="tweetList">
        {tweetArray}
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h3>{this.props.text}</h3>
        {this.props.author}
      </div>
    );
  }
});

ReactDOM.render(
  <Twitter url="tweets.json"/>,
  document.getElementById('tweets')
);