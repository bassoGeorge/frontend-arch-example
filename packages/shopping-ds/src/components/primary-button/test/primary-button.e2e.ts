import { newE2EPage } from '@stencil/core/testing';

describe('primary-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<primary-button></primary-button>');

    const element = await page.find('primary-button');
    expect(element).toHaveClass('hydrated');
  });
});
