import { newSpecPage } from '@stencil/core/testing';
import { IconButtonWithBubble } from '../icon-button-with-bubble';

describe('icon-button-with-bubble', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconButtonWithBubble],
      html: `<icon-button-with-bubble></icon-button-with-bubble>`,
    });
    expect(page.root).toEqualHtml(`
      <icon-button-with-bubble>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </icon-button-with-bubble>
    `);
  });
});
