# Getting Started with Nulink-sdk-demo


This project is a demo program that demonstrates how to use `@nulink_network/nulink-sdk-crosschain`

# how to use
  ```bash
    1.Rename .env.example to .env
    2.modify config:
      //the sdk backend testnet server address. in the nulink testnet,
      //you can use the address: https://agent.testnet.nulink.org/bk
      REACT_APP_CENTRALIZED_SERVER_URL=xxxxx
      //you ipfs address, Requires permission to write data. in the nulink testnet,
      //you can use the address: https://agent.testnet.nulink.org/nuipfs
      REACT_APP_IPFS_NODE_URL=xxxxx

      //Configure the parameters of the network that you connect to. Parameters for networks that are not connected do not need to be configured.
      
      //the nulink bsc testnet porter address. in the nulink testnet,
      //you can use the address: https://agent.testnet.nulink.org/porter
      REACT_APP_BSC_TESTNET_PORTER_URI= xxxxx
      //the bsc testnet web3 rpc url. example: 
      REACT_APP_BSC_TESTNET_WEB3_RPC_URL=xxxxx
      //the conflux testnet web3 rpc url. example:
      REACT_APP_CONFLUX_ESPACE_TESTNET_WEB3_RPC_URL=xxxxx

    3. yarn install
    4. yarn start
    5. After startup, the web pages you can access are as follows:
       // http://127.0.0.1:3000/upload-file
       1. upload-file: Show how to use nulink account to encrypt and upload files
       // http://127.0.0.1:3000/test
       2. test: Show how to use nulink's api -> src/feature/nulink-pre/testApis.ts
  ```
    
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
