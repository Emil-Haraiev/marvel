import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '250px', height: '250px',
        objectFit: 'contain', margin: '0 auto'}} src={img} alt='error'/>
    )
}


export default ErrorMessage;


// let arr= [];


// for( let i; i <= 10; i++){
//     for(let j; j<= 10; j++){
//         arr[i]
//     }
//     arr[j]

//     console.log(arr);
// }