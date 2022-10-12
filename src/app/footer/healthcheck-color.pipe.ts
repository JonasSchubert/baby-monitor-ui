import { Pipe, PipeTransform } from '@angular/core';
import { Healthstatus } from '../healthstatus';

@Pipe({
  name: 'healthcheckColor'
})
export class HealthcheckColorPipe implements PipeTransform {
  public transform(status: Healthstatus): string {
    return status.status === 'up' ? 'accent' : 'warn';
  }
}
