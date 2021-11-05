import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MarvelSeriesRoutingModule } from "./marvel-series-routing.module";
import { MarvelSeriesListComponent } from './components/marvel-series-list/marvel-series-list.component';
import { MarvelSeriesListagemComponent } from './containers/marvel-series-listagem/marvel-series-listagem.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MarvelSeriesListComponent,
        MarvelSeriesListagemComponent
    ],
    imports: [
        CommonModule,
        MarvelSeriesRoutingModule,
        SharedModule
    ]
})
export class MarvelSeriesModule {

}