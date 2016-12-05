/**
 * Created by nikos on 10/5/2016.
 */
var App = {};

require.config({
    
    paths: {
        
        'jquery': '/bower_components/jquery/dist/jquery',
        'underscore': '/bower_components/underscore/underscore',
        'backbone': '/bower_components/backbone/backbone',
        'text': '/node_modules/text/text'
        
    },
    
    shim: {
        
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
    
});


require(['app'], function (App) {
    
    App.initialize();
    
});