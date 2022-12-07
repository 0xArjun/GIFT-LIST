import React, { useEffect, useState } from 'react';
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
  const [fetch, setFetch] = useState(false);
  const [isWinner, setisWinner] = useState<boolean>();
  const [response, setResponse] = useState<{
    message: string;
    isWinner: boolean;
  }>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('send request');
        if (fetch) {
          const res = (await getResult(name)) as unknown as {
            isWinner: boolean;
            message: string;
          };

          setisWinner(res.isWinner as boolean);
          setResponse(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setFetch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetch]);

  return (
    <div>
      <h2 className="text-3xl font-bold  text-center">Check the Gift Winner</h2>
      <div className="flex flex-row  items-center space-x-1.5 justify-center">
        <div>
          <UserInput name={name} setName={setName} />
        </div>
        <div>
          <GetWinner setFetch={setFetch} />
        </div>
      </div>
      {response && (
        <div className="flex flex-col  justify-center">
          <h2 className="text-center mt-4 mb-3"> {response.message} </h2>
          <Player
            className="mt-5"
            src={
              isWinner
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
