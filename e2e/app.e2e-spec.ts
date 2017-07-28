import { Trentrand.ComPage } from './app.po';

describe('trentrand.com App', () => {
  let page: Trentrand.ComPage;

  beforeEach(() => {
    page = new Trentrand.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
