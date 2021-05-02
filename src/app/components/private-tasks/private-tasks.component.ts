import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';


@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  constructor() { }

  projectArray: Project[] = [
    {id: 1 , name: "Sistema de Inventario", business: "Capsule Corp" ,request: " Necesitamos un sistema que nos permita registrar las cantidades de mercancías existentes y determinar el costo de los productos vendidos."},
    {id: 2 , name: "App Movil Android", business: "Capsule Corp" ,request: "Buscamos de una app con la que nuestro negocio se destaque, y nos ayude a construir relaciones con los clientes y que impulse la promoción de los productos."},
    {id: 3 , name: "Facturacion", business: "ACME" ,request: "Estamos en la busqueda de un software que nos permita gestionar y controlar el envío y recepción de facturas de nuestros bienes y servicios a nuestros clientes."},
    {id: 4 , name: "Sitio Web", business: "Monster Inc." ,request: "Buscamos una pagina web que brinde credibilidad ante los clientes potenciales y nos ayuda a ser visibles en los buscadores."},
  ];
  /* doble enlazamiento */
  selectedProject: Project = new Project(); 

  AddOrEdit(){
    if(this.selectedProject.id === 0){
      this.selectedProject.id = this.projectArray.length + 1;
      this.projectArray.push(this.selectedProject);
  
    }
  
    this.selectedProject = new Project();

  }

  OpenForEdit(project: Project){
    this.selectedProject = project;
  } 

  delete(){
    if(confirm("¿Esta seguro de borrar el proyecto seleccionado?")){
      this.projectArray = this.projectArray.filter(x => x != this.selectedProject);
      this.selectedProject = new Project();
    }
  }

  ngOnInit(): void {


    
  }

}
