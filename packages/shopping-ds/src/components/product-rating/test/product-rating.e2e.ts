import { newE2EPage } from '@stencil/core/testing';

describe('product-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<product-rating></product-rating>');

    const element = await page.find('product-rating');
    expect(element).toHaveClass('hydrated');
  });
});
