import React from "react";
import HTML from '../../../Assets/Logos/html.png';
import CSS from '../../../Assets/Logos/css.png';
import BOOTSTRAP from '../../../Assets/Logos/bootstrap.png';
import TAILWIND from '../../../Assets/Logos/tailwind.png';
import JS from '../../../Assets/Logos/js.png';
import DJANGO from '../../../Assets/Logos/django.png';
import REACT from '../../../Assets/Logos/react.png';
import GIT from '../../../Assets/Logos/git.png';
import PYTHON from '../../../Assets/Logos/python.png';
import C from '../../../Assets/Logos/c.jpg';
import CPP from '../../../Assets/Logos/cpp.png';
import JAVA from '../../../Assets/Logos/java.png';
import Skill from "./Skill";

const skillArray = [
    {
        logo : HTML,
        title: 'HTML',
        link : 'https://www.w3schools.com/html/',
    },
    {
        logo : CSS,
        title: 'CSS',
        link : 'https://developer.mozilla.org/en-US/docs/Web/CSS',

    },
    {
        logo : BOOTSTRAP,
        title: 'Bootstrap',
        link : 'https://getbootstrap.com/',

    },
    {
        logo : TAILWIND,
        title: 'TailwindCSS',
        link : 'https://tailwindcss.com/',

    },
    {
        logo : JS,
        title: 'JavaScript',
        link : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',

    },
    {
        logo : REACT,
        title: 'React',
        link : 'https://react.dev/',

    },
    {
        logo : PYTHON,
        title: 'Python',
        link : 'https://www.python.org/',

    },
    {
        logo : DJANGO,
        title: 'Django',
        link : 'https://www.djangoproject.com/',

    },
    {
        logo : C,
        title: 'C',
        link : 'https://www.w3schools.com/c/',

    },
    {
        logo : CPP,
        title: 'C++',
        link : 'https://www.w3schools.com/cpp/',

    },
    {
        logo : JAVA,
        title: 'Java',
        link : 'https://www.java.com/en/',

    },
    {
        logo : GIT,
        title: 'Git',
        link : 'https://git-scm.com/',

    }
]

const skill = skillArray.map(skill=>{
    return <Skill logo={skill.logo} title={skill.title} link={skill.link}/>
})

const Skills = () =>{
    return(
        <div className="row text-center my-5">
            <h1> Skills and Interest</h1>
            {skill}
        </div>
    )
}

export default Skills;