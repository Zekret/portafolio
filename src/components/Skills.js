import React from 'react';
import TitleMain from './TitleMain';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import redux from '../assets/skills/redux.png'
import git from '../assets/skills/git.png'
import node from '../assets/skills/nodejs.png'
import tailwind from '../assets/skills/tailwind.png'
import bootstrap from '../assets/skills/bootstrap.png'
import firebase from '../assets/skills/firebase.png'


const Skills = ({ skills }) => {
    return (
        <div ref={skills} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label='Habilidades' />
            </div>
            <div className='tw-flex tw-flex-wrap tw-gap-5'>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={html} alt='HTML' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={css} alt='CSS' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={javascript} alt='JavaScript' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={react} alt='React' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={redux} alt='Redux' />
                </div>
            </div>
            <div className='tw-flex tw-flex-wrap tw-gap-5'>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={git} alt='Git' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={node} alt='NodeJS' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={tailwind} alt='Tailwind' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={bootstrap} alt='Bootstrap' />
                </div>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-lg tw-h-32 tw-w-32' src={firebase} alt='Firebase' />
                </div>
            </div>
        </div>
    );
};

export default Skills;