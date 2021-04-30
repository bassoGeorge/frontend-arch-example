import { newE2EPage } from '@stencil/core/testing';

describe('icon-button-with-bubble', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-button-with-bubble></icon-button-with-bubble>');

    const element = await page.find('icon-button-with-bubble');
    expect(element).toHaveClass('hydrated');
  });
});
