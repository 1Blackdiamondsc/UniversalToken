/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMinterMock, IMinterMockInterface } from "../IMinterMock";

const _abi = [
  {
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMinterMock__factory {
  static readonly abi = _abi;
  static createInterface(): IMinterMockInterface {
    return new utils.Interface(_abi) as IMinterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMinterMock {
    return new Contract(address, _abi, signerOrProvider) as IMinterMock;
  }
}
