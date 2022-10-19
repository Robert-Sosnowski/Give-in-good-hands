import React from 'react';
import Decoration from './Decoration';
import Shirt from '../../assets/assets/Icon-1.svg'
import Bag from '../../assets/assets/Icon-2.svg'
import Lens from '../../assets/assets/Icon-3.svg'
import Recycle from '../../assets/assets/Icon-4.svg'
const Foursteps = () => {
    return (<>
        <Decoration text='Wystarczą 4 proste kroki' />
        <section className='fourSteps'>

            <div><img src={Shirt} alt="" /> <p>Wybierz rzeczy</p> <span>ubrania, zabawki, sprzęt i inne</span></div>
            <div><img src={Bag} alt="" /> <p>Spakuj je</p> <span>skorzystaj z worków na śmieci</span></div>
            <div><img src={Lens} alt="" /> <p>Zdecyduj komu chcesz pomóc</p> <span>wybierz zaufane miejsce</span></div>
            <div><img src={Recycle} alt="" /> <p>Zamów kuriera</p> <span>kurier przyjedzie w dogodnym terminie</span></div>

        </section ></>
    );
};

export default Foursteps;