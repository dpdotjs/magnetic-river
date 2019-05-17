import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-name-carousel',
  template: `
    <div>
      David Pierce is a 
      <span class="appTitleRotation">
        <span 
          class="appCurrentTitle" 
          [@scrollTitleCurrent]="currentAnimState"
          (@scrollTitleCurrent.done)="currentTitleAnimDone($event)">
          {{ currentTitle }}
        </span>
      </span>
    </div>
  `,
  styles: [`
    :host {
      overflow: hidden;
    }
  `],
  animations: [
    trigger('scrollTitleCurrent', [
      state('scrolling', style({
        opacity: 0
      })),
      state('done', style({
        opacity: 1
      })),
      transition('scrolling => done', [
        animate('0.5s')
      ])
    ]),
    trigger('scrollTitleNext', [
      state('scrolling', style({
        opacity: 0
      })),
      state('done', style({
        opacity: 1
      })),
      transition('scrolling => done', [
        animate('1.8s ease-in')
      ])
    ])
  ]
})
export class NameCarouselComponent {
  intervalSub: Subscription;
  previousTitle: string;
  currentTitle: string;

  titles = [
    'front-end engineer',
    'UI designer',
    'scrum master',
    'team facilitator'
  ]

  currentAnimState: ScrollingAnimState = 'scrolling';
  nextAnimState: ScrollingAnimState = 'scrolling';

  constructor() {
    this.currentTitle = this.titles[0]

    this.intervalSub = interval(1800).subscribe(() => console.log('dope'))
  }

  currentTitleAnimDone(event: any) {
    console.log(event)
  }

  nextTitleAnimDone(event: any) {
    console.log(event)
  }
}

export type ScrollingAnimState = 'scrolling' | 'done';