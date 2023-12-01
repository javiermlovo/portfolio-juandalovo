// import React,{useState, useRef} from "react";
// import Image from "next/image";
// import { useRouter } from 'next/router';

// const SingleEvent = ({data}) => {
//     const inputEmail = useRef();
//     const router = useRouter();
//     const [message, setMessage] = useState('');
//     const onSubmit = async(e) => {
//         e.preventDefault();
//         const emailValue = inputEmail.current.value;
//         const eventId = router?.query.id;
//         const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        
//         try{
//             if (!emailValue.match(validRegex)) {
//                 setMessage('Please introduce a correct email address');
//             } else {
//                 const response = await fetch('/api/email-registration', {
//                     method: 'POST',
//                     headers:{
//                         'Content-Type': 'application/json'
//                     },
//                     body : JSON.stringify({email: emailValue, eventId: eventId})
//                 });
//                 if(!response.ok) throw new Error(`Error: ${response.status}`)
//                 const data = await response.json();
//                 setMessage(data.message);
//                 inputEmail.current.value = '';
//                 //POST fetch request
//                 //body emalValue and the eventId
//             }
//         }catch(error){
//             console.log('ERROR', error)
//         }
//     }
//     return (
//         <div className="event_single_page">
//             <h1> {data.title} </h1>
//             <div className='image'>
//                 <Image src={data.image} fill={true} alt={data.title} />
//             </div>
//             <p> {data.description} </p>
//             <form onSubmit={onSubmit} className="email_registration"> 
//                 <label>Get registered for this event!</label>
//                 <input ref={inputEmail} type='text' placeholder="Pleace insert your E-mail"/> 
//                 <button type="submit">Submit</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     )
// }

// export default SingleEvent