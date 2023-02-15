import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AcoesComponent } from './componentes/historico/acoes/acoes.component';
import { SharedModule } from './modules/shared.module';




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
    AcoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
