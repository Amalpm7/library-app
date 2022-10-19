import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  constructor() { }
  book_name=""
  author=""
  date=""
  volume=""
  readvalue=()=>{
    let data={
      "book_name":this.book_name,
      "author":this.author,
      "date":this.date,
      "volume":this.volume
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
