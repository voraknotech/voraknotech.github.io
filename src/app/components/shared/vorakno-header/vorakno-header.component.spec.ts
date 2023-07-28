import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoraknoHeaderComponent } from './vorakno-header.component';

describe('VoraknoHeaderComponent', () => {
  let component: VoraknoHeaderComponent;
  let fixture: ComponentFixture<VoraknoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoraknoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoraknoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
