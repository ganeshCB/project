import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeesaveform:FormGroup;

  constructor() { }

  employee : Employee=new Employee();  
  submitted = false;

  ngOnInit() {
    this.submitted=false;

    this.employeesaveform=new FormGroup({  
      emp_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
      emp_email:new FormControl('',[Validators.required,Validators.email]),  
      emp_branch:new FormControl()  
    });  
  }

  


  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.emp_name=this.EmployeeName.value;  
    this.employee.emp_email=this.EmployeeEmail.value;  
    this.employee.emp_branch=this.EmployeeBranch.value;  
    this.submitted = true;  
    //this.save();  
  }  
  
  get EmployeeName(){  
    return this.employeesaveform.get('emp_name');  
  }  

  get EmployeeEmail(){  
    return this.employeesaveform.get('emp_email');  
  }  

  get EmployeeBranch(){  
    return this.employeesaveform.get('emp_branch');  
  }  


  addStudentForm(){  
    this.submitted=false;  
    this.employeesaveform.reset();  
  }  
  
}
