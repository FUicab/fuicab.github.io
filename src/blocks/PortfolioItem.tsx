import { ReactElement } from "react";
import SkillChip from "./SkillChip";

interface PortfolioItemProps {
    img?: string;
    title?: string;
    description?: ReactElement<any>;
    skillset?: string[];
    excerpt?: string;
    timespan?: string;
    mainskills?: string[];
    onClick?: ()=>{};
}

export default function PortfolioItem({ img = "", title= "", description = <></>, skillset = [], excerpt = "", timespan = "", mainskills = [], onClick }: PortfolioItemProps) {
    return (
        <div className="portfolio-item" onClick={onClick}>
            <div className="thumbnail">
                <img src={img} alt=""/>
            </div>
            <div className="main-content">
                <h2>{title}</h2>
                <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                <span className="timespan">{timespan}</span>
            </div>
            <div className="skillset">
                {mainskills.map(skill => <SkillChip key={title+' - Skill: '+skill} skillName={skill} />)}
                {/* <skill-chip
                    *ngFor="let skill of skillset"
                    name="{{skill}}"
                /> */}
            </div>
        </div>
    );
}