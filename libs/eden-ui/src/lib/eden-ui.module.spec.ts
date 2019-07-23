import { async, TestBed } from '@angular/core/testing';
import { EdenUiModule } from './eden-ui.module';

describe('EdenUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EdenUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EdenUiModule).toBeDefined();
  });
});
