import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { StorageService } from './_services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'admindashboard';
//   constructor(private elementRef: ElementRef,  public  _router: Router) { }

//   ngOnInit() {

//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = "../assets/js/main.js";
//     this.elementRef.nativeElement.appendChild(s);
//   }
// }
private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private elementRef: ElementRef,  public  _router: Router, private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}