// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsArticle, NewsCrudService } from '../../services/news-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsArticles$: Observable<NewsArticle[]>;

  constructor(private newsCrudService: NewsCrudService) {}

  ngOnInit(): void {
    this.newsArticles$ = this.newsCrudService.getAllNews();
  }

  // Exemplo de método para adicionar uma notícia
  addNews(article: NewsArticle): void {
    this.newsCrudService.createNews(article).subscribe();
  }

  // Exemplo de método para excluir uma notícia
  deleteNews(id: string): void {
    this.newsCrudService.deleteNews(id).subscribe();
  }
}
