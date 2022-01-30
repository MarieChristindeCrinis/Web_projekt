import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChracaterEditViewComponent } from './chracater-edit-view.component';

describe('ChracaterEditViewComponent', () => {
  let component: ChracaterEditViewComponent;
  let fixture: ComponentFixture<ChracaterEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChracaterEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChracaterEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
