import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {


  firstForm: UntypedFormGroup;

  thirdForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });



    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }



  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  

}
