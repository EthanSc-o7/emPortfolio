import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isSkillsOpen: boolean = false; 
  isEducationOpen: boolean = false;
  isCoursesOpen: boolean = false; 

constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("Ethan Murguia - Resume")
  }


  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', '/EmurguiaResume.pdf');
    link.setAttribute('download', 'EmurguiaResume.pdf')
    link.click(); 
    link.remove(); 
  }
}
