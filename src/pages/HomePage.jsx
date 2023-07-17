import { useStoreState, useStoreActions } from 'easy-peasy';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import PureCounter from "@srexi/purecounterjs";


export default function Counter() {
    const count = useStoreState((state) => state.counterModel.count);
    const increment = useStoreActions((actions) => actions.counterModel.increment);
    const decrement = useStoreActions((actions) => actions.counterModel.decrement);
    AOS.init();

    const pure = new PureCounter({// Setting that can't' be overriden on pre-element
        selector: ".purecounter", // HTML query selector for spesific element

        // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
        start: 0, // Starting number [uint]
        end: 100, // End number [uint]
        duration: 2, // The time in seconds for the animation to complete [seconds]
        
    });

    const typing = useRef(null)

    useEffect(() => {
        const typed = new Typed(typing.current, {
            strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            typeSpeed: 50,
        });

        // return () => {
        //     // Destroy Typed instance during cleanup to stop animation
        //     typed.destroy();
        // };
    }, []);

    return (
        <div>
            <h1 data-aos="fade-upnpm install typed.js" data-aos-dealy="2000">Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <h3 ref={typing}></h3>
            <h2 className='purecounter'></h2>
        </div>
    );
}