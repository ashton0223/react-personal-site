import checkLogin from './checkLogin.js';
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