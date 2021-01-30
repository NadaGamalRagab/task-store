import { CommonModule } from "@angular/common";
import { NgModuleResolver } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
    declarations: [
        DropdownComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [DropdownComponent]
})
export class SharedModule{ }