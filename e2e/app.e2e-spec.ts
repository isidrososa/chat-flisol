import { ChatTryPage } from './app.po';

describe('chat-try App', () => {
  let page: ChatTryPage;

  beforeEach(() => {
    page = new ChatTryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
