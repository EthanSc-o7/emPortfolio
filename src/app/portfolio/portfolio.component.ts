import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[]; 
  
  filtering: boolean = false; 
  isCollapsed: boolean = true; 
  typescript: boolean = false; 
  angular: boolean = false; 

  python: boolean = false; 
  javascript: boolean = false; 
  postgres: boolean = false; 
  flutter: boolean = false; 
  pygui: boolean = false; 
  express: boolean = false; 
  aws: boolean = false; 
  digitalOcean: boolean = false; 


constructor(private titleService: Title, private ProjectsService: ProjectsService){
    this.titleService.setTitle("Ethan Murguia - Portfolio")
  }
  ngOnInit(): void {
    this.projects = this.ProjectsService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR)
    }

     if (this.python){
      filterTags.push(Tag.PYTHON)
    }

    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }

     if (this.postgres){
      filterTags.push(Tag.POSTGRES)
    }

    if (this.flutter){
      filterTags.push(Tag.FLUTTER)
    }

     if (this.pygui){
      filterTags.push(Tag.PYGUI)
    }

    if (this.express){
      filterTags.push(Tag.EXPRESS)
    }

     if (this.aws){
      filterTags.push(Tag.AWS)
    }


    if (this.digitalOcean){
      filterTags.push(Tag.DIGITALOCEAN)
    }

    if (this.python || this.flutter || this.angular || this.typescript || this.javascript || this.express || this.pygui || this.postgres || this.aws ||this.digitalOcean ){
      this.filtering = true
    }
    else{
      this.filtering = false; 
    }


    this.projects = this.ProjectsService.getProjectsByFilter(filterTags)
  }

  ResetFilters(){
    this.python = false;
    this.angular = false;
    this.typescript = false;
    this.javascript = false;
    this.pygui = false;
    this.express = false;
    this.aws = false;
    this.digitalOcean = false;
    this.flutter = false;
    this.postgres = false;
    this.filtering = false; 

    this.projects = this.ProjectsService.GetProjects();
  }
}
