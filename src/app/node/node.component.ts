import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../../models/node.model';
import {NodesStore} from '../services/nodesStore.service';
import {BlockStoreService} from '../services/block-store.service';

@Component({
  selector: 'node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: Node;

  constructor(public nodesStore: NodesStore) {
  }

  handleToogleExpand(): void {
    if (this.nodesStore.current === this.node) {
      this.nodesStore.setCurrent(null);
      return;
    }

    this.nodesStore.setCurrent(this.node);
  }
}
