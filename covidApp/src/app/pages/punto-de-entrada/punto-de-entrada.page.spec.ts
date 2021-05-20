import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntoDeEntradaPage } from './punto-de-entrada.page';

describe('PuntoDeEntradaPage', () => {
  let component: PuntoDeEntradaPage;
  let fixture: ComponentFixture<PuntoDeEntradaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDeEntradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntoDeEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
