import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-infrastructure-component',
  templateUrl: './infrastructure-component.component.html',
  styleUrls: ['./infrastructure-component.component.css']
})
export class InfrastructureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  images=[
    {
      image:'../assets/Factory/Factory1.jpg'
    },
    {
      image:'../assets/Factory/Factory2.jpg'
    },
    {
      image:'../assets/Factory/Factory3.jpg'
    }
  ]
  imageUrl: string;

  
  openDialog(value:string): void {
    console.log(value);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      height:'450px',
      data: { imageUrl: value}
      
    });

    dialogRef.afterClosed().subscribe(result => {
     
      dialogRef.close();
    });
  }
 

  
}

export interface DialogData {
  imageUrl: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}