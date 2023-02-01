import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ListarMoedasComponent } from './componentes/listar-moedas/listar-moedas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ConversorComponent } from './componentes/conversor/conversor.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
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
    MoedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
