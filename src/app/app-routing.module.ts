import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table/table.component';
import { CreateRowComponent } from './table/create-row/create-row.component';
import { EditRowComponent } from './table/edit-row/edit-row.component';
import { AutocompleteComponent } from './table/autocomplete/autocomplete.component';

const routes: Routes = [
  { path: '', redirectTo:"home",pathMatch:'full'},
  { path: 'home', component: TableComponent },
  { path: 'create-component', component:CreateRowComponent},
  { path: 'edit-component/:id',component:EditRowComponent},
  { path: 'autocomplete',component:AutocompleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
