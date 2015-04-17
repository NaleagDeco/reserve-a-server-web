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
                        <Server key={name} name={name} isInUse={servers[name].isInUse} owner={servers[name].owner}></Server>
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
        mixins: [ReactFireMixin],
        componentWillMount: function() {
            var serverFB = new Firebase("https://dazzling-fire-7049.firebaseio.com/servers/");
            this.bindAsObject(serverFB.child(this.props.name).ref(), "server");
            var userFB = new Firebase("https://dazzling-fire-7049.firebaseio.com/users/");
            this.bindAsArray(userFB, "users")
        },
        getInitialState: function() {
            return {
                users: [],
            };
        },
        render: function() {
            var userNodes = this.state.users.map(function(name, i) {
                return (
                        <option key={i} value={i}>{name}</option>
                );
            });

            return (
                    <ListGroupItem>
                    <input onChange={ this.onInUseChange } type="checkbox" checked={this.state.server.isInUse}></input>
                    <label>{this.props.name}</label>
                    <select onChange={ this.onOwnerChange } value={this.state.server.owner}>{userNodes}</select>
                    </ListGroupItem>
            );
        },
        onInUseChange: function(e) {
            var node = this.firebaseRefs["server"].child("isInUse");
            node.set(e.target.checked);
        },
        onOwnerChange: function(e) {
            var node = this.firebaseRefs["server"].child("owner");
            node.set(e.target.value);
        }
    });

    return ServerList;
});
