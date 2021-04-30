import { newSpecPage } from '@stencil/core/testing';
import { DisplayText } from '../display-text';

describe('display-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DisplayText],
      html: `<display-text></display-text>`,
    });
    expect(page.root).toEqualHtml(`
      <display-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </display-text>
    `);
  });
});
