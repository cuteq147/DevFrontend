import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowinfoListComponent } from './flowinfo-list.component';

describe('FlowinfoListComponent', () => {
  let component: FlowinfoListComponent;
  let fixture: ComponentFixture<FlowinfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowinfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
