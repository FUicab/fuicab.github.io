import SkillChip from '../blocks/SkillChip.tsx';

export default function Home() {
    const birthDate = new Date(1996, 11, 3);
    const now = new Date();
    const myAge = Math.floor((now.getTime()-birthDate.getTime())/1000/3600/24/365.25);

    return (<>
        <div className="cover">
            {/* <div className="cover-photo">
                <img src="assets/img/photo.png" alt="A photo of Francisco Uicab"/>
            </div> */}
            <div className="cover-description">
                <h1>Hello! I'm<br/> <strong>Francisco Uicab</strong></h1>
                <hr/>
                <h2>Web developer</h2>
                <h4>I develop web solutions and help you bring your ideas to life.</h4>
            </div>
        </div>
        <div className="about-me">
            <div className="personal-info">
                <h2 className="fancy">Who am I?</h2>
                <table className="double-col-table">
                    <tbody>
                        <tr>
                            <td>Full name</td>
                            <td>Francisco Rafael Uicab Cox</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{myAge}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>Mérida, Yucatán, México</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td><ul className="no-style">
                                <li>Advanced English</li>
                                <li>Native Spanish</li>
                                <li>Conversational French</li>
                            </ul></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="skillset">
                <h2 className="fancy">What am I good for?</h2>
                <h4>My <i>bread and butter</i></h4>
                <SkillChip skillName="Javascript" />
                <SkillChip skillName="Typescript" />
                <SkillChip skillName="HTML" />
                <SkillChip skillName="CSS" />
                <SkillChip skillName="SASS" />
                <SkillChip skillName="LESS" />
                <SkillChip skillName="JSON" />
                <SkillChip skillName="Git" />
                <SkillChip skillName="React" />
                <SkillChip skillName="jQuery" />
                <SkillChip skillName="Frontend" />
                <SkillChip skillName="Responsive Design" />
                <SkillChip skillName="UI/UX" />
                <hr/>
                <h4>Technologies I know well</h4>
                <SkillChip skillName="PHP" />
                <SkillChip skillName="MySQL" />
                <SkillChip skillName="Firebase" />
                <SkillChip skillName="Angular" />
                <SkillChip skillName="Bootstrap" />
                <SkillChip skillName="Material Design" />
                <SkillChip skillName="Wordpress" />
                <SkillChip skillName="Webflow" />
                <SkillChip skillName="Shopify" />
                <SkillChip skillName="React Native" />
                <SkillChip skillName="Mobile Apps" />
                <SkillChip skillName="SEO" />
                <hr/>
                <h4>Under development</h4>
                <SkillChip skillName="C#" />
                <SkillChip skillName="Backend" />
                <SkillChip skillName="Fullstack" />
                <SkillChip skillName="Unity" />
                <hr/>
                <h4>Skills I'd like to learn</h4>
                <SkillChip skillName="Python" />
                <SkillChip skillName=".Net" />
                <SkillChip skillName="Java" />
                <SkillChip skillName="Artificial Intelligences" />
            </div>
        </div>
    </>);
}