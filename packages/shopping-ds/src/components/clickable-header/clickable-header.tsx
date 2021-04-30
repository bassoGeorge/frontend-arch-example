import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'clickable-header',
  styleUrl: 'clickable-header.css',
  shadow: true,
})
export class ClickableHeader {

  @Prop() level: number;

  render() {
    return (
      <Host><a href=""><slot name="text"></slot></a></Host>
    );
  }

}

