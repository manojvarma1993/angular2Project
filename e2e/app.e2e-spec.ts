import { NotPage } from './app.po';

describe('not App', function() {
  let page: NotPage;

  beforeEach(() => {
    page = new NotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
