import { NgModule } from "@angular/core";
import { MarvelCharacterRoutingModule } from "./marvel-character-routing.module";
import { MarvelCharacterListComponent } from './components/marvel-character-list/marvel-character-list.component';
import { MarvelCharacterListagemComponent } from './containers/marvel-character-listagem/marvel-character-listagem.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MarvelCharacterListComponent,
        MarvelCharacterListagemComponent
    ],
    imports: [
        CommonModule,
        MarvelCharacterRoutingModule
    ]
})
export class MarvelCharacterModule {

}