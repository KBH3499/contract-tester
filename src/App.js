import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract, ethers } from "ethers";
import "./App.css";
import logo from "./assets/logo.png"; // Ensure you have the logo in the correct path
import { useAppKitAccount } from "@reown/appkit/react";
import HideElement from "./components/HideElement";

function App() {
  const [contractAddress, setContractAddress] = useState("");
  const [abiInput, setAbiInput] = useState("");
  const [readFunctions, setReadFunctions] = useState([]);
  const [writeFunctions, setWriteFunctions] = useState([]);
  const [contract, setContract] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    setTimeout(() => {
      setErrorMessages({});
    }, 5000);
  }, []);

  const initializeContract = async () => {
    if (!contractAddress || !abiInput) {
      alert("Please enter both contract address and ABI.");
      return;
    }

    try {
      const parsedABI = JSON.parse(abiInput);
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractInstance = new Contract(contractAddress, parsedABI, signer);
      setContract(contractInstance);

      // Parse the ABI to categorize functions
      const readFuncs = parsedABI.filter(
        (item) =>
          item.type === "function" &&
          (item.stateMutability === "view" || item.stateMutability === "pure")
      );
      const writeFuncs = parsedABI.filter(
        (item) =>
          item.type === "function" &&
          (item.stateMutability === "nonpayable" ||
            item.stateMutability === "payable")
      );

      setReadFunctions(readFuncs);
      setWriteFunctions(writeFuncs);
    } catch (error) {
      console.error("Failed to initialize contract:", error);
      alert("Invalid ABI or contract address.");
    }
  };

  const handleInputChange = (funcName, index, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [funcName]: {
        ...(prevValues[funcName] || {}),
        [index]: value,
      },
    }));
  };

  const resetInputValues = (funcName) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [funcName]: {}, // Reset only the selected function's inputs
    }));
  };

  // Modified callReadFunction with input reset
  const callReadFunction = async (func) => {
    setErrorMessages({});
    setResults({});
    if (!contract) return;

    resetInputValues(func.name); // Reset inputs before calling the function
    setLoadingStates((prev) => ({ ...prev, [func.name]: true }));
    setErrorMessages((prev) => ({ ...prev, [func.name]: "" }));

    try {
      const inputs = func.inputs || [];
      const args = inputs.map((input, index) => {
        let value = inputValues[func.name]?.[index];
        if (input.type === "address" && typeof value === "string") {
          return value;
        } else if (input.type === "uint256" && !isNaN(value)) {
          return value;
        } else if (input.type === "bool" && typeof value === "boolean") {
          return value;
        } else if (input.type === "string" && typeof value === "string") {
          return value;
        }
        return value || null;
      });

      console.log("Function args:", args);

      const result = await contract[func.name](...args);
      setResults((prevResults) => ({
        ...prevResults,
        [func.name]: result.toString(),
      }));
    } catch (error) {
      console.error(`Error calling read function ${func.name}:`, error);
      setErrorMessages((prev) => ({
        ...prev,
        [func.name]: `Error: ${error.message}`,
      }));
    }

    setLoadingStates((prev) => ({ ...prev, [func.name]: false }));
  };

  // Modified callWriteFunction with input reset
  const callWriteFunction = async (func) => {
    setErrorMessages({});
    setResults({});
    if (!contract) return;

    resetInputValues(func.name); // Reset inputs before calling the function
    setLoadingStates((prev) => ({ ...prev, [func.name]: true }));
    setErrorMessages((prev) => ({ ...prev, [func.name]: "" }));

    try {
      const inputs = func.inputs || [];
      const args = inputs.map((input, index) => {
        let value = inputValues[func.name]?.[index];
        if (input.type === "address" && typeof value === "string") {
          return value;
        } else if (input.type === "uint256" && !isNaN(value)) {
          return value;
        } else if (input.type === "bool" && typeof value === "boolean") {
          return value;
        } else if (input.type === "string" && typeof value === "string") {
          return value;
        }
        return value || null;
      });

      console.log("Function args:", args);

      // Check if the function is payable
      const options = {};
      if (func.stateMutability === "payable") {
        const etherValue = prompt(
          "Enter ETH value to send with this transaction:"
        );
        if (etherValue) {
          options.value = ethers.parseEther(etherValue);
        }
      }

      const tx = await contract[func.name](...args, options);
      await tx.wait();
      alert("Transaction successful!");
    } catch (error) {
      console.error(`Error calling write function ${func.name}:`, error);

      // Specific error handling for "Invalid value"
      const errorMessage = error.message.includes("Invalid value")
        ? "The provided input values do not meet the contract's requirements. Please check and try again."
        : `Error: ${error.message}`;

      setErrorMessages((prev) => ({
        ...prev,
        [func.name]: errorMessage,
      }));
    }

    setLoadingStates((prev) => ({ ...prev, [func.name]: false }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="OpenABI Logo" className="app-logo" />
        <h1>OpenABI Explorer</h1>
      </header>
      <main className="app-content">
        {!isConnected ? (
          <button className="connect-button">
            <w3m-connect-button />
          </button>
        ) : (
          <div>
            <div className="wallet-info">
              <w3m-network-button />
              <w3m-account-button balance="hide" />
            </div>

            {isConnected && (
              <div className="contract-section">
                <p className="warning-message">
                  ⚠️ Ensure your selected network matches the network where the
                  contract is deployed.
                </p>
                <input
                  type="text"
                  placeholder="Enter Contract Address"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  className="input-field"
                />
                <textarea
                  placeholder="Enter Contract ABI (JSON format)"
                  value={abiInput}
                  onChange={(e) => setAbiInput(e.target.value)}
                  className="input-field abi-input"
                ></textarea>
                <button onClick={initializeContract} className="load-button">
                  Load Contract
                </button>
              </div>
            )}

            {contract && (
              <div className="sections">
                {/* Read Functions Section */}
                <div className="section">
                  <h2>Read Functions</h2>
                  <div className="functions-container">
                    {readFunctions.map((func, funcIndex) => (
                      <div key={funcIndex} className="function-card">
                        <h3>{func.name}</h3>
                        {func.inputs.map((input, index) => (
                          <input
                            key={index}
                            placeholder={`${input.name} (${input.type})`}
                            value={(inputValues[func.name] || [])[index] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                func.name,
                                index,
                                e.target.value
                              )
                            }
                            className="input"
                          />
                        ))}
                        <button
                          onClick={() => callReadFunction(func)}
                          className="button"
                          disabled={loadingStates[func.name]}
                        >
                          {loadingStates[func.name]
                            ? "Loading..."
                            : `Call ${func.name}`}
                        </button>
                        {errorMessages[func.name] && (
                          <p className="error-message">
                            {errorMessages[func.name]}
                          </p>
                        )}
                        {results[func.name] && (
                          <ul className="result-list">
                            {results[func.name]
                              .split(",")
                              .map((item, index) => (
                                <li key={index} className="result-item">
                                  {item}
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Write Functions Section */}
                <div className="section">
                  <h2>Write Functions</h2>
                  <div className="functions-container">
                    {writeFunctions.map((func, funcIndex) => (
                      <div key={funcIndex} className="function-card">
                        <h3>{func.name}</h3>
                        {func.inputs.map((input, index) => (
                          <input
                            key={index}
                            placeholder={`${input.name} (${input.type})`}
                            value={(inputValues[func.name] || [])[index] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                func.name,
                                index,
                                e.target.value
                              )
                            }
                            className="input"
                          />
                        ))}
                        <button
                          onClick={() => callWriteFunction(func)}
                          className="button"
                          disabled={loadingStates[func.name]}
                        >
                          {loadingStates[func.name]
                            ? "Submitting..."
                            : `Send ${func.name}`}
                        </button>
                        {errorMessages[func.name] && (
                          <p className="error-message">
                            {errorMessages[func.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <HideElement />
    </div>
  );
}

export default App;
