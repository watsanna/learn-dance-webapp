

import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  // standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  get totalCost(): number {
    return this.cartService.getTotalCost();
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.course, item.level, item.cost);
    this.cartItems = this.cartService.getCart();
    console.log('💡 Loaded CartComponent from src/app/cart');

   }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
  
}

