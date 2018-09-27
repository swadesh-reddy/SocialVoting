import { ApprouteModule } from './approute.module';

describe('ApprouteModule', () => {
  let approuteModule: ApprouteModule;

  beforeEach(() => {
    approuteModule = new ApprouteModule();
  });

  it('should create an instance', () => {
    expect(approuteModule).toBeTruthy();
  });
});
