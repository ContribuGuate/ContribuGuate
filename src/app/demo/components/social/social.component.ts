import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule, StyleClassModule],
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  user = {
    name: '',
    avatarUrl: ''
  };
  noop() {
    
  }
  posts = [
    { title: 'Primera publicación', content: 'Este es el contenido de la publicación de prueba.' },
    { title: 'Segunda publicación', content: 'Este es el contenido de la publicación de prueba.' }
  ];

  ngOnInit() {
    // Simulacion de datos traidos por el back
    this.fetchUserData();
  }

  fetchUserData() {
    // Simulacion de datos traidos por el API
    this.user = {
      name: 'John Doe', // nombre
      avatarUrl: '' // avatar
    };
  }
}
