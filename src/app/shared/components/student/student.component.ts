import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { stdArr } from '../../const/std';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @ViewChild("fname") fname !: ElementRef;
  @ViewChild("lname") lname !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("contact") contact !: ElementRef;

  stdArray : Array<Istd> = stdArr;

  constructor() { }

  ngOnInit(): void {
  }

  onStudentBtn(){
    let obj = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contact.nativeElement.value
    }

    stdArr.push(obj);
    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = ''

  }

}
