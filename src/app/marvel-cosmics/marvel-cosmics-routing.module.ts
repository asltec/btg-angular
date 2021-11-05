import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarvelCosmicsListagemComponent } from "./containers/marvel-cosmics-listagem/marvel-cosmics-listagem.component";

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
                component: MarvelCosmicsListagemComponent

            },

        ]
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarvelCosmicsRoutingModule {

}