import {ReactComponent as Me} from '../../assets/icons/me.svg'
import {ReactComponent as Portfolio} from '../../assets/icons/portfolio.svg'
import {ReactComponent as Resume} from '../../assets/icons/resume.svg'
import {ReactComponent as Skills} from '../../assets/icons/skills.svg'
import {ReactComponent as Contact} from '../../assets/icons/contact.svg'


export const dataHeader = (className) => [
    {link: '/', title: 'About Me', component: <Me className={className}/>},
    {link: '/portfolio', title: 'Portfolio', component: <Portfolio className={className}/>},
    // {link: '/resume', title: 'Resume', component: <Resume className={className}/>},
    {link: '/skills', title: 'Skills', component: <Skills className={className}/>},
    {link: '/contact', title: 'Contact', component: <Contact className={className}/>},
]