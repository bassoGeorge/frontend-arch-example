import { newE2EPage } from '@stencil/core/testing';

describe('clickable-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clickable-header></clickable-header>');

    const element = await page.find('clickable-header');
    expect(element).toHaveClass('hydrated');
  });
});
