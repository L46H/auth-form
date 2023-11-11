import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signedin$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signedin$ = this.authService.signedin$;
  }
}
