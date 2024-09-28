import React from 'react';
import '../styles/ExecutiveBoard.css';
import CCO from '../assets/blank.png';
import CDO from '../assets/profile-cdo.png';
import COO from '../assets/profile-coo.png';
import CRO from '../assets/profile-cro.png';
import CTO from '../assets/profile-cto.png';
import CFO from '../assets/blank.png';
import CHRO from '../assets/profile-chro.png';
import lead from '../assets/profile-lead.png';
import Title from './Title';

const teamMembers = [
    {
        imgUrl: lead,
        name: 'Kenneth B. Vidal',
        position: 'GDSC DLSU Lead'
    },
    {
        imgUrl: CRO,
        name: 'Yazan M. Homssi',
        position: 'Chief Relations Officer'
    },
    {
        imgUrl: COO,
        name: 'Ashley Corpuz',
        position: 'Chief Operations Officer'
    },
    {
        imgUrl: CFO,
        name: 'Ryan Kevin T. Koa',
        position: 'Chief Finance Officer'
    },
    {
        imgUrl: CHRO,
        name: 'Amor T. De Guzman',
        position: 'Chief Human Resources Officer'
    },
    {
        imgUrl: CCO,
        name: 'Shania Francine T. Cloma',
        position: 'Chief Communications Officer'
    },
    {
        imgUrl: CTO,
        name: 'Dax Axis A. Tangco',
        position: 'Chief Technology Officer'
    },
    {
        imgUrl: CDO,
        name: 'Aebrahm Ramos',
        position: 'Chief Development Officer'
    }
];

const Team = () => {
    return (
        <section className='our__team' id='eb'>
            <Title subTitle="Executive Board" title="Meet Our Leaders" id="eb"/>
            <div className='container'>
                <div className='team__wrapper'>
                    {teamMembers.map((item, index) => (
                        <div className='team__item' key={index}>
                            <div className='team__img'>
                                <img src={item.imgUrl} alt={item.name} />
                            </div>
                            <div className='team__details'>
                                <h4>{item.name}</h4>
                                <p className='position'>{item.position}</p>
                                <div className='team__member-social'>
                                    <span><i className='ri-linkedin-line'></i></span>
                                    <span><i className='ri-twitter-line'></i></span>
                                    <span><i className='ri-facebook-line'></i></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;