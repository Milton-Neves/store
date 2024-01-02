import { Component, ViewChild } from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule,InputTextModule,ButtonModule,CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items!: MenuItem[];

  showEndComponent: boolean = false;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.urlShot.subscribe(it =>
      this.showEndComponent = it
    )

    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME, routerLink:'home'
      },
      {
        label: 'Produto',
        icon: PrimeIcons.SHOPPING_BAG,
        items: [
          { label: 'Lista', icon: PrimeIcons.LIST, routerLink: 'listagem' },
          { label: 'Cadastrar', icon: PrimeIcons.SAVE, routerLink: 'cadastro' }
        ]
      }
    ];
  }
}
