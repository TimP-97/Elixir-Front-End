import elixirBG from '../assets/elixirBG.jpg'

export default function BackgroundImage() {
    const divStyle = {
        backgroundImage: `url('https://i.imgur.com/QuJqHP1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '100vh', // Adjust this to set the desired height of the background image
    };

    return <div style={divStyle}></div>;
};
