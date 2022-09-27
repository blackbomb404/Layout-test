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
      since: ' - há 10 minutos',
      imagePath: 'assets/images/colored-roses.png'
    },
    {
      title: 'Em Agosto os filmes de acção são no canal Mundo FOX',
      author: 'Mariano Fonseca',
      since: ' - há 40 minutos',
      imagePath: 'assets/images/silver-house.png'
    },
    {
      title: 'Fidelidade Angola lança o primeiro seguro automóvel 100% online',
      author: 'Mariano Fonseca',
      since: ' - há 13 minutos',
      imagePath: 'assets/images/rainbow-wall.png'
    },
    {
      title: 'Caetano promove 1ª Feira Automóvel nas Galerias Patriota',
      author: 'Mariano Fonseca',
      since: ' - há 17 horas',
      imagePath: 'assets/images/white-car.png'
    },
    {
      title: 'Caetano promove 1ª Feira Automóvel nas Galerias Patriota',
      author: 'Mariano Fonseca',
      since: ' - há 5 horas',
      imagePath: 'assets/images/white-car.png'
    }
  ]
  topNews: INews[] = [
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      since: 'há 10 minutos',
      imagePath: 'assets/images/top-new1.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      since: 'há 10 minutos',
      imagePath: 'assets/images/top-new2.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      since: 'há 10 minutos',
      imagePath: 'assets/images/top-new3.png'
    },
    {
      title: 'Paulo Alves em alta pela terceira vez no “Sunset of Dreams”',
      since: 'há 10 minutos',
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

  marks: IMusicNews[] = [
    {
      thumbnailPath: 'assets/images/sexy-blonde-woman.png',
      title: 'União Europeia e CFK unem esforços para promover o empreendedorismo em Angola',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/jumping-on-road-guy.png',
      title: 'Depois da notoriedade na série “Bridgerton”, Regé-Jean Page é um dos atores mais cobiçados...',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/yellow-clothes-girl.png',
      title: 'Preto Show anima noite de Hip Hop e House Music no SSB',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    }
  ]

  opinions: IMusicNews[] = [
    {
      thumbnailPath: 'assets/images/sexy-blonde-woman.png',
      title: 'União Europeia e CFK unem esforços para promover o empreendedorismo em Angola',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/jumping-on-road-guy.png',
      title: 'Depois da notoriedade na série “Bridgerton”, Regé-Jean Page é um dos atores mais cobiçados...',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    },
    {
      thumbnailPath: 'assets/images/yellow-clothes-girl.png',
      title: 'Preto Show anima noite de Hip Hop e House Music no SSB',
      publishingDetails: {
        authorPhotoPath: 'assets/images/smilling-1.jpg',
        authorName: '@mariano_fonseca',
        postDate: 'Agosto 18, 2022'
      },
      contentBody: 'Modernos e com nova propulsão, os “Chery Tiggo Pro” apresentam um design diferenciado e motores de última geração. A gama SUV, representada...'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
