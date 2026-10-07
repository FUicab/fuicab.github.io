import { useState } from "react";

interface CodeSampleProps {
    SampleComponent?: React.ComponentType;
}

export default function CodeSample({SampleComponent = ()=><p></p>}: CodeSampleProps) {
    const [currentTab,setCurrentTab] = useState(0);

    return (
        <div className="code-sample-wrapper">
            <hr />
            <div className="code-sample-container">
                <div className="sample-ui">
                    <div className="code-sample-tabs">
                        <a className={`${currentTab==0?'active':''}`} onClick={()=>setCurrentTab(0)} >Description</a>
                        <a className={`${currentTab==1?'active':''}`} onClick={()=>setCurrentTab(1)} >Try it!</a>
                        <a className={`${currentTab==2?'active':''}`} onClick={()=>setCurrentTab(2)} >Source code</a>
                    </div>
                    <div className="code-sample-content">
                        The content goes here
                    </div>
                </div>
                <div className="sample-display">
                    <SampleComponent/>
                </div>
            </div>
        </div>
    );
}