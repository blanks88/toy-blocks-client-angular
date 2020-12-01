import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import { NodesStore } from '../services/nodesStore.service';

@Component({
  selector: 'node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {
  expandedNodeURL: string = null;

  constructor(public store: NodesStore) {}

  ngOnInit() {
    this.store.getStatus();
  }


  isExpanded(node: Node): boolean {
    return this.expandedNodeURL === node.url;
  }

  setMessage(message: string): void {
    this.expandedNodeURL = message;
  }
}
