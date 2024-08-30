import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  posts = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://picsum.photos/200/301',
      title: 'Post 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://picsum.photos/200/302',
      title: 'Post 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // ...
  ];


  constructor(public router: Router){}


  
}
