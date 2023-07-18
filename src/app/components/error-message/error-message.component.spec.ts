import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  }));

  it('should show error on field touched and error present', () =>{
    component.field = new FormGroup({email: new FormControl()});
    component.field.markAllAsTouched();
    component.field.setErrors({required: true})
    
    expect(component.showComponent()).toBeTruthy();

  })
});
