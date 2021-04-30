import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-list',
  styleUrl: 'simple-list.css',
  shadow: true,
})
export class SimpleList {

  render() {
    return (
      <Host>
        <ol>
          <slot></slot>
        </ol>
      </Host>
    );
  }

}

