import { Component, ViewChild } from '@angular/core';
// import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { element_list, PeriodicTable } from '../data.model';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-select-table',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatPaginatorModule],
  templateUrl: './select-table.component.html',
  styleUrl: './select-table.component.css'
})
export class SelectTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  displayedColumns: string[] = ['select', 'name', 'symbol', 'atomic_number'];
  dataSource = new MatTableDataSource<PeriodicTable>(element_list);
  selection = new SelectionModel<PeriodicTable>(true, []);

  // totalCount = 105;
  // loadedFromBackend = 100;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }


  isAllItemsSelected() {
    const selected = this.selection.selected.length;
    const totalElements = this.dataSource.data.length;
    return selected == totalElements;
  }

  selectAllToggle() {
    console.log('control came to selectall toggle')
    this.isAllItemsSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row))
  }

  onCheckboxChange(event: MatCheckboxChange, row: any) {
    console.log('data before checked', this.dataSource.data)
    this.selection.toggle(row);
    row.selectFlag = !row.selectFlag;
    // console.log(this.dataSource.data)
  }

  totalCount = 105;
  loadedFromBackend = 100;

  handlePageEvent(event: PageEvent) {
    const pageSize = event.pageSize;
    const newPageIndex = event.pageIndex;
    console.log("total count", this.totalCount);
    console.log("size", (newPageIndex + 1) * pageSize)
    if ((newPageIndex + 1) * pageSize > this.loadedFromBackend && this.totalCount > this.loadedFromBackend) {
      this.loadedFromBackend += 100;
    } else {

    }


  }

}
