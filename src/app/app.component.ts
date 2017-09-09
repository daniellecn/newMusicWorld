import { UserService } from './Services/user.service';
import { User } from './Modules/user';
import { Component, OnInit } from '@angular/core';

interface QueryResponse {
  userQueries: { me?: User };
}
@Component({
  selector: 'my-app',
  templateUrl: './Views/app.component.html',
  styleUrls: ['./Views/app.component.css']
})
export class AppComponent implements OnInit {
  private user: User;
  constructor(private userService: UserService) { }

  public ngOnInit(): void {
    this.userService.connectedUser()
      .subscribe(({ data }) => {
        this.user = data.userQueries.me;
      });
  }
}
