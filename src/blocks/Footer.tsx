import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return <footer>
        <a title="My LinkedIn profile" target="_blank" href="https://www.linkedin.com/in/fuicab/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
            <span className="separator"> | </span>
        <a title="My resume" target="_blank" href="./CV 12.pdf"><FontAwesomeIcon icon={faFileLines}/> My Resume</a>
    </footer>;
}