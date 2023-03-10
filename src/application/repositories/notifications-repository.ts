import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notification: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
