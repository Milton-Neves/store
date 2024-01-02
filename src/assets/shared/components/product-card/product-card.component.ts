import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() productInfo: Product = {
    id: 0,
    name: 'Nome',
    price: 0,
    description: 'sem descrição',
    quantity: 0,
    image: '/assets/shared/images/img-vazia.png'
  };

  ngOnInit(){

  }

}
