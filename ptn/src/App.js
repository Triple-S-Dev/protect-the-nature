import Button from './components/Button';
import { Title, Text, EventName } from './styled-components';

function App() {
  return (
    <div className='App'>
      <Title>
        <EventName>#ProtectTheNature</EventName> Events
      </Title>
      <Text>Ini adalah text dari styled components</Text>
      <Button value={'Join Activity'} />
    </div>
  );
}

export default App;
