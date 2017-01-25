import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "../home/home.component";
import {ContactComponent} from "../contact/contact.component";
import {Routes} from "@angular/router";
import {OfferComponent} from "../offer/offer.component";


export const dankabrekAppRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'offer', component: OfferComponent},

];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: []
})
export class RoutingModuleModule {
}
