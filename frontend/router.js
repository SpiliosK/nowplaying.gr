/**
 * Created by nikos on 10/5/2016.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'views/MainView'
], function ($, _, Backbone, MainView) {

    //define our backbone router (which utilizes the History API) for client-side page routing
    var Router = Backbone.Router.extend({

        routes: {
            "": 'showMain',
            "/test": 'test'
        },

        showMain : function () {

            App.mainView = new MainView({el: $("#main_container")});
            App.mainView.render();
            
        },

        initialize: function() { console.info("Creating app main router"); }

    });

    var initialize = function () {

        //create an instance of our router
        App.router = new Router();

        Backbone.history.start();

    };

    return { initialize: initialize };

});
