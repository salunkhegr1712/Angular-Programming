import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpComponent } from './np.component';

describe('NpComponent', () => {
  let component: NpComponent;
  let fixture: ComponentFixture<NpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpComponent]
    });
    fixture = TestBed.createComponent(NpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
