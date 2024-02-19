import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostsComponent } from "./posts.component";
import { PostsGridComponent } from "./posts-grid/posts-grid.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, BrowserAnimationsModule ],
    declarations: [ PostsComponent, PostsGridComponent ],
    exports: [ PostsComponent ]
})

export class PostsModule { }