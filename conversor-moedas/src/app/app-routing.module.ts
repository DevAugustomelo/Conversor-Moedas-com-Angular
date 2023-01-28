import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMoedasComponent } from './componentes/listar-moedas/listar-moedas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'listagem', component: ListarMoedasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
