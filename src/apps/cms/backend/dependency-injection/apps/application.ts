import { ContainerBuilder } from 'node-dependency-injection';
import StatusGetController from '../../controllers/StatusGetController';
import sharedDI from './shared';

const register = (container: ContainerBuilder) => {
  sharedDI(container);
  container.register('Apps.cms.controllers.StatusGetController', StatusGetController);
};

export default register;
