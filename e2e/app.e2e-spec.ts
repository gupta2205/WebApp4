import { WebApp4Page } from './app.po';

describe('web-app4 App', () => {
  let page: WebApp4Page;

  beforeEach(() => {
    page = new WebApp4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
