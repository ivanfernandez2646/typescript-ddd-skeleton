import DomainEvent from '../../../../../src/contexts/cms/shared/domain/eventBus/DomainEvent';
import DomainEventSubscriber from '../../../../../src/contexts/cms/shared/domain/eventBus/DomainEventSubscriber';
import EventBus from '../../../../../src/contexts/cms/shared/domain/eventBus/EventBus';

export default class EventBusMock implements EventBus {
  private publishSpy = jest.fn();

  async publish(events: DomainEvent[]): Promise<void> {
    await this.publishSpy(events);
  }

  addSubscribers(_subscribers: DomainEventSubscriber<DomainEvent>[]): void {}

  assertLastPublishedEventIs(expectedEvent: DomainEvent): void {
    const publishSpyCalls = this.publishSpy.mock.calls,
      lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1],
      lastPublishedEvent = lastPublishSpyCall[0][0];

    expect(publishSpyCalls.length).toBeGreaterThan(0);

    expect(this.getAttributesFromDomainEvent(expectedEvent)).toMatchObject(
      this.getAttributesFromDomainEvent(lastPublishedEvent) as any // eslint-disable-line @typescript-eslint/no-explicit-any
    );

    expect(this.getCommonDataFromDomainEvent(expectedEvent)).toMatchObject(
      this.getCommonDataFromDomainEvent(lastPublishedEvent) as any // eslint-disable-line @typescript-eslint/no-explicit-any
    );
  }

  assertNothingPublished(): void {
    const publishSpyCalls = this.publishSpy.mock.calls;

    expect(publishSpyCalls).toHaveLength(0);
  }

  private getAttributesFromDomainEvent(event: DomainEvent): unknown {
    const { eventId, occurredOn, aggregateId, eventName, ...attributes } = event; // eslint-disable-line @typescript-eslint/no-unused-vars

    return attributes;
  }

  private getCommonDataFromDomainEvent(event: DomainEvent): unknown {
    const { aggregateId, eventName } = event;

    return { aggregateId, eventName };
  }
}
