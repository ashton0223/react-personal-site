import { checkLogin } from './firebase';
function buttonPress() {
    if (checkLogin()) {
        console.log('logged in');
    }
}

function Home() {
    return (
        <>
            <p>hi</p>
            <button onClick={buttonPress}>Funny button</button>
        </>
    );
}

export default Home;