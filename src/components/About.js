
import IMG from '../../src/assets/gato.jpg'
import TitleMain from './TitleMain';
import P from './FontType/P';
import Title from './FontType/Title';

const About = ({ about, t, mobileHeight }) => {

    return (
        <div className='tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-evenly xs:tw-justify-center' ref={about}>
            <div className='tw-mt-16 xs:tw-mt-0 tw-mb-0 xs:tw-mb-6'>
                <TitleMain label={t("about.title.about")} />
            </div>
            <div className='tw-flex tw-flex-col xs:tw-flex-row tw-items-center xs:tw-items-start tw-justify-center tw-gap-0 xs:tw-gap-40'>
                    {!mobileHeight && <div className='tw-mt-0 xs:tw-mt-16'>
                        <img className='tw-rounded-full tw-h-32 xs:tw-h-64 tw-w-32 xs:tw-w-64 tw-shadow-2xl xs:tw-shadow-3xl' src={IMG} alt='Gato' />
                    </div>}
                <div className='tw-flex tw-flex-col tw-justify-evenly xs:tw-justify-center tw-gap-0 xs:tw-gap-4 tw-p-4 tw-mt-2 xs:tw-mt-0 tw-w-56 xs:tw-w-96'>
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
                            label='Tenis-Up - Práctica Profesional'
                        />
                        <P
                            label={t("about.p.experience2")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;