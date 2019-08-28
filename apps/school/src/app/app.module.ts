import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {EdenUiModule} from '@eden-apps/eden-ui';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, UserMenuComponent],
  imports: [
    BrowserModule,
    EdenUiModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
