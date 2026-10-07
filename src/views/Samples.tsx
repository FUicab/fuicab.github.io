import CodeSample from "../blocks/CodeSample";
import Dungeonator from '../codeSamples/Dungeonator';

export default function Samples() {
    return (<>
        <h1>Samples Page</h1>
        <hr />
        <h4 className="subtitle">Artisanal components, made by me</h4>
        <div className="samples-container">
            <CodeSample SampleComponent={Dungeonator}/>
        </div>
    </>);
}