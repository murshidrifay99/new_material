import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableService } from '../Service/table.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.component.html',
  styleUrls: ['./create-row.component.css']
})
export class CreateRowComponent implements OnInit{
  ref: any;
  data: any;
  myform!:FormGroup
  
  constructor(private buildr: FormBuilder,private tableService: TableService) {
  }
  ngOnInit(): void {
  this.myform = this.buildr.group({
    number: this.buildr.control(''),
    name: this.buildr.control(''),
    atomic_mass: this.buildr.control(''),
    symbol: this.buildr.control(''),
    phase: this.buildr.control(''),
    block: this.buildr.control(''),
    melting_point: this.buildr.control(''),
    discovered_date:this.buildr.control('')
  });
  }
  closedata() {
    this.ref.close('Closed using function');
  }
  

Saveuser() {
  return this.tableService.saveData(this.myform.value).subscribe(res => {
    console.log(res);
    window.location.href="/home";
  });
}
}
