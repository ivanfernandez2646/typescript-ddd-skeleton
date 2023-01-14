import { ContainerBuilder } from 'node-dependency-injection';
import registerDEV from './application_dev';
import registerTEST from './application_test';
import registerPROD from './application_production';

const container = new ContainerBuilder();

switch (process.env.NODE_ENV) {
  case 'production':
    registerPROD(container);
    break;
  case 'test':
    registerTEST(container);
    break;
  default:
    registerDEV(container);
    break;
}

export default container;
