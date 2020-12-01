import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NodeComponent} from './node.component';
import {BlocksComponent} from '../blocks/blocks.component';
import {BlockComponent} from '../block/block.component';
import {StatusComponent} from '../status/status.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NodesStore} from '../services/nodesStore.service';


describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent, StatusComponent, BlocksComponent, BlockComponent ],
      imports: [HttpClientTestingModule],
      providers: [NodesStore]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
