import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MarvelCosmicsRoutingModule } from "./marvel-cosmics-routing.module";
import { MarvelCosmicsListagemComponent } from './containers/marvel-cosmics-listagem/marvel-cosmics-listagem.component';
import { MarvelCosmicsListComponent } from './components/marvel-cosmics-list/marvel-cosmics-list.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MarvelCosmicsListagemComponent,
        MarvelCosmicsListComponent
    ],
    imports: [
        CommonModule,
        MarvelCosmicsRoutingModule,
        SharedModule
    ]
})
export class MarvelCosmicsModule {

}