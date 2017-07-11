import { InterviewTestPage } from './app.po';

describe('interview-test App', () => {
  let page: InterviewTestPage;

  beforeEach(() => {
    page = new InterviewTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
