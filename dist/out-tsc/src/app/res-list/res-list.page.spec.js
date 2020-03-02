import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ResListPage } from './res-list.page';
describe('ResListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResListPage],
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
//# sourceMappingURL=res-list.page.spec.js.map