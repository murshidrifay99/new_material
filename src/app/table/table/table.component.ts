import { Component, ViewChild } from '@angular/core';
import { TableService } from '../Service/table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicData } from '../model/PeriodicData';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent{

  dataSource: any;
  isDisabled=true;
  filterValue !: PeriodicData[];
  
  displayedColumns: string[] = ['number', 'name', 'atomic_weight', 'symbol','phase','block','melting_point','date','action'];
  clickedRows = new Set<PeriodicData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  
  constructor (private tableService: TableService){
    this.fetchData();

  }
  
  Filterchange(val: Event) {
      const filterValue = (val.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
  }

  clicked(trow:any){
    this.clickedRows.clear();
    this.clickedRows.add(trow);
    this.isDisabled=false;
  }

  deleteRow(list: any){
    
    return this.tableService.deleteData(list.id).subscribe((resp) =>{
      window.location.reload();
    });
  }

//   disableBtn()
//   {
//   if (this.selectedFromTable.length > 0) {
//     this.disableBtn = false;
//   } else {
//     this.disableBtn = true;
//   }
// }

  fetchData(){
    return this.tableService.getdata().subscribe(res => {
     // alert(resp)
     this.dataSource = new MatTableDataSource<PeriodicData>(res);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;

    })

  }

  // ngAfterViewInit() {
  //   console.log("after view");
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.Sort;

  // }

  // announceSortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this.liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  
 }
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


