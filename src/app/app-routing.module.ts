import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutosComponent } from './routers/listagem-produtos/listagem-produtos.component';
import { CadastroProdutosComponent } from './routers/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './routers/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroProdutosComponent},
  { path: 'listagem', component: ListagemProdutosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
