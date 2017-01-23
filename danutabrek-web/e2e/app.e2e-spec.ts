import { DanutabrekWebPage } from './app.po';

describe('danutabrek-web App', function() {
  let page: DanutabrekWebPage;

  beforeEach(() => {
    page = new DanutabrekWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
