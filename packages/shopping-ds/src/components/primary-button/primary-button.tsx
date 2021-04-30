import { Component, Host, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'primary-button',
  styleUrl: 'primary-button.css',
  shadow: true,
})
export class PrimaryButton {

  @Prop() label: string;

  @Event() onClick: (event: MouseEvent) => void;

  render() {
    return (
      <Host>
        <button onClick={this.onClick}>{this.label}</button>
      </Host>
    );
  }

}
