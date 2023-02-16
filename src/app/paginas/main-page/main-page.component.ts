import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos.model';
import { Profesores } from 'src/app/models/profesores.model';
import { AlumnosService } from 'src/app/servicio/alumnos.service';
import { ProfesorService } from 'src/app/servicio/profesores.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  [x: string]: any;

  public loginForm = new FormGroup({
    mote: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private alumnos: AlumnosService, private profesores: ProfesorService) { }

  ngOnInit(): void {
    this.alumnos.getAlumnos().subscribe(
      (value: Alumnos[]) => {
        console.log(value)
      }
    )
    this.profesores.getProfesores().subscribe(
      (value: Profesores[]) => {
        console.log(value)
      }
    )
  }

  login(): void {
    let nombre = this.loginForm.controls.mote.value!;
    let password = this.loginForm.controls.password.value!;

    this.loginForm.reset();
  }

}
