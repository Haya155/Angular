import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { DirectivesDemo } from './directives-demo/directives-demo';

@NgModule({
  declarations: [
    App,
    Header,
    Navbar,
    ProductList,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductDetails,
    ShoppingCart,
    DirectivesDemo
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
