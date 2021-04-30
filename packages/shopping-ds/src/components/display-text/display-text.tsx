import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'display-text',
  styleUrl: 'display-text.css',
  shadow: true,
})
export class DisplayText {

  @Prop() level: number;
  
  @Prop() text: string;

  render() {
    return (
      <Host>
        <span>{this.text}</span>
      </Host>
    );
  }

}

