import { checkURL } from '../client/js/urlChecker';
test('Test input URL validity', () => {
    expect(checkURL('some string')).toBeFalsy();
    expect(checkURL(55)).toBeFalsy();
    expect(checkURL('$2314nj jn545 %%$$$ ')).toBeFalsy();
    expect(checkURL('https://www.developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries')).toBeTruthy();
  })