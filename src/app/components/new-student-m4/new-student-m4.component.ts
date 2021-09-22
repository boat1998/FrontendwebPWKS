import { NewStudentM4Service } from './../../services/new-student-m4-services/new-student-m4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewStudentM4Models } from 'src/app/models/new-student-m4-models';
import { FormGroup, Validators, FormBuilder, NgModel } from "@angular/forms";

@Component({
  selector: 'app-new-student-m4',
  templateUrl: './new-student-m4.component.html',
  styleUrls: ['./new-student-m4.component.css']
})
export class NewStudentM4Component implements OnInit {

  prename = ['นาย','นางสาว']
  gender = ['','ชาย','หญิง']
  major = ['','วิทยาศาสตร์-คณิตศาสตร์','ศิลป์-จีน','ศิลป์-คำนวณ',
          'คหกรรม','เกษตร','ปวช','ศิลป์-พละ','ศิลป์-วาด',
          'วิทยาศาสตร์-คอมพิวเตอร์','ศิลป์-ฝรั่งเศษ']
  newstudentm4 = new NewStudentM4Models();
  get: any;
  files:any;
  submitted = false;
  form: FormGroup;
  img:any;

  constructor(
    public nm4s: NewStudentM4Service,
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  addNewstudentm4(){
    //Image
    let formdata = new FormData();
    formdata.append("pic",this.files, this.files.name);
    //Information
    formdata.append("prename",this.newstudentm4.prename);
    formdata.append("name",this.newstudentm4.name);
    formdata.append("surname",this.newstudentm4.surname);
    formdata.append("sex",this.newstudentm4.sex);
    formdata.append("id_number",this.newstudentm4.id_number);
    formdata.append("religion",this.newstudentm4.religion);
    formdata.append("nationality",this.newstudentm4.nationality);
    formdata.append("origin",this.newstudentm4.origin);
    formdata.append("father_name",this.newstudentm4.father_name);
    formdata.append("father_id",this.newstudentm4.father_id);
    formdata.append("father_job",this.newstudentm4.father_job);
    formdata.append("father_tel",this.newstudentm4.father_tel);
    formdata.append("mother_name",this.newstudentm4.mother_name);
    formdata.append("mother_id",this.newstudentm4.mother_id);
    formdata.append("mother_job",this.newstudentm4.mother_job);
    formdata.append("mother_tel",this.newstudentm4.mother_tel);
    formdata.append("parent",this.newstudentm4.parent);
    formdata.append("parent_name",this.newstudentm4.parent_name);
    formdata.append("parent_id",this.newstudentm4.parent_id);
    formdata.append("parent_job",this.newstudentm4.parent_job);
    formdata.append("parent_tel",this.newstudentm4.parent_tel);
    formdata.append("house_number",this.newstudentm4.house_number);
    formdata.append("bloc",this.newstudentm4.bloc);
    formdata.append("street",this.newstudentm4.street);
    formdata.append("road",this.newstudentm4.road);
    formdata.append("sub_district",this.newstudentm4.sub_district);
    formdata.append("district",this.newstudentm4.district);
    formdata.append("province",this.newstudentm4.province);
    formdata.append("post",this.newstudentm4.post);
    formdata.append("final_school",this.newstudentm4.final_school);
    formdata.append("final_school_sub_district",this.newstudentm4.final_school_sub_district);
    formdata.append("final_school_district",this.newstudentm4.final_school_district);
    formdata.append("final_school_province",this.newstudentm4.final_school_province);
    formdata.append("disabled",this.newstudentm4.disabled);
    formdata.append("poor_person",this.newstudentm4.poor_person);
    formdata.append("etc",this.newstudentm4.etc);
    formdata.append("birthday",this.newstudentm4.birthday);
    formdata.append("tel",this.newstudentm4.tel);
    formdata.append("major_name1",this.newstudentm4.major_name1);
    formdata.append("major_name2",this.newstudentm4.major_name2);
    formdata.append("major_name3",this.newstudentm4.major_name3);
    formdata.append("major_name4",this.newstudentm4.major_name4);
    formdata.append("major_name5",this.newstudentm4.major_name5);
    formdata.append("major_name6",this.newstudentm4.major_name6);
    formdata.append("major_name7",this.newstudentm4.major_name7);
    formdata.append("major_name8",this.newstudentm4.major_name8);
    formdata.append("major_name9",this.newstudentm4.major_name9);
    formdata.append("major_name10",this.newstudentm4.major_name10);
    formdata.append("email",this.newstudentm4.email);
    formdata.append("father_namecen",this.newstudentm4.father_namecen);
    formdata.append("mother_namecen",this.newstudentm4.mother_namecen);
    formdata.append("parent_namecen",this.newstudentm4.parent_namecen);
    formdata.append("father_surname",this.newstudentm4.father_surname);
    formdata.append("mother_surname",this.newstudentm4.mother_surname);
    formdata.append("parent_surname",this.newstudentm4.parent_surname);
    formdata.append("onet_sci",this.newstudentm4.onet_sci);
    formdata.append("onet_math",this.newstudentm4.onet_math);
    formdata.append("onet_thai",this.newstudentm4.onet_thai);
    formdata.append("onet_eng",this.newstudentm4.onet_eng);
    formdata.append("name_cen",this.newstudentm4.name_cen);
    formdata.append("student_id",this.newstudentm4.student_id);
    //POST
    this.nm4s.addNewstudentm4(formdata).subscribe(res => {
      console.log(res);
    });

  }

  imageUpload(event){
    this.files = event.target.files[0];
    console.log(this.files);
  }

  get f(){
    return this.form.controls;
  }

  uploadImage(event){
    this.files = event.target.files[0]
    console.log(this.files);
  }

  createForm(){
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
      prename: [null, Validators.required],
      name: [null, Validators.required],
      name_cen: [null, Validators.required],
      surname: [null, Validators.required],
      sex: [null, Validators.required],
      pic: [null, Validators.required],
      id_number: [null, Validators.required],
      birthday: [null, Validators.required],
      religion: [null, Validators.required],
      nationality: [null, Validators.required],
      origin: [null, Validators.required],
      disabled: [null, Validators.required],
      poor_person: [null, Validators.required],
      etc: [null, Validators.required],
      tel: [null, Validators.required],
      email: [null, Validators.required],
      father_name: [null, Validators.required],
      father_namecen: [null, Validators.required],
      father_surname: [null, Validators.required],
      father_id: [null, Validators.required],
      father_job: [null, Validators.required],
      father_tel: [null, Validators.required],
      mother_name: [null, Validators.required],
      mother_namecen: [null, Validators.required],
      mother_surname: [null, Validators.required],
      mother_id: [null, Validators.required],
      mother_job: [null, Validators.required],
      mother_tel: [null, Validators.required],
      parent: [null, Validators.required],
      parent_name: [null, Validators.required],
      parent_namecen: [null, Validators.required],
      parent_surname: [null, Validators.required],
      parent_id: [null, Validators.required],
      parent_job: [null, Validators.required],
      parent_tel: [null, Validators.required],
      house_number: [null, Validators.required],
      street: [null, Validators.required],
      bloc: [null, Validators.required],
      road: [null, Validators.required],
      sub_district: [null, Validators.required],
      district: [null, Validators.required],
      province: [null, Validators.required],
      post: [null, Validators.required],
      final_school: [null, Validators.required],
      final_school_sub_district: [null, Validators.required],
      final_school_district: [null, Validators.required],
      final_school_province: [null, Validators.required],
      major_name1: [null, Validators.required],
      major_name2: [null, Validators.required],
      major_name3: [null, Validators.required],
      major_name4: [null, Validators.required],
      major_name5: [null, Validators.required],
      major_name6: [null, Validators.required],
      major_name7: [null, Validators.required],
      major_name8: [null, Validators.required],
      major_name9: [null, Validators.required],
      major_name10: [null, Validators.required],
      onet_sci: [null, Validators.required],
      onet_math: [null, Validators.required],
      onet_thai: [null, Validators.required],
      onet_eng: [null, Validators.required],
      student_id: [null, Validators.required],

    })
  }





}

