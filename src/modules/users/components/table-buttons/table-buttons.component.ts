import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.scss'],
})
export class TableButtonsComponent<TEntity> implements OnInit {
  @Input() onEdit = (_: TEntity) => {};
  @Input() onDelete = (_: TEntity) => {};
  @Input() item: TEntity;

  constructor() {}

  ngOnInit(): void {}
}
