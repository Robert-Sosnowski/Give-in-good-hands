import React from 'react';
import Decoration from './Decoration';
import People from '../../assets/assets/People.jpg'
import Sign from '../../assets/assets/Signature.svg'
const AboutUs = () => {
    return (
        <section className='About'>
            <div>
                <Decoration text="O nas" />
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={Sign} alt="" />
            </div>

            <img src={People} alt="" />

        </section>
    );
};

export default AboutUs;