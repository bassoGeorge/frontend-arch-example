import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'product-rating',
  styleUrl: 'product-rating.css',
  shadow: true,
})
export class ProductRating {
  /**
   * Rating
   */
  @Prop() rating: number;

  /**
   * Number of ratings
   */
  @Prop() ratingCount: number;

  render() {
    return (
      <div>{this.rating}/{this.ratingCount}</div>
    );
  }

}

