var ServerList = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function() {
        this.bindAsObject(new Firebase("https://dazzling-fire-7049.firebaseio.com/servers/"), "servers");
    },
    render: function() {
        var servers = this.state.servers;
        var serverNodes = Object.keys(this.state.servers).map(function(name) {
            return (
                <p>{name} : {servers[name].toString()}</p>
            );
        });
        return (
            <div>
            {serverNodes}
            </div>
        );
    },
    getInitialState: function() {
        return {servers: {}}
    }
});

var Server = React.createClass({
    render: function() {
        return (
            <div>
                <div className="serverIsInUse">
                    {this.props.isInUse}
                </div>
                <div className="serverName">
                    {this.props.name}
                </div>
            </div>
        );
    }
});
        
React.render(
        <ServerList />, document.getElementById('content')
);
