import ProfileCard from "./ProfileCard";
import 'bulma/css/bulma.css';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistant</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title='Alexa' 
                            handle='@alexa99' 
                            image={AlexaImage} 
                            description='Alexa is PDA by Amazon'
                            />  
                        </div>
                        <div className='column is-4'>
                         <ProfileCard title='Cortana' 
                         handle='@cortana32' 
                         image={CortanaImage} 
                         description='Remember Cortana?'
                         />                     
                        </div>
                        <div className='column is-4'>
                        <ProfileCard title='Siri' 
                        handle='@siri01' 
                        image={SiriImage} 
                        description='Who is using Siri?'
                        />                       
                        </div>
                    </div>
                </section>
            </div>



        </div>
    );
}

export default App;