import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private db: AngularFireDatabase){}
  addForm(data: NgForm){
    this.db.object("/machines").set(data.value);
    alert('บันทึกเรียบร้อยแล้วจ้า');
  }
}
