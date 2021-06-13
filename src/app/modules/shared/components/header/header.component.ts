import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  userLogout() {
    const res = this.authService.userLogout();
    if(res) {
      this.router.navigate(['/'])
    }
  }

}
