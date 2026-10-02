import { Component, ReactElement, ReactHTMLElement } from "react";

const list1:string[] = ['HTML','Javascript','CSS','SASS','LESS','JSON','Git','PHP','Typescript','MySQL','Firebase','C#','Python','.NET','Java']; //Coding languages, databases and core technologies
const list2:string[] = ['Angular','React','Wordpress','Shopify','jQuery','Bootstrap','Material Design','Webflow','Shopify','React Native', 'WPBakery', 'Guttenberg', 'Unity', 'REST API', 'Node', 'Vite', 'React Router']; //Libraries, software and other environments
const list3:string[] = ['UI/UX','Responsive Design','Multi-language','Mobile Apps','SEO','Frontend','Backend','Fullstack','Artificial Intelligences', 'WP THeme customization', 'Accessibility','Multi-platform compatibility', 'Prompt Engineering', 'Game System Design']; //Soft skills and other technical skills

function getHierarchy(name:string = ''):string{
    if(list1.includes(name)){
        return '';
    } else if(list2.includes(name)){
        return 'second';
    } else if(list3.includes(name)){
        return 'third';
    } else {
        return '';
    }
}

interface SkillChipProps {
    skillName?: string; // El signo ? permite que sea opcional
}

export default function SkillChip({ skillName = "" }: SkillChipProps) {
    return (
        <span className={"chip " + getHierarchy(skillName)}>
            {skillName}
        </span>
    );
}