import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './items.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ItemsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemsService]
})
export class AppModule { }
