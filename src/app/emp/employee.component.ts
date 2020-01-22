import { Component, OnInit } from '@angular/core';
import { mydata } from '../model/data.model';

@Component({
  selector: 'app-employee',
  templateUrl: '/employee.component.html'
})
export class EmployeeComponent implements OnInit {


  constructor() { }
  employees = {
    name: null,
    age: null,
    gender: 2,
    dob: null,
    area: null


  };
  emp: mydata = {
    Name: null,
    PhoneNo: null

  }

  genderList = [
    { name: 'Male', value: 1 },
    { name: 'Female', value: 2 }

  ];
  checklist = [
    { name: 'production', value: 1 },
    { name: 'store area', value: 2 },
    { name: 'import', value: 3 }
  ];
  employeeData = [];
  buttonText: string = "Submit";

  ngOnInit() {
    this.employeeData = JSON.parse(localStorage.getItem('employeeData'));
    if (this.employeeData == null) {
      this.employeeData = [];
    }
  }
  save() {

    if (this.buttonText == 'Submit') {
      debugger;
      this.employeeData.push(
        {
          name: this.employees.name,
          age: this.employees.age,
          gender: this.employees.gender == 1 ? 'Male' : 'Female',
          dob: this.employees.dob,
          area: this.employees.area == 1 ? 'Production' : 'Store Area'

      
        }
        
      )
    }
    else {
      this.buttonText == "enable";
    }
  }
  delete(val) {
    debugger;
    this.employeeData.splice(val, 1);
    localStorage.setItem('employeeData', JSON.stringify(this.employeeData));
  }

  WhatsApp() {


    window.location.href ='https://wa.me/91'+ this.emp.PhoneNo
    //+'&'+'thisistestmessageforwhatsapp'
  }

}


