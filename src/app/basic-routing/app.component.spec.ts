import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });

    // it(`should have as title 'Hero-Component'`, () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('Hero-Component');
    // });
});
