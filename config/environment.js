/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chirper',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    apiURL: 'http://localhost:9000',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'connect-src': "http://localhost:9000"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['http://localhost:9000']
    },
    'simple-auth-oauth2': {
      serverTokenEndpoint: 'http://localhost:9000/token'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  if (environment === 'production') {
    ENV.apiURL = 'https://rlb3-chirper-api.herokuapp.com';
    ENV.contentSecurityPolicy['connect-src'] = 'https://rlb3-chirper-api.herokuapp.com';
    ENV['simple-auth'].crossOriginWhitelist = ['https://rlb3-chirper-api.herokuapp.com'];
    ENV['simple-auth-oauth2'].serverTokenEndpoint = 'https://rlb3-chirper-api.herokuapp.com/token';
  }

  return ENV;
};
