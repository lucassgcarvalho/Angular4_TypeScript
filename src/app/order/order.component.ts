import { RadioOption } from '../shared/radio/radio.module';
import { Component, OnInit, Input, Injectable} from '@angular/core';
import { CartItem } from '../restaurants/shopping-cart/shopping-cart-item.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
@Injectable()
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;


  formGroup: FormGroup;

  deliveryShippMock: number = 7;

  @Input() address: string;
  @Input() number: string;
  @Input() optional: string;

  paymentOptions: RadioOption[] = [
    { label: 'Cartão Crédito', value: 'CRED' },
    { label: 'Cartão Débito', value: 'DEB' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  static equasTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return { emailsDoesNotMatch: true };
    }
    return undefined;
  }

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      optionalAddress: this.formBuilder.control(''),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern) ]),
      paymentOption: this.formBuilder.control('', [Validators.required]),
    }, {validator: OrderComponent.equasTo});
  }



  getItemsValue(): number {
    return this.orderService.getItemsValues();
  }

  increaseQty(cart: CartItem) {
    this.orderService.increaseQty(cart);
  }

  decreaseQty(cart: CartItem) {
    this.orderService.decreaseQty(cart);
  }

  remove(cart: CartItem) {
    this.orderService.remove(cart);
  }

  getCartItems(): CartItem[] {
    return this.orderService.getCartItems();
  }

  checkOrder(order: Order) {
    order.orderItems = this.getCartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      // console.log(`Compra concluída ${orderId}`);
      this.orderService.clear();
    } );
  }


}
