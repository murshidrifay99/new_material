import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableService } from '../Service/table.service';
import { map, Observable, startWith } from 'rxjs';
import { colorentity } from '../model/para';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
 
  })
export class AutocompleteComponent implements OnInit {

  selectedvalue=0;
  startvalue=-3000;
  endvalue=4000;
  colorarray = ['Red', 'Green', 'Yellow']
  filteroptions!: Observable<string[]>
  formcontrol = new FormControl('');

  colorarraylist!: colorentity[];
  filteroptionslist!: Observable<colorentity[]>

  constructor(private tableService: TableService) {
    this.colorarraylist = this.tableService.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroptions = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )

    this.filteroptionslist = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this.list(value || ''))
    )
  }

  // private _FILTER(value: string): string[] {
  //   const searchvalue = value.toLocaleLowerCase();
  //   return this.colorarray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
  // }

  private list(value: string): colorentity[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarraylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) || 
    option.code.toLocaleLowerCase().includes(searchvalue));
  }


}
