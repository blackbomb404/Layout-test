import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit {

  numberOfItemsPerSlide: number = 3;
  carouselData = [{
      thumbnailPath: 'assets/images/gilmario.jpg',
      title: 'Popularidade de Gilmário dispara em Portugal: Artista angolano chega ao FOX Comedy',
      authorName: '@mariano_fonseca',
      since: 'há 10 minutos',
      tag: 'entretenimento'
    },{
      thumbnailPath: 'assets/images/gilmario.jpg',
      title: 'Popularidade de Gilmário dispara em Portugal: Artista angolano chega ao FOX Comedy',
      authorName: '@mariano_fonseca',
      since: 'há 10 minutos',
      tag: 'entretenimento'
    }
  ]

  @ViewChild('carousel')
  carousel!: ElementRef;

  @ViewChild('slides')
  slides!: ElementRef;

  @ViewChild('trackers')
  trackers!: ElementRef;

  carouselNative!: HTMLElement;

  slidesNative!: HTMLElement;
  slidesAmount!: number;

  trackersNative!: HTMLElement;

  currentItemIndex: number = 0;
  carouselCurrentWidth!: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carouselNative = this.carousel.nativeElement as HTMLElement;
    this.slidesNative = this.slides.nativeElement as HTMLElement;
    this.trackersNative = this.trackers.nativeElement as HTMLElement;
    this.slidesAmount = (this.slides.nativeElement as HTMLElement).childElementCount;


    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.carouselCurrentWidth = entry.contentRect.width;

        this.slidesNative.classList.add('no-transition');
        this.moveToSlide((this.carouselCurrentWidth + 32) * this.currentItemIndex);
        setTimeout(() => {
            this.slidesNative.classList.remove('no-transition');
        }, 50);
    })
  });
  observer.observe(this.carouselNative);
  }

  previousSlide(){
    if(this.currentItemIndex > 0){
      // slides.scrollTo({left: (carouselCurrentWidth * currentItemIndex--) - carouselCurrentWidth, behavior: 'smooth'});
      this.moveToSlide(((this.carouselCurrentWidth + 32) * this.currentItemIndex--) - (this.carouselCurrentWidth + 32));
    }
  }

  nextSlide(){
    if(this.currentItemIndex + 1 < this.slidesNative.childElementCount){
      // slides.scrollTo({left: carouselCurrentWidth * ++currentItemIndex, behavior: 'smooth'});
      this.moveToSlide((this.carouselCurrentWidth + 32) * ++this.currentItemIndex);
    }
  }

  trackersClick(event: Event){
    const target = event.target as HTMLElement;
    if(target.classList.contains('tracker') && !target.classList.contains('active')){

      this.currentItemIndex = Array.from(this.trackersNative.children).indexOf(target);
      this.moveToSlide((this.carouselCurrentWidth + 32) * this.currentItemIndex);
    }
  }

  private moveToSlide(amountToMove: number){
    this.slidesNative.style.transform = `translateX(-${amountToMove}px)`;
    this.trackersNative.querySelector('.active')?.classList.remove('active');
    this.trackersNative.children[this.currentItemIndex]?.classList.add('active');
  }

  arrayOfSize(size: number) : Array<number> {
    return new Array(size).fill(0);
  }

  getNumberOfSlidesAsArray() : Array <number> {
    const amountOfSlides: number = Math.ceil(this.carouselData.length / this.numberOfItemsPerSlide)
    return this.arrayOfSize(amountOfSlides);
  }

  getNumberOfItemsPerSlideAsArray(){
    return this.arrayOfSize(this.numberOfItemsPerSlide);
  }

}
