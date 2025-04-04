import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMecanicienComponent } from './create-mecanicien.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('CreateMecanicienComponent', () => {
  let component: CreateMecanicienComponent;
  let fixture: ComponentFixture<CreateMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMecanicienComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
