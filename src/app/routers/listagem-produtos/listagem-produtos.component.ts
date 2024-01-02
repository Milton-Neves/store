import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from 'src/assets/shared/components/product-card/product-card.component';
import { Product } from 'src/assets/shared/models/product';
import { ProductService } from 'src/assets/shared/service/product.service';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss'
})
export class ListagemProdutosComponent {

  products?: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.urlShot.next(true);

    this.productService.getAllProducts().subscribe((it:any) => {
      this.products = it.data.content;
    })
  }

  ngOnDestroy(){
    this.productService.urlShot.next(false);
  }

}
