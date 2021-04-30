import { newE2EPage } from '@stencil/core/testing';

describe('simple-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-list></simple-list>');

    const element = await page.find('simple-list');
    expect(element).toHaveClass('hydrated');
  });
});
