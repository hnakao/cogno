import { NaturalModule } from './natural.module';

describe('NaturalModule', () => {
  let naturalModule: NaturalModule;

  beforeEach(() => {
    naturalModule = new NaturalModule();
  });

  it('should create an instance', () => {
    expect(naturalModule).toBeTruthy();
  });
});
