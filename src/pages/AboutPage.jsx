import { useStoreState, useStoreActions } from 'easy-peasy';
import { Button } from "react-bootstrap"

const AboutPage = () => {
    const count = useStoreState((state) => state.counterModel.count);
    
    // Access the increment and decrement actions from the store
    const increment= useStoreActions(actions => actions.counterModel.increment);

    return (<h1>Count is : {count}

        <Button onClick={increment}>
            +
        </Button>
    </h1>);
}

export default AboutPage;