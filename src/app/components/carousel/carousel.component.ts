import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

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

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.carouselNative = this.carousel.nativeElement as HTMLElement;
    this.slidesNative = this.slides.nativeElement as HTMLElement;
    this.trackersNative = this.trackers.nativeElement as HTMLElement;
    this.slidesAmount = (this.slides.nativeElement as HTMLElement).childElementCount;

    // setTimeout(() => {
    //   console.clear();
    //   console.log('carouselNative :>> ', this.carouselNative);
    //   console.log('slidesNative :>> ', this.slidesNative);
    //   console.log('trackersNative :>> ', this.trackersNative);
    // }, 500)

    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
          this.carouselCurrentWidth = entry.contentRect.width;

          this.slidesNative.scrollTo({left: this.carouselCurrentWidth * this.currentItemIndex, behavior: 'auto'});
      })
  });
  observer.observe(this.carouselNative);
  }

  previousSlide(){
    if(this.currentItemIndex > 0){

      this.slidesNative.scrollTo({left: (this.carouselCurrentWidth * this.currentItemIndex--) - this.carouselCurrentWidth, behavior: 'smooth'});
      this.clearTrackers();
      this.trackersNative.children[this.currentItemIndex].classList.add('active');
    }
  }

  nextSlide(){
    if(this.currentItemIndex + 1 < this.slidesNative.childElementCount){
      this.slidesNative.scrollTo({left: this.carouselCurrentWidth * ++this.currentItemIndex, behavior: 'smooth'});
      this.clearTrackers();
      this.trackersNative.children[this.currentItemIndex].classList.add('active');
    }
  }

  clearTrackers(){
    const trackersArray = Array.from((this.trackers.nativeElement as HTMLElement).children);
    for(const tracker of trackersArray){
      tracker.classList.contains('active') && tracker.classList.remove('active');
    }
  }

  arrayOfSize(size: number){
    return new Array(size).fill(0);
  }

  trackersClick(event: Event){
    console.log(event.target);
    const target = event.target as HTMLElement;
    if(target.classList.contains('tracker') && !target.classList.contains('active')){
        this.clearTrackers();

        this.currentItemIndex = Array.from(this.trackersNative.children).indexOf(target);

        this.slidesNative.scrollTo({left: this.carouselCurrentWidth * this.currentItemIndex, behavior: 'smooth'});
        this.trackersNative.children[this.currentItemIndex].classList.add('active');

        target.classList.add('active');
    }
  }

}