import { ReactElement } from 'react';
import PortfolioItem from '../blocks/PortfolioItem';
import * as PortfolioItems from './../assets/portfolio-items.json';

export default function Portfolio() {
    console.log(PortfolioItems);
    function descriptionHTML(description:string = ""):ReactElement<any>{
        let content:ReactElement<any>;
        content = <p></p>;

        return <>{content}</>;
    }

    return (<>
        <h1>Portfolio</h1>
        <hr/>
        <div className="portfolio-wrapper" id="portfolio-gallery">
            {PortfolioItems.default.map(item => {
                return <PortfolioItem img={item.thumbnail} title={item.title} description={item.description} skillset={item.skillset} />;
            })}
            {/* <portfolio-item
                *ngFor="let item of portfolioData.default"
                title="{{item.title}}"
                description="{{item.description}}"
                img="{{'assets/'+item.thumbnail}}"
                [skillset]="item.skillset"
            /> */}
        </div>
    </>);
}