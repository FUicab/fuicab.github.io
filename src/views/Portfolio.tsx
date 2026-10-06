import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PortfolioItem from '../blocks/PortfolioItem';
import * as PortfolioItems from './../assets/portfolio-items.json';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import SkillChip from '../blocks/SkillChip';
import { useEffect, useState } from 'react';

export default function Portfolio() {
    const [showDetail,setShowDetail] = useState(false);
    const [showDetailHasBeenUsed,setShowDetailHasBeenUsed] = useState(false);
    const [displayedItem,setDisplayedItem] = useState({thumbnail:'', title:'', description:'', timespan:'', skillset:[] });

    function PortfolioDetail(){
        return <><div className={`portfolio-detail ${showDetail?'active':''} ${showDetailHasBeenUsed? 'animated':''}`}>
            <div className="portfolio-content-details">
                <div className="main-content">
                    <h2>{displayedItem?.title}</h2>
                    <p className="description" dangerouslySetInnerHTML={{ __html: displayedItem?.description }}></p>
                    <span className="timespan">{displayedItem?.timespan}</span>
                </div>
                <div className="skillset">
                    {displayedItem?.skillset?.map(skill => <SkillChip key={'Detail of '+displayedItem?.title+' - Skill: '+skill} skillName={skill} />)}
                    {/* <skill-chip
                        *ngFor="let skill of skillset"
                        name="{{skill}}"
                    /> */}
                </div>
            </div>
            <div className="thumbnail">
                <img src={displayedItem?.thumbnail} alt=""/>
            </div>
        </div><div title='Click out to close this detail window' onClick={closePortfolioDetail} className={`box-content-overlay ${showDetail?'active':''} ${showDetailHasBeenUsed? 'animated':''}`}></div></>
    }

    function openPortfolioDetail(item:any){
        setShowDetail(true);
        setDisplayedItem(item);
        setShowDetailHasBeenUsed(true);
    }

    function closePortfolioDetail():void{
        setShowDetail(false);
        // setDisplayedItem(null);
    }

    return (<>
        <h1>Portfolio</h1>
        <hr/>
        <h4 className='disclaimer'>
            <FontAwesomeIcon icon={faCircleExclamation} /> Due to privacy, not all the projects I've worked on are listed here.
        </h4>
        <div className="portfolio-wrapper" id="portfolio-gallery">
            <PortfolioDetail/>
            {PortfolioItems.default.map(item => {
                return <PortfolioItem key={'porfolio-item_'+item.title} img={item.thumbnail} title={item.title} description={item.description} skillset={item.skillset} mainskills={item.mainskills} excerpt={item.excerpt} timespan={item.timespan} onClick={()=>openPortfolioDetail(item)} />;
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