import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {

  constructor() { }
  libraryData=
  [{"book_name":"ramayan",
  "author":"vathmiki",
  "date":"2022-10-15",
  "volume":"18"}]

  ngOnInit(): void {
  }

}
