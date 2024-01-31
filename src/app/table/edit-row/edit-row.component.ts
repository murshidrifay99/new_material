import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TableService } from '../Service/table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.css']
})
export class EditRowComponent implements OnInit{
  ref: any;


  constructor(private buildr: FormBuilder,private tableService: TableService,private router: ActivatedRoute) {
  }  
  editform = this.buildr.group({
    number: this.buildr.control(''),
    name: this.buildr.control(''),
    atomic_weight: this.buildr.control(''),
    symbol: this.buildr.control(''),
    phase: this.buildr.control(''),
    block: this.buildr.control(''),
    melting_point: this.buildr.control(''),
    discovered_date:this.buildr.control('')
  });
 

  ngOnInit() {
    // console.log(this.router.snapshot.params['id']);
    this.tableService.getCode(this.router.snapshot.params['id']).subscribe((res:any) => {
      console.log(res);
      this.editform = this.buildr.group({
        number: this.buildr.control(res['number']),
        name: this.buildr.control(res['name']),
        atomic_weight: this.buildr.control(res['atomic_weight']),
        symbol: this.buildr.control(res['symbol']),
        phase: this.buildr.control(res['phase']),
        block: this.buildr.control(res['block']),
        melting_point: this.buildr.control(res['melting_point']),
        discovered_date:this.buildr.control(res['discovered_date'])
      });
    });
  }

  
  closedata() {
    this.ref.close('Closed using function');
  }

  updateTable() {
    console.log(this.editform.value);
    return this.tableService.updateData(this.router.snapshot.params['id'],this.editform.value).
    subscribe((res) => {
      console.log(res);
      window.location.href="/home";
  });
}
}

