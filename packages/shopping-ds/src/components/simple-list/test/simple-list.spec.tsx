import { newSpecPage } from '@stencil/core/testing';
import { SimpleList } from '../simple-list';

describe('simple-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleList],
      html: `<simple-list></simple-list>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-list>
    `);
  });
});
