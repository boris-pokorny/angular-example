import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class ConnectedComponent implements OnDestroy {
  protected destroyed = new Subject();
  ngOnDestroy() {
    this.destroyed.next();
  }
}
