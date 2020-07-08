import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss'],
})
export class TableLayoutComponent implements OnInit {
  @Input() disableAdd = false;
  @Input() title = '';
  @Input() showContent = false;
  @Input() onAddClick = () => {};

  constructor() {}

  ngOnInit(): void {}
}
