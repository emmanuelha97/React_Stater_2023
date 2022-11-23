import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'


function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@amazon" />
      <ProfileCard title="Cortana" handle="@microsoft" />
      <ProfileCard title="Siri" handle="@apple" />
    </div>
  );
}

export default App;
