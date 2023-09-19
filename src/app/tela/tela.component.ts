import { Component, ViewChild, ElementRef } from '@angular/core';
import { PegaService } from '../pega.service';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent {
  data: any = {};
  @ViewChild('player') player?: ElementRef;
  playing: any = {};

  constructor(
    private feed: PegaService,
  ) {}
  
  ngOnInit() {
    this.feed.load()
      .subscribe({
        next: (feed) => {
          this.data = feed;
          console.log(feed);
        },
        error: (response) => {
          console.error(response);
        },
        complete: () => {
          console.log("complete");
        }
      })
  }

  play(item: any) {
    const element = this.player?.nativeElement;
    this.stop();
    element.src = item.enclosure.link;
    element.play();
    this.playing = item.enclosure;
  }

  stop() {
    const element = this.player?.nativeElement;
    element.pause();
    element.currentTime = 0;
    element.src = "";
    this.playing = {};
  }
}