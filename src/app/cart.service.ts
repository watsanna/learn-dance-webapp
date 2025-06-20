import { Injectable } from '@angular/core';


export interface CartItem {
  course: string;
  level: string;
  cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  // ✅ Add to Cart function
  addToCart(course: string, level: string, cost: number): void {
    const newItem: CartItem = { course, level, cost };
    this.cart.push(newItem)
    console.log('Current Cart:', this.cart);
    

    // Optional: prevent duplicates
    const exists = this.cart.some(
      item => item.course === course && item.level === level && item.cost === cost
    );

    if (!exists) {
      this.cart.push(newItem);
      console.log(`🛒 Added ${course} (${level}) (${cost}) to cart.`);
    } else {
      console.log(`⚠️ ${course} (${level}) (${cost}) already in cart.`);
    }
  }

  // Get all cart items
  getCart(): CartItem[] {
    return [...this.cart]; // return copy
  }

  // Remove item
  removeFromCart(course: string, level: string, cost: number): void {
    this.cart = this.cart.filter(
      item => !(item.course === course && item.level === level && item.cost === cost)
    );
  }

  // Clear cart
  clearCart(): void {
    this.cart = [];
  }

  getTotalCost(): number {
  return this.cart.reduce((sum, item) => sum + item.cost, 0);
}
  getItemCount(): number {
    return this.cart.length;
  }
  isEmpty(): boolean {
    return this.cart.length === 0;
  }
}
