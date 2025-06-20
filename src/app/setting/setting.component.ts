import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-setting',
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

  constructor(private authService: AuthService) {
    
  }

  user = {
    name: 'Test User',
    email: 'Testuser@example.com'
  };
}
