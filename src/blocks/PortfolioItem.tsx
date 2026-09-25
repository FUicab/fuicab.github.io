import { ReactElement } from "react";
import SkillChip from "./SkillChip";

interface PortfolioItemProps {
    img?: string;
    title?: string;
    description?: ReactElement<any>;
    skillset?: string[];
}

export default function PortfolioItem({ img = "", title= "", description = <></>, skillset = [] }: PortfolioItemProps) {
    return (
        <div className="portfolio-item">
            <div className="thumbnail">
                <img src={img} alt=""/>
            </div>
            <div className="main-content">
                <h2>{title}</h2>
                <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className="skillset">
                    {skillset.map(skill => <SkillChip skillName={skill} />)}
                    {/* <skill-chip
                        *ngFor="let skill of skillset"
                        name="{{skill}}"
                    /> */}
                </div>
            </div>
        </div>
    );
}