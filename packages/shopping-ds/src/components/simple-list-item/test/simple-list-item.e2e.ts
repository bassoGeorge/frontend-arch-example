import { newE2EPage } from '@stencil/core/testing';

describe('simple-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-list-item></simple-list-item>');

    const element = await page.find('simple-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
