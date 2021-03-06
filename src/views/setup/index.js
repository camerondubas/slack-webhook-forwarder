'use strict';

// Local
import routes from './setup.routes';
import setupCtrl from './setup.controller';
import Webhooks from './webhooks.resource';

export default angular.module('app.setup', [])
  .config(routes)
  .controller('setupCtrl', setupCtrl)
  .factory('Webhooks', Webhooks)
  .name;
