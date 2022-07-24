import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [state, setState] = useState({
    loading: true,
    person: null,
  });

  useEffect(() => {
    const url = 'https://api.randomuser.me/';

    const fetchResponse = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw Error('Did not received expected data');

        const data = await response.json();

        setState({
          loading: false,
          person: data.results[0],
        });
      } catch (err) {
        console.log(err.stack);
      }
    };
    fetchResponse(); // (async () => await fetchResponse())();
  }, []);

  return (
    <div>
      {state.loading || !state.person ? (
        'Loading...'
      ) : (
        <div>
          <img src={state.person.picture.large} alt="" />
          <div>{state.person.name.first}</div>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
