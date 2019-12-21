import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userdata: User[];
  page = 1;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any) => { console.log(data.data),
    this.userdata = data['data'], console.log(this.userdata)},
      (error) => console.log(error)
    );
  }

  toggle(){
    if( this.page == 1){
        this.page = 2;
    }else{
      this.page = 1;
    }
    this.loadData()
  }
  
  loadData(){
    console.log("In loadData")
    this.userService.getUsersByPage(this.page).subscribe(
      (data: any) => { this.userdata = data['data']},
      (error) => console.log(error)
    );
  }
}
