import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReportePopularesBean } from 'src/control/datos-reportes-admin/ReportePopularesBean';
import { ReportesAdministradorService } from '../../services/reportes-administrador.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['../../../editor/reportes/estilos-reportes.css']
})
export class PopularesComponent implements OnInit {

  reportes!: ReportePopularesBean[];

  constructor(
    private fb: FormBuilder,
    private fechaService: FechaService,
    private reportesAdministradorService: ReportesAdministradorService
  ) { }

  ngOnInit(): void {
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaInicial"].setValue(resp.fecha);
      this.miFormulario.controls["fechaFinal"].setValue(resp.fecha);
    });
  }
  miFormulario: FormGroup = this.fb.group({
    fechaInicial: ['', Validators.required],
    fechaFinal: ['', Validators.required],
  });

  solicitarReporte() {
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    this.reportesAdministradorService.obtenerReporteRevistasPopulares(fechaInicial, fechaFinal)
      .subscribe((res: ReportePopularesBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte(){
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesAdministrador?reporte=reporteRevistasPopulares&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
