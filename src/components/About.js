
import IMG from '../../src/assets/gato.jpg'
import TitleMain from './TitleMain';
import P from './FontType/P';
import Title from './FontType/Title';

const About = ({ about, t }) => {

    return (
        <div ref={about} className='tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col'>
            <div className='tw-mb-6'>
                <TitleMain label={t("about.title.about")} />
            </div>
            <div className='tw-flex tw-items-start tw-justify-center tw-gap-40 tw-flex-row'>
                <div className='tw-mt-16'>
                    <img className='tw-rounded-full tw-h-64 tw-w-64 tw-shadow-3xl' src={IMG} alt='Gato' />
                </div>
                <div className='tw-flex tw-flex-col tw-justify-center tw-gap-4 tw-w-96'>
                    <div>
                        <Title label={t("about.title.profile")} />
                        <P
                            label={t("about.p.profile")}
                        />
                    </div>
                    <div>
                        <Title label={t("about.title.education")} />
                        <P
                            label={t("about.p.education1")}
                        />
                        <P
                            label={t("about.p.education2")}
                        />
                        <P
                            label='2016 - 2020'
                        />
                    </div>
                    <div>
                        <Title label={t("about.title.experience")} />
                        <P
                            label='Tenis-Up'
                        />
                        <P
                            label={t("about.p.experience1")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;