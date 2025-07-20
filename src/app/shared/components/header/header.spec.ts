import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say good morning', () => {
    const salutation: string = Reflect.get(component, 'getSalutation').call(component, new Date('2025-07-20T08:00:00'));
    expect(salutation).toEqual(Reflect.get(Header, 'GOOD_MORNING_SALUTATION'));
  });

  it('should say good afternoon', () => {
    const salutation: string = Reflect.get(component, 'getSalutation').call(component, new Date('2025-07-20T13:00:00'));
    expect(salutation).toEqual(Reflect.get(Header, 'GOOD_AFTERNOON_SALUTATION'));
  });

  it('should say good evening', () => {
    const salutation: string = Reflect.get(component, 'getSalutation').call(component, new Date('2025-07-20T18:00:00'));
    expect(salutation).toEqual(Reflect.get(Header, 'GOOD_EVENING_SALUTATION'));
  });
});
