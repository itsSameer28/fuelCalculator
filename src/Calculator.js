import React, { useState, useEffect } from "react";
import "./App.css";
function Calculator() {
  const [inputTextA, setInputTextA] = useState("");
  const [inputTextE, setInputTextE] = useState("");
  const [inputTextH, setInputTextH] = useState("");
  const [inputTextK, setInputTextK] = useState("");
  const [inputTextM, setInputTextM] = useState("");
  const [fuelOnBoardingBeforeFuel, setFuelOnBoardingBeforeFuel] = useState("");
  const [leftOuter, setLeftOuter] = useState("");
  const [rightOuter, setRightOuter] = useState("");
  const [center, setCenter] = useState("");
  const [upliftQuantity, setUpliftQuantity] = useState("");
  const [requiredUpliftOutputD, setRequiredUpliftOutputD] = useState("");
  const [requiredUpliftOutputF, setRequiredUpliftOutputF] = useState("");
  const [totalCFOBAfterRefulingL, setTotalCFOBAfterRefulingL] = useState("");
  const [cfobAterRefuelingN, setcfobAterRefuelingN] = useState("");
  const [totalIndicatedFobP, setTotalIndicatedFobP] = useState("");
  const [deltaM, setDeltaM] = useState("");
  useEffect(() => {
    let reqLeftOuter, reqRightOuter, reqCenter, deltaM;

    //Calculating A
    if (inputTextA <= 7800) {
      reqLeftOuter = inputTextA / 2;
      reqRightOuter = inputTextA / 2;
      reqCenter = 0;
    } else {
      reqLeftOuter = 3900;
      reqRightOuter = 3900;
      reqCenter = inputTextA - (reqLeftOuter + reqRightOuter);
    }
    setLeftOuter(reqLeftOuter);
    setRightOuter(reqRightOuter);
    setCenter(reqCenter);

    //Calculating J
    const upliftQuantityValue = Math.floor(inputTextH * inputTextE);
    setUpliftQuantity(upliftQuantityValue);

    //Calculating C
    const fuelOnBoardBeforeRefuelingValue = inputTextK - inputTextM;
    const requiredUpliftOutputValueOfD = Number(
      inputTextA - fuelOnBoardBeforeRefuelingValue
    );
    setFuelOnBoardingBeforeFuel(fuelOnBoardBeforeRefuelingValue);
    setRequiredUpliftOutputD(requiredUpliftOutputValueOfD);

    //Calculating F
    const requiredUpliftOutputVAlueOfF =
      inputTextE > 0.001
        ? Math.floor(requiredUpliftOutputValueOfD / inputTextE)
        : 0;

    // const F = Math.floor(Math.min(D / E, 1000));
    setFuelOnBoardingBeforeFuel(fuelOnBoardBeforeRefuelingValue);
    setRequiredUpliftOutputD(requiredUpliftOutputValueOfD);
    setRequiredUpliftOutputF(requiredUpliftOutputVAlueOfF);

    //Calculating L
    const totalCFOBAfterRefulingValueOfL =
      Number(upliftQuantityValue) + Number(inputTextK);
    setTotalCFOBAfterRefulingL(totalCFOBAfterRefulingValueOfL);

    //Calculating N
    const cfobAterRefuelingValueOfN =
      totalCFOBAfterRefulingValueOfL - inputTextM;
    setcfobAterRefuelingN(cfobAterRefuelingValueOfN);

    //Calculating P
    const totalIndicatedFobValueOfP = Math.floor(
      reqLeftOuter + reqRightOuter + reqCenter
    );
    setTotalIndicatedFobP(totalIndicatedFobValueOfP);

    //Calculating deltaM
    deltaM =
      Math.abs(cfobAterRefuelingValueOfN - totalIndicatedFobValueOfP) %10 ;
    setDeltaM(deltaM);
  }, [
    inputTextA,
    inputTextE,
    inputTextH,
    inputTextK,
    inputTextM,
    requiredUpliftOutputD,
  ]);

  return (
    <div className="calculator_App">
      <table className="mainTable">
        <thead>
          <th>Actual fuel quantity</th>
          <th>fuel quantity calculation</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Tank</td>
                    <td>Requested</td>
                    <span>
                      <td>
                        <div>After Refueling</div>
                        <td className="left_Col">Indicators</td>
                        <td className="right_Col">MLI/Drip Sticks</td>
                      </td>
                    </span>
                  </tr>
                  <tr>
                    <td>Left Outer</td>
                    <td>{leftOuter}</td>
                    <span>
                      <td className="left_Col">
                        <input
                          type="number"
                          value={leftOuter}
                          onChange={(e) => setLeftOuter(e.target.value)}
                        />
                      </td>
                      <td className="right_Col">-</td>
                    </span>
                  </tr>
                  <tr>
                    <td>Left Inner</td>
                    <td>-</td>
                    <span>
                      <td className="left_Col">-</td>
                      <td className="right_Col">-</td>
                    </span>
                  </tr>
                  <tr>
                    <td>Center</td>
                    <td>{center}</td>
                    <span>
                      <td className="left_Col">
                        <input
                          type="number"
                          value={center}
                          onChange={(e) => setCenter(e.target.value)}
                        />
                      </td>
                      <td className="right_Col">-</td>
                    </span>
                  </tr>
                  <tr>
                    <td>Right Inner</td>
                    <td>-</td>
                    <span>
                      <td className="left_Col">-</td>
                      <td className="right_Col">-</td>
                    </span>
                  </tr>
                  <tr>
                    <td>Right Outer</td>
                    <td>{rightOuter}</td>
                    <span>
                      <td className="left_Col">
                        <input
                          type="number"
                          value={rightOuter}
                          onChange={(e) => setRightOuter(e.target.value)}
                        />
                      </td>
                      <td className="right_Col">-</td>
                    </span>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      <div>
                        A=
                        <input
                          type="number"
                          value={inputTextA}
                          onChange={(e) => setInputTextA(e.target.value)}
                        />
                      </div>
                    </td>
                    <span>
                      <div>
                        <div>
                          <td className="left_Col">B={totalIndicatedFobP}</td>
                          <td className="right_Col">-</td>
                        </div>
                      </div>
                    </span>
                  </tr>
                  <tr>
                    <td>Fuel On Board</td>
                    <td>C={fuelOnBoardingBeforeFuel}</td>
                    <span>
                      <td className="left_Col">
                        Density
                        <br />
                        (kg/ltr)
                      </td>
                      <td className="right_Col">
                        To Uplift(ltr)
                        <br />
                        (F=D/E)
                      </td>
                    </span>
                  </tr>
                  <tr>
                    <td>
                      Required Uplift(kg)
                      <br />
                      (D=(A-C))
                    </td>
                    <td>D={requiredUpliftOutputD}</td>
                    <span>
                      <td className="left_Col">
                        <div>
                          E=
                          <input
                            type="number"
                            value={inputTextE}
                            onChange={(e) => setInputTextE(e.target.value)}
                          />
                        </div>
                      </td>
                      <td className="right_Col">{requiredUpliftOutputF}</td>
                    </span>
                  </tr>
                  <tr>
                    <td>&#9652; m=|N-P|={deltaM}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Supplied</td>
                    <td>
                      <div>G---USG</div>
                      <div>
                        H=
                        <input
                          value={inputTextH}
                          onChange={(e) => setInputTextH(e.target.value)}
                          type="number"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Density</div>
                      <div>(Kg/Ltr)</div>
                    </td>
                    <td>
                      <div>
                        E=
                        <input
                          type="number"
                          step="0.001"
                          value={inputTextE}
                          onChange={(e) => setInputTextH(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Uplfit Quantity</div>
                      <div>(J=HxE)</div>
                    </td>
                    <td>
                      <div>J={upliftQuantity}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>RFOB</div>
                      <div>(Kg/Ltr)</div>
                    </td>
                    <td>
                      <div>
                        K=
                        <input
                          type="number"
                          value={inputTextK}
                          onChange={(e) => setInputTextK(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Total CFOB</div>
                      <div>(L=J+K)</div>
                    </td>
                    <td>
                      <div>L={totalCFOBAfterRefulingL}kg</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Used Fuel - APU</div>
                      <div>(M=QxT(hr))</div>
                    </td>
                    <td>
                      <div>
                        M=
                        <input
                          type="number"
                          value={inputTextM}
                          onChange={(e) => setInputTextM(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>CFOB After Refeueling</div>
                      <div>(N=L-M)</div>
                    </td>
                    <td>
                      <div>N={cfobAterRefuelingN}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Total Indicate FOB</div>
                      <div>(P=Totalizer or P=B)</div>
                    </td>
                    <td>
                      <div>P={totalIndicatedFobP}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calculator;