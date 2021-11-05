import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations:[
        HomeComponent,
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        HomeRoutingModule
    ]
})
export class HomeModule{

}