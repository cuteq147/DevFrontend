import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlowinfoComponent } from './create-flowinfo.component';

describe('CreateFlowinfoComponent', () => {
  let component: CreateFlowinfoComponent;
  let fixture: ComponentFixture<CreateFlowinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFlowinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlowinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
