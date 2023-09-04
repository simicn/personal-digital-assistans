import 'bulma/css/bulma.css';
import ProfileCart from './ProfileCart';
import AlexaImage from './images/alexa.png';
import CortanaImge from './images/cortana.png';
import SiriImage from './images/siri.png';



function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Pesonal digital assistans
          </p>
          
        </div>
      </section>

      <div ></div>
      <div className='container'>
        <section className='section'>
          <div className="columns">
            <div className="column is-3">
              <ProfileCart title="Alexa" handle="@hshsh" image={AlexaImage}
              description="Alexa was created by Amazon."
              ></ProfileCart>
            </div>
            <div className="column is-3">
              <ProfileCart title="Siri" handle="@hshsh" image={SiriImage}
              description="Siri was created by Microsoft."></ProfileCart>

            </div>
            <div className="column is-3">
              <ProfileCart title="Cortana" handle="@hshsh" image={CortanaImge}
              description="Cortana was created by Apple."></ProfileCart>

            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
