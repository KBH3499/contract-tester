import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const CONTRACT_ADDRESS = "0xc0DC5CDD6579A5F88DfEC884C4024784275A2D4e";
// const ABI = [
//   {
//     "inputs": [
//       {
//         "internalType": "address payable",
//         "name": "_withdrawAddress",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [],
//     "name": "InvalidShortString",
//     "type": "error"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "str",
//         "type": "string"
//       }
//     ],
//     "name": "StringTooLong",
//     "type": "error"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_adminAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_signatureAdminAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "_time",
//         "type": "uint256"
//       }
//     ],
//     "name": "AddSignatureAdmin",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "EIP712DomainChanged",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "Paused",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "uint8",
//         "name": "_category",
//         "type": "uint8"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint8",
//         "name": "_tier",
//         "type": "uint8"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_currencyAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_beneficiary",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_time",
//         "type": "uint256"
//       }
//     ],
//     "name": "PaymentReceived",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_adminAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_signatureAdminAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "_time",
//         "type": "uint256"
//       }
//     ],
//     "name": "RemoveSignatureAdmin",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "indexed": true,
//         "internalType": "bytes32",
//         "name": "previousAdminRole",
//         "type": "bytes32"
//       },
//       {
//         "indexed": true,
//         "internalType": "bytes32",
//         "name": "newAdminRole",
//         "type": "bytes32"
//       }
//     ],
//     "name": "RoleAdminChanged",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       }
//     ],
//     "name": "RoleGranted",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       }
//     ],
//     "name": "RoleRevoked",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "Unpaused",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_callerAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_withdrawAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "_time",
//         "type": "uint256"
//       }
//     ],
//     "name": "UpdateWithdrawAddress",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "withdrawer",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "withdrawAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "WithdrawNative",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_currencyAddress",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "withdrawer",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "withdrawAddress",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "WithdrawToken",
//     "type": "event"
//   },
//   {
//     "inputs": [],
//     "name": "ADMIN_ROLE",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "DEFAULT_ADMIN_ROLE",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "WITHDRAWER_ROLE",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_signatureAdminAddress",
//         "type": "address"
//       }
//     ],
//     "name": "addSignatureAdmin",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "eip712Domain",
//     "outputs": [
//       {
//         "internalType": "bytes1",
//         "name": "fields",
//         "type": "bytes1"
//       },
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "version",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "chainId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "verifyingContract",
//         "type": "address"
//       },
//       {
//         "internalType": "bytes32",
//         "name": "salt",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "uint256[]",
//         "name": "extensions",
//         "type": "uint256[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "contract IERC20",
//         "name": "_currencyAddress",
//         "type": "address"
//       }
//     ],
//     "name": "getBalanceOfToken",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getNativeBalance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       }
//     ],
//     "name": "getRoleAdmin",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_address",
//         "type": "address"
//       }
//     ],
//     "name": "getSignatureAdmin",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint8",
//         "name": "_category",
//         "type": "uint8"
//       },
//       {
//         "internalType": "uint8",
//         "name": "_tier",
//         "type": "uint8"
//       },
//       {
//         "internalType": "address",
//         "name": "_currencyAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "_beneficiary",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_salt",
//         "type": "uint256"
//       }
//     ],
//     "name": "getStandardMessageHash",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "messageHash",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getWithdrawAddress",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "grantRole",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "hasRole",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "_sig",
//         "type": "bytes"
//       }
//     ],
//     "name": "isSignatureUsed",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "pause",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "paused",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint8",
//         "name": "_category",
//         "type": "uint8"
//       },
//       {
//         "internalType": "uint8",
//         "name": "_tier",
//         "type": "uint8"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_salt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "bytes",
//         "name": "_sig",
//         "type": "bytes"
//       }
//     ],
//     "name": "payWithNative",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint8",
//         "name": "_category",
//         "type": "uint8"
//       },
//       {
//         "internalType": "uint8",
//         "name": "_tier",
//         "type": "uint8"
//       },
//       {
//         "internalType": "contract IERC20",
//         "name": "_currencyAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_salt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "bytes",
//         "name": "_sig",
//         "type": "bytes"
//       }
//     ],
//     "name": "payWithToken",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "_sig",
//         "type": "bytes"
//       },
//       {
//         "internalType": "bytes32",
//         "name": "_msgHash",
//         "type": "bytes32"
//       }
//     ],
//     "name": "recoverAddress",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "pure",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_signatureAdminAddress",
//         "type": "address"
//       }
//     ],
//     "name": "removeSignatureAdmin",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "renounceRole",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "role",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "revokeRole",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes4",
//         "name": "interfaceId",
//         "type": "bytes4"
//       }
//     ],
//     "name": "supportsInterface",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "unPause",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address payable",
//         "name": "_withdrawAddress",
//         "type": "address"
//       }
//     ],
//     "name": "updateWithdrawAddress",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "withdrawNative",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "contract IERC20",
//         "name": "_currencyAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "withdrawToken",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];