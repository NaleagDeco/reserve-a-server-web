require.config({
    baseUrl: "/scripts",
    paths: {
        "react": "//fb.me/react-0.13.1",
        "react-bootstrap": "/scripts/vendor/react-bootstrap/react-bootstrap",
        "jsx": "/scripts/vendor/jsx-requirejs-plugin/js/jsx",
        "JSXTransformer": "/scripts/vendor/jsx-requirejs-plugin/js/JSXTransformer",
        "firebase": "//cdn.firebase.com/js/client/2.2.3/firebase",
        "reactfire": "//cdn.firebase.com/libs/reactfire/0.4.0/reactfire",
        "text": "/scripts/vendor/requirejs-text/text"
    },
    shim: {
        'firebase': {
            exports: 'Firebase'
        }
    },
    jsx: {
        fileExtension: ".jsx"
    }
});

require(["app"]);
