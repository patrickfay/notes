import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NdsButtonComponent } from './button.component';

describe(NdsButtonComponent.name, () => {
  let component: NdsButtonComponent;
  let fixture: ComponentFixture<NdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
