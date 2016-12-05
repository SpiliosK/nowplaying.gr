/**
 * Created by nikos on 10/5/2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main.html'
], function ($, _, Backbone, main_template) {

    var MainView = Backbone.View.extend({

        initialize: function () {

            this.template = _.template($(main_template).html());

        },

        render: function() {

            $(this.el).html(this.template());
            return this;

        }

    });

    //our module now returns our view
    return MainView;

});
