import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-list-item',
  styleUrl: 'simple-list-item.css',
  shadow: true,
})
export class SimpleListItem {

  render() {
    return (
      <Host>
        <li>
          <slot></slot>
        </li>
      </Host>
    );
  }

}

