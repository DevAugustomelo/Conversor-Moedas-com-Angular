import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './componentes/conversor/conversor.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { ListarMoedasComponent } from './componentes/listar-moedas/listar-moedas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'listagem', component: ListarMoedasComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'historico', component: HistoricoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
