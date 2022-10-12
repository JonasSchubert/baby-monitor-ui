import { Pipe, PipeTransform } from '@angular/core';
import { Healthstatus } from '../healthstatus';

@Pipe({
  name: 'healthcheckText'
})
export class HealthcheckTextPipe implements PipeTransform {
  transform(status: Healthstatus): string {
    return `Server ${status.status === 'up' ? 'Up' : 'Down'}`;
  }
}
