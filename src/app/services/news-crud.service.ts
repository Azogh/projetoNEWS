// src/app/services/news-crud.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsArticle {
  id?: string; // Adiciona um ID para facilitar a atualização e exclusão
  title: string;
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsCrudService {
  private newsArticles: NewsArticle[] = []; // Armazena as notícias localmente

  constructor() {}

  // Criar uma notícia
  createNews(article: NewsArticle): Observable<NewsArticle> {
    article.id = (Math.random() * 1000).toString(); // Gera um ID único para a notícia
    this.newsArticles.push(article);
    return of(article);
  }

  // Ler todas as notícias
  getAllNews(): Observable<NewsArticle[]> {
    return of(this.newsArticles);
  }

  // Ler uma notícia pelo ID
  getNewsById(id: string): Observable<NewsArticle | undefined> {
    const article = this.newsArticles.find(news => news.id === id);
    return of(article);
  }

  // Atualizar uma notícia
  updateNews(id: string, updatedArticle: Partial<NewsArticle>): Observable<NewsArticle | undefined> {
    const index = this.newsArticles.findIndex(news => news.id === id);
    if (index > -1) {
      this.newsArticles[index] = { ...this.newsArticles[index], ...updatedArticle };
      return of(this.newsArticles[index]);
    }
    return of(undefined);
  }

  // Excluir uma notícia
  deleteNews(id: string): Observable<boolean> {
    const index = this.newsArticles.findIndex(news => news.id === id);
    if (index > -1) {
      this.newsArticles.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
