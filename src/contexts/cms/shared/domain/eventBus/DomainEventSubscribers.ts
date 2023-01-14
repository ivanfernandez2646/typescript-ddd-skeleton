import { ContainerBuilder, Definition } from 'node-dependency-injection';

import DomainEvent from './DomainEvent';
import DomainEventSubscriber from './DomainEventSubscriber';

export default class DomainEventSubscribers {
  static from(container: ContainerBuilder): Array<DomainEventSubscriber<DomainEvent>> {
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<string, Definition>,
      subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

    subscriberDefinitions.forEach((_value: unknown, key: unknown) => subscribers.push(container.get(key)));

    return subscribers;
  }
}
