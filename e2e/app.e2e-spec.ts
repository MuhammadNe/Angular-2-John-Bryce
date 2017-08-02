import { Day3ComponentsPage } from './app.po';

describe('day3-components App', () => {
  let page: Day3ComponentsPage;

  beforeEach(() => {
    page = new Day3ComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
