import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ResDetailPage } from './res-detail.page';
describe('ResDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ResDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=res-detail.page.spec.js.map