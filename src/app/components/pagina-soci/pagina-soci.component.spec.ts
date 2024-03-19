import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSociComponent } from './pagina-soci.component';

describe('PaginaSociComponent', () => {
  let component: PaginaSociComponent;
  let fixture: ComponentFixture<PaginaSociComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaSociComponent]
    });
    fixture = TestBed.createComponent(PaginaSociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
