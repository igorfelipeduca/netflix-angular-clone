import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwBoxComponent } from './kw-box.component';

describe('KwBoxComponent', () => {
  let component: KwBoxComponent;
  let fixture: ComponentFixture<KwBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
