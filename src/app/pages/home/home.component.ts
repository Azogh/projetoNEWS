import { Component, OnInit } from '@angular/core';
import { NewsService } from '@services/news.service';  
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randomArticle: any;  // Propriedade para armazenar a notícia aleatória
newsArticles: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (data) => {
        if (data.articles.length > 0) {
          this.randomArticle = this.getRandomArticle(data.articles);
        }
      },
      (error) => {
        console.error('Erro ao buscar notícias', error);
      }
    );
  }

  // Função para selecionar uma notícia aleatória
  private getRandomArticle(articles: any[]): any {
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  }
}
