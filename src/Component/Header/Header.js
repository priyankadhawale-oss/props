import Footer from '../Footer/Footer';
const xyz={
    color:'green',
    textDecoration:'underline',
    fontSize:'25px',
    textShadow:'2px 2px 3px red',
}


const Header=(props)=>{
    return(
        <>
        <h2 style={{color:'blue'}}>good morning</h2>
        <h3 style={xyz}>Hey..{props.name} {props.last}</h3>
        <Footer name='xyz' last='hello'/>
        <Footer name='jgj' last='kjdhj'/>
        
        </>
    );
}
export default Header;