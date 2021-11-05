import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarvelCharacterListagemComponent } from "./containers/marvel-character-listagem/marvel-character-listagem.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'marvel-character'
            },
            {
                path: '',
                component: MarvelCharacterListagemComponent,

            },

        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarvelCharacterRoutingModule {

}