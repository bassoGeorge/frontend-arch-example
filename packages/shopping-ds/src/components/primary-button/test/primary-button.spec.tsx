import { newSpecPage } from '@stencil/core/testing';
import { PrimaryButton } from '../primary-button';

describe('primary-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PrimaryButton],
      html: `<primary-button></primary-button>`,
    });
    expect(page.root).toEqualHtml(`
      <primary-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </primary-button>
    `);
  });
});
