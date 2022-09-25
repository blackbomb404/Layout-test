import { Component, OnInit } from '@angular/core';
import { IMusicNews } from 'src/app/models/IMusicNews';
import { INews } from 'src/app/models/INews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: INews[] = [
    {
      title: 'ANPG e parceiros do bloco 48 investem USD 1.4 milhões em projectos socias',
      author: 'Mariano Fonseca',
      postDate: 'há 10 minutos',
      imagePath: 'assets/images/javacoding.jpg'
    },
    {
      title: 'Android Lite was released and users go crazy about it',
      author: 'Mariano Fonseca',
      postDate: 'há 40 minutos',
      imagePath: 'assets/images/images (2).jpg'
    },
    {
      title: 'Android Lite was released and users go crazy about it',
      author: 'Mariano Fonseca',
      postDate: 'há 40 minutos',
      imagePath: 'assets/images/images (2).jpg'
    },
    {
      title: 'Android Lite was released and users go crazy about it',
      author: 'Mariano Fonseca',
      postDate: 'há 40 minutos',
      imagePath: 'assets/images/images (2).jpg'
    },
    {
      title: 'Android Lite was released and users go crazy about it',
      author: 'Mariano Fonseca',
      postDate: 'há 40 minutos',
      imagePath: 'assets/images/images (2).jpg'
    }
  ]
  topNews: INews[] = [
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      postDate: 'há 10 minutos',
      imagePath: 'assets/images/top-new1.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      postDate: 'há 10 minutos',
      imagePath: 'assets/images/top-new2.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      postDate: 'há 10 minutos',
      imagePath: 'assets/images/top-new3.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      postDate: 'há 10 minutos',
      imagePath: 'assets/images/top-new4.png'
    }
  ]
  private musicViewsIconPath = 'assets/icons/views.png';
  private musicCommentsIconPath = 'assets/icons/comments.png';
  private entertainmentViewsIconPath = 'assets/icons/views-metal.png';
  private entertainmentCommentsIconPath = 'assets/icons/comments-metal.png';

  musicNews: IMusicNews[] = [
    {
      thumbnailPath: 'assets/images/yellow-coat-guy.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-bg.png',
      title: 'Gemidos de Três Mulheres: Após sucesso na estreia em Luanda Light Life leva peça...',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/painted-wall.png',
      title: '7º aniversário do Centrooptico dá centenas de prémios diários',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/rainbow-dust.png',
      title: 'Selecionamos as notícias com maiores destaques para você',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/orange-item.png',
      title: 'Talento de Jessé Manuel encanta Embaixador de Portugal em Angola',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-lollipop.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    }
  ]
  entertainmentNews: IMusicNews[] = [
    {
      thumbnailPath: 'assets/images/yellow-coat-guy.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-bg.png',
      title: 'Gemidos de Três Mulheres: Após sucesso na estreia em Luanda Light Life leva peça...',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/painted-wall.png',
      title: '7º aniversário do Centrooptico dá centenas de prémios diários',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/rainbow-dust.png',
      title: 'Selecionamos as notícias com maiores destaques para você',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/orange-item.png',
      title: 'Talento de Jessé Manuel encanta Embaixador de Portugal em Angola',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-lollipop.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    }
  ]

  lifestyleNews: IMusicNews[] = [
    {
      thumbnailPath: 'assets/images/yellow-coat-guy.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-bg.png',
      title: 'Gemidos de Três Mulheres: Após sucesso na estreia em Luanda Light Life leva peça...',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/painted-wall.png',
      title: '7º aniversário do Centrooptico dá centenas de prémios diários',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/rainbow-dust.png',
      title: 'Selecionamos as notícias com maiores destaques para você',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/orange-item.png',
      title: 'Talento de Jessé Manuel encanta Embaixador de Portugal em Angola',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/pink-lollipop.png',
      title: 'Chery chega a Angola para dinamizar vendas do sector automóvel',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        since: ' - há 10 minutos',
        views: 15,
        comments: 15
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design' +
        'diferenciado e motores de última geração. A gama SUV, representada...'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
