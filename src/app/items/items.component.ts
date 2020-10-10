import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private itemsService: ItemsService) {
    this.result$ = itemsService.resolveItems();
  }

  ngOnInit() {}

}