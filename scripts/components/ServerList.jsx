define(['react', 'react-bootstrap', 'reactfire', 'firebase'], function(React, ReactBootstrap, ReactFireMixin, Firebase) {
    var ListGroup = ReactBootstrap.ListGroup;
    var ListGroupItem = ReactBootstrap.ListGroupItem;
    var Panel = ReactBootstrap.Panel;
    
    var ServerList = React.createClass({
        mixins: [ReactFireMixin],
        componentWillMount: function() {
            this.bindAsObject(new Firebase("https://dazzling-fire-7049.firebaseio.com/servers/"), "servers");
        },
        render: function() {
            var servers = this.state.servers;
            var serverNodes = Object.keys(this.state.servers).map(function(name) {
                return (
                        <Server key={name} name={name} isInUse={servers[name]}></Server>
                );
            });
            return (
                    <Panel header="Server List">
                    <ListGroup full>
                    {serverNodes}
                    </ListGroup>
                    </Panel>
            );
        },
        getInitialState: function() {
            return {servers: {}}
        }
    });
    
    var Server = React.createClass({
        render: function() {
            return (
                    <ListGroupItem>
                    <input type="checkbox" readOnly checked={this.props.isInUse}></input>
                    <label>{this.props.name}</label>
                    </ListGroupItem>
            );
        }
    });

    return ServerList;
});
