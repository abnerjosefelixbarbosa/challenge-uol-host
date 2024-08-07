import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUpdateComponent } from './player-update.component';

describe('PlayerUpdateComponent', () => {
  let component: PlayerUpdateComponent;
  let fixture: ComponentFixture<PlayerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
