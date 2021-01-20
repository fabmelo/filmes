// angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  createForm() {
    this.form = new FormGroup({
      Parameter: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }

  movieSearch(){
    this.router.navigate(["list", this.form.get("Parameter").value]);
  }

}
