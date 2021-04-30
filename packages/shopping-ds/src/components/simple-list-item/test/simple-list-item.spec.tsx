import { newSpecPage } from '@stencil/core/testing';
import { SimpleListItem } from '../simple-list-item';

describe('simple-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleListItem],
      html: `<simple-list-item></simple-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-list-item>
    `);
  });
});
