import {
  EventListenerAction,
  EventListenerKey,
  EventListenerRequest,
} from "./EventListener.action";

export class EventManagerAction {
  public readonly _EventListenerAction: Map<
    EventListenerKey,
    EventListenerAction
  > = new Map();

  constructor() {}

  public async subscribe(data: EventListenerAction): Promise<void> {
    const alreadyExist = this._EventListenerAction.get(data.key);
    if (alreadyExist) return;
    this._EventListenerAction.set(data.key, data);
  }

  public async unSubscribe(data: EventListenerUnsubscribeData): Promise<void> {
    const { key } = data;
    this._EventListenerAction.delete(key);
  }

  public async notify(data: EventListenerRequest): Promise<void> {
    for (const [key, action] of this._EventListenerAction.entries()) {
      try {
        await action.update(data);
      } catch (error) {
        console.error(`[EventManagerAction] Error notifying ${key}:`, error);
      }
    }
  }
}

export interface EventListenerUnsubscribeData {
  key: EventListenerKey;
}
