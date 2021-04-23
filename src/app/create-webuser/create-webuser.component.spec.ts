import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWebuserComponent } from './create-webuser.component';

describe('CreateWebuserComponent', () => {
  let component: CreateWebuserComponent;
  let fixture: ComponentFixture<CreateWebuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWebuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWebuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
