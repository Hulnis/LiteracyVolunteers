"use strict";

module.exports = function(config) {
    config.set({

        files: [
            
        ],

        client: {
            captureConsole: true
        },

        frameworks: ["jasmine"],
        
        browsers : ['PhantomJS'],

        plugins: [
            "karma-jasmine",
            "karma-phantomjs-launcher"
        ],
        
        port: 9876,
        
        singleRun: true
    });
};
