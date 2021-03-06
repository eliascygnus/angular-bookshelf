import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { BookService } from './book.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { GenreComponent } from './genre/genre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books/:bookId', component: BookComponent },
  { path: 'authors/:authorId', component: AuthorComponent },
  { path: 'genres/:genreId', component: GenreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    AuthorComponent,
    BookComponent,
    AuthorListComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NgbModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
