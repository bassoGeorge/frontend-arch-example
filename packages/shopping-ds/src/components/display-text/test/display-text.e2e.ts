import { newE2EPage } from '@stencil/core/testing';

describe('display-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<display-text></display-text>');

    const element = await page.find('display-text');
    expect(element).toHaveClass('hydrated');
  });
});
