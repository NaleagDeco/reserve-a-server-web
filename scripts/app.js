require(['react', 'jsx!components/ServerList'], function(React, ServerList) { 
    React.render(
        React.createElement(ServerList, null),
        document.getElementById('content')
    );
});
