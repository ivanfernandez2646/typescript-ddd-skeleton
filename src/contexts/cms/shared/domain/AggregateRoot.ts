import DomainEvent from './eventBus/DomainEvent';

type AggregateRootPrimitives = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export default abstract class AggregateRoot {
  static fromPrimitives: (plainData: AggregateRootPrimitives) => AggregateRoot;

  static equalsTo: (other: AggregateRoot) => boolean;

  protected readonly domainEvents: DomainEvent[];

  constructor() {
    this.domainEvents = [];
  }

  abstract toPrimitives(): AggregateRootPrimitives;

  record(domainEvent: DomainEvent): void {
    this.domainEvents.push(domainEvent);
  }

  pullDomainEvents(): DomainEvent[] {
    return this.domainEvents.splice(0);
  }
}
