import { newSpecPage } from '@stencil/core/testing';
import { ProductRating } from '../product-rating';

describe('product-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductRating],
      html: `<product-rating></product-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <product-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-rating>
    `);
  });
});
