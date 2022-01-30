import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardViewComponent } from './character-card-view.component';

describe('CharacterCardViewComponent', () => {
  let component: CharacterCardViewComponent;
  let fixture: ComponentFixture<CharacterCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
