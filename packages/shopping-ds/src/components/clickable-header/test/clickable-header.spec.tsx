import { newSpecPage } from '@stencil/core/testing';
import { ClickableHeader } from '../clickable-header';

describe('clickable-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClickableHeader],
      html: `<clickable-header></clickable-header>`,
    });
    expect(page.root).toEqualHtml(`
      <clickable-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clickable-header>
    `);
  });
});
