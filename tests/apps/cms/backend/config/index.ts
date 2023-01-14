import { Reference } from 'node-dependency-injection';
import container from '../../../../../src/apps/cms/backend/dependency-injection/index';
import MongoEnvironmentArranger from '../../../../contexts/cms/shared/infrastructure/arranger/MongoEnvironmentArranger';

container
  .register('Apps.contexts.cms.shared.EnvironmentArranger', MongoEnvironmentArranger)
  .addArgument(new Reference('Shared.MongoClientFactory'));

export default container;
