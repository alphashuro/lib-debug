/* eslint no-var: 0*/

Package.describe({
  name: 'alphashuro:lib-debug',
  version: '1.0.0',
  summary: 'Adds packages needed for debugging a Meteor app.',
  debugOnly: true,
  documentation: 'README.md',
});

Package.onUse(function onLibDebugUse(api) {
  var packages;
  api.versionsFrom('1.3-modules-beta.5');

  packages = {
    both: [
      // 'meteortoys:allthings',
      'babrahams:constellation@0.4.1',
      'constellation:velocity@0.4.0',
      'yelongren:constellation-reload@0.1.0',
      'constellation:schema@0.4.0',
      'fourquet:anti-gravity@1.0.4',
      'dburles:eslint',

    ],
  };

  api.use(packages.both);
  // api.imply(packages);
  // api.addFiles('lib-debug.js');
});

Package.onTest(function onLibDebugTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:lib-debug');
  api.addFiles('lib-debug-tests.js');
});
