import { JuridicalModule } from './juridical.module';

describe('JuridicoModule', () => {
  let juridicalModule: JuridicalModule;

  beforeEach(() => {
    juridicalModule = new JuridicalModule();
  });

  it('should create an instance', () => {
    expect(juridicalModule).toBeTruthy();
  });
});
