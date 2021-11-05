import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarvelSeriesListagemComponent } from "./containers/marvel-series-listagem/marvel-series-listagem.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'marvel-cosmics'
            },
            {
                path: '',
                component: MarvelSeriesListagemComponent

            },

        ]
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarvelSeriesRoutingModule {

}