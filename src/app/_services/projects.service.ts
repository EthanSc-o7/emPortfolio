import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
projects: Project[] = [{
    id:0,
    name: 'Angular Portfolio',
    summary: 'First Portfolio project using Angular Front End',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: ["/portfolioimage.png"]
  },

{
    id:1,
    name: 'CPP Roadmap Builder',
    summary: 'Web Service for students at CPP with the goal of helping students plan their degree',
    description: 'Site generates for users a course flowchart showing pre and co requisites as well as generates a roadmap for each major program at CPP, which can be customized and saved',
    projectLink: 'https://github.com/CS-4800-SunBear/DPRRevamp',
    tags: [Tag.JAVASCRIPT, Tag.EXPRESS, Tag.AWS, Tag.POSTGRES],
    pictures: ["/Proj1img1.png","/Proj1img2.png","/Proj1img3.png"]
  },
{
    id:2,
    name: 'Poke Password',
    summary: 'Create Secure and easy to remember passwords',
    description: 'Password generator that utilizes the PokeAPI to generate secure and easy to remember passwords using pokemon data. Along with that I created a simple GUI to make it more efficient to use',
    projectLink: 'https://github.com/CS-4800-SunBear/DPRRevamp',
    tags: [Tag.PYTHON, Tag.PYGUI],
    pictures: ["/Proj2img1.png","/Proj2img2.png"]
  },

  {
    id:3,
    name: 'Own Edition',
    summary: 'Mobile App created and published on Google Play Store that lets users curate watchlists of favorite episodes',
    description: 'Created using Flutter, Firebase, as well as firestore',
    projectLink: 'https://github.com/EthanSc-o7/own_edition?tab=readme-ov-file',
    tags: [Tag.FLUTTER],
    pictures: ["/proj3img2.png"]
  },
  {
    id:4,
    name: 'Guess the Lego Set',
    summary: 'Daily web guessing game similar to Wordle or Guess the game but with Lego Sets',
    description: 'Features: GTS games for several Lego Themes, an Unlimited mode for three of them, Archive of past days, Google Analytics integration',
    projectLink: 'https://guesstheset.club/',
    tags: [Tag.EXPRESS, Tag.DIGITALOCEAN, Tag.JAVASCRIPT],
    pictures: ["/Proj4img1.png","/Proj4img2.png","/Proj4img3.png","/Proj4img4.png"]
  },
]
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  getProjectByID(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that has the id: ' + id);
    }
    return project;
  }
  
  getProjectsByFilter(filterTags: Tag[]){
    console.log('hi')
      let filterProjects: Project[] = []; 

      this.projects.forEach(function (project){
        let foundAll = true; 

        filterTags.forEach(function (filterTag){
          if (project.tags.includes(filterTag) == false){
            foundAll = false; 
          }
        });

          if(foundAll){
            filterProjects.push(project);  
            console.log(project)
          }
      });

      return filterProjects; 
  }
}
