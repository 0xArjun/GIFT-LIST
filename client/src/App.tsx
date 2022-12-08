import React, { useState } from 'react';
import '../src/index.css';
import GetWinner from './components/GetWinner';
import UserInput from './components/input';
import getResult from './network/gift';
import { Player } from '@lottiefiles/react-lottie-player';
interface response {
  message: string;
  isWinner: boolean;
}
function App() {
  const [name, setName] = useState('');
  function changeValue(e: any) {
    const name = e.target.value;
    setName(name);
  }
  const [response, setResponse] = useState<{
    message: string;
    isWinner: boolean;
  }>();

  async function getWinner(e: any) {
    try {
      e.preventDefault();
      const res = (await getResult(name)) as unknown as response;

      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold  text-center">Check the Gift Winner</h2>
      <form
        onSubmit={getWinner}
        className="flex flex-row  items-end space-x-1.5 justify-center"
      >
        <UserInput
          placeholder="Arjun"
          htmlForInput="user_name"
          changeValue={changeValue}
        />
        <GetWinner type="submit"> Click Me</GetWinner>
      </form>
      {response && (
        <div className="flex flex-col  justify-center">
          <h2 className="text-center mt-4 mb-3"> {response.message} </h2>
          <Player
            className="mt-5"
            src={
              response.isWinner
                ? 'https://assets1.lottiefiles.com/packages/lf20_96bovdur.json'
                : 'https://assets7.lottiefiles.com/private_files/lf30_hgp6wzzw.json'
            }
            loop
            autoplay
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
