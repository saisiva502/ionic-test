import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResListPage } from './res-list.page';

describe('ResListPage', () => {
  let component: ResListPage;
  let fixture: ComponentFixture<ResListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
