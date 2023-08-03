import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-chip',
  templateUrl: './skill-chip.component.html',
  styleUrls: ['./skill-chip.component.css']
})
export class SkillChipComponent {
  @Input() name:string = '';

  list1:string[] = ['HTML','Javascript','CSS','SASS','LESS','JSON','Git','PHP','Typescript','MySQL','Firebase','C#','Python','.NET','Java']; //Coding languages, databases and core technologies
  list2:string[] = ['Angular','React','Wordpress','Shopify','jQuery','Bootstrap','Material Design','Webflow','Shopify','React Native']; //Libraries, software and other environments
  list3:string[] = ['UI/UX','Responsive Design','Multi-language','Mobile Apps','SEO','Frontend','Backend','Fullstack','Artificial Intelligences']; //Soft skills and other technical skills
  
  getHierarchy(name:string = ''):string{
    if(this.list1.includes(name)){
      return '';
    } else if(this.list2.includes(name)){
      return 'second';
    } else if(this.list3.includes(name)){
      return 'third';
    } else {
      return '';
    }
  }

}
