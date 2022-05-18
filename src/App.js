import { ApolloExplorerReact } from '@apollo/explorer';
import './App.css';

function App() {

  return (
    <ApolloExplorerReact
      className='App'
      apolloStudioEnv='staging'
      graphRef='acephei@current'
      endpointUrl='https://acephei-gateway.herokuapp.com'
      initialState={{
        document: `query Example {
me {
  id
}
}`,
        variables: {
          test: 'abcxyz',
        },
        displayOptions: {
          showHeadersAndEnvVars: true,
        },
      }}
    />
  );
}

export default App;
