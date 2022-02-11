import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewCouponComponent } from './new-coupon/new-coupon.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  isLoading: Boolean = false;
  public dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = [
    "status",
    "code",
    'validityTime',
    'assignedTo',
    'assignedTime',
  ];
  value = "";

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private title:Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Coupons | SeaNet Fast WiFi")
  }
  ngAfterViewInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCoupon() {
    this.dialog.open(NewCouponComponent, {
      disableClose: true,
    });
  }

}
