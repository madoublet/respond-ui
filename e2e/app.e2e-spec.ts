import { AngularRespondPage } from './app.po';

describe('angular-respond App', () => {
  let page: AngularRespondPage;

  beforeEach(() => {
    page = new AngularRespondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
