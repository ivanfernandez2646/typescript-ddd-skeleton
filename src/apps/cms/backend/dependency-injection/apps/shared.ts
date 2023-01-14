import { ContainerBuilder, Definition, Reference } from 'node-dependency-injection';

import MongoClientFactory from '../../../../../contexts/cms/shared/infrastructure/persistence/mongo/MongoClientFactory';
import InMemoryAsyncEventBus from '../../../../../contexts/cms/shared/infrastructure/eventBus/inMemory/InMemoryAsyncEventBus';
import MongoConfigFactory from '../../../../../contexts/cms/shared/infrastructure/persistence/mongo/MongoConfigFactory';

const register = (container: ContainerBuilder) => {
  const mongoConfigDefinition = new Definition();
  mongoConfigDefinition.setFactory(MongoConfigFactory, 'createConfig');
  container.setDefinition('Shared.MongoConfig', mongoConfigDefinition);

  const mongoClientFactoryDefinition = new Definition();
  mongoClientFactoryDefinition.setFactory(MongoClientFactory, 'createClient');
  mongoClientFactoryDefinition.addArgument('daily-trends');
  mongoClientFactoryDefinition.addArgument(new Reference('Shared.MongoConfig'));
  container.setDefinition('Shared.MongoClientFactory', mongoClientFactoryDefinition);

  container.register('Shared.EventBus', InMemoryAsyncEventBus);
};

export default register;
