import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public async requestPermission(): Promise<NotificationPermission> {
    const result: NotificationPermission = await Notification.requestPermission();

    return result;
  }

  public showNotification(title: string, callback: ((event: Event) => any) | null = null): Notification {
    const notification: Notification = new Notification(title);
    notification.onclick = callback;

    return notification;
  }
}
