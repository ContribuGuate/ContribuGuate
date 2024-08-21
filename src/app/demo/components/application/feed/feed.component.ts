import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  stories = [
    { image: 'path/to/story1.jpg', name: 'Pandana' },
    { image: 'path/to/story2.jpg', name: 'Ben Schade' },
    { image: 'path/to/story3.jpg', name: 'Shulia' },
    // más historias
  ];

  posts = [
    {
      profilePic: 'path/to/profile1.jpg',
      username: 'Masadur Rahman',
      location: 'Bremen, Germany',
      description: 'Apply for a feature following the link in our bio...',
      image: 'path/to/post1.jpg',
      likes: 281,
    },
    {
      profilePic: 'path/to/profile2.jpg',
      username: 'Organization 2',
      location: 'Berlin, Germany',
      description: 'Check out this amazing place...',
      image: 'path/to/post2.jpg',
      likes: 152,
    }
    // más publicaciones
  ];

  items:any[] = [
    {label: 'Feed', icon: 'pi pi-home', command: () => { /* lógica para Feed */ }},
    {label: 'Explore', icon: 'pi pi-compass'},
    {label: 'My Favorites', icon: 'pi pi-heart'},
    {label: 'IG TV', icon: 'pi pi-play-circle'},
    {label: 'Stats', icon: 'pi pi-chart-line'},
    {label: 'Settings', icon: 'pi pi-cog'},
    {label: 'Log out', icon: 'pi pi-sign-out'}
  ];
  constructor(){}
}
