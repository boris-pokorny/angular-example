import {
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';

export abstract class TableBase<TEntity>
  implements OnInit, OnChanges, OnDestroy {
  @Input('dataInput') dataInput: TEntity[];
  @Input('title') title: string;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // @ViewChild('addButton', { static: true, read: ElementRef })
  addButton: ElementRef;

  dataSource: MatTableDataSource<TEntity>;

  protected itemToDelete: TEntity;

  protected destroyed$ = new Subject();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed$.next();
  }

  ngOnChanges() {
    const data = this.dataInput.slice();
    //   data.sort((a, b) => +b.id - +a.id);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }

  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  protected createEmptyRecord() {
    return {};
  }
}
