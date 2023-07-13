import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [
            IonicModule.forRoot(),
            AppRoutingModule,
            ReactiveFormsModule
        ]
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
    throw new Error('Function not implemented.');
}

