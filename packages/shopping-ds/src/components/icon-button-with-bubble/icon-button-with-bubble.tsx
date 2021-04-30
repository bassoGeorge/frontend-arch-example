import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'icon-button-with-bubble',
  styleUrl: 'icon-button-with-bubble.css',
  shadow: true,
})
export class IconButtonWithBubble {

  @Prop() bubbleText: string;

  render() {
    return (
      <Host>
        <button>{this.bubbleText}</button>
      </Host>
    );
  }

}
