import { AngularBDDPage } from './app.po';

describe('angular-bdd App', () => {
  let page: AngularBDDPage;

  beforeEach(() => {
    page = new AngularBDDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
