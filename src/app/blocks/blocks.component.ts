import {Component, Input, OnInit} from '@angular/core';
import {BlockStoreService} from '../services/block-store.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  @Input() url: string;

  constructor(public blockStore: BlockStoreService) { }

  ngOnInit() {
    this.blockStore.getStatus(this.url);
  }

}
