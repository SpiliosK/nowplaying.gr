/**
 * Created by nikos on 10/5/2016.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, Router) {
   
    var initialize = function () {
        
        Router.initialize();
   };
    
    return { initialize: initialize };
    
});