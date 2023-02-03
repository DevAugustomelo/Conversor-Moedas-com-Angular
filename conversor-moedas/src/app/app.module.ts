import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MaterialModule } from './modules/material.module';


// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ListarMoedasComponent } from './componentes/listar-moedas/listar-moedas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ConversorComponent } from './componentes/conversor/conversor.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import { MoedaComponent } from './componentes/moeda/moeda.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListarMoedasComponent,
    PrincipalComponent,
    ConversorComponent,
    HistoricoComponent,
    TabelaComponent,
    MoedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
