var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    console.log('Query', query);
  },
  render: function(){
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playersInfo}
      />
    )
  }
})

module.exports = ConfirmBattleContainer;
