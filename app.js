var Fs = require('fire-fs');
var Path = require('fire-path');

//
global.__app = {
    path: __dirname,
    requireLogin: false,
    projectPath: null,

    initCommander: function ( commander ) {
        commander
            .usage('[options] <project-path>')
            .option('--require-login', 'Require login in dev mode.')
            ;
    },

    init: function ( options ) {
        if ( options.args.length > 0 ) {
            Editor.App.projectPath = options.args[0];
        }
        Editor.App.requireLogin = !Editor.isDev || options.requireLogin;

        // if we have project path, go to the editor, otherwise go to the dashboard
        if ( Editor.App.projectPath ) {
            require('./editor/init');
        }
        else {
            require('./dashboard/init');
        }
    },
};

require('./editor-framework/init');

