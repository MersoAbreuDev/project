import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';
import { EstabelecimentoFisicaFormComponent } from './estabelecimento-fisica-form/estabelecimento-fisica-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponetesCustomModule } from '../../../shared/componentes-custom/componetes-custom.module';
import { CepMaskDirective } from '../../../shared/directives/cep-mask.directive';
import { EstabelecimentoTableComponent } from './estabelecimento-table/estabelecimento-table.component';
import { EstabelecimentoDetailComponent } from './estabelecimento-detail/estabelecimento-detail.component';

@NgModule({
  declarations: [
    EstabelecimentoFisicaFormComponent,
    CepMaskDirective,
    EstabelecimentoTableComponent,
    EstabelecimentoDetailComponent

  ],
  imports: [
    CommonModule,
    EstabelecimentoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponetesCustomModule
  ]
})
export class EstabelecimentoModule { }
