/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IERC1643Contract extends Truffle.Contract<IERC1643Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC1643Instance>;
}

export interface DocumentRemoved {
  name: "DocumentRemoved";
  args: {
    name: string;
    uri: string;
    documentHash: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface DocumentUpdated {
  name: "DocumentUpdated";
  args: {
    name: string;
    uri: string;
    documentHash: string;
    0: string;
    1: string;
    2: string;
  };
}

type AllEvents = DocumentRemoved | DocumentUpdated;

export interface IERC1643Instance extends Truffle.ContractInstance {
  getDocument(
    _name: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: string; 2: BN }>;

  setDocument: {
    (
      _name: string,
      _uri: string,
      _documentHash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _name: string,
      _uri: string,
      _documentHash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _name: string,
      _uri: string,
      _documentHash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      _uri: string,
      _documentHash: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeDocument: {
    (_name: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_name: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAllDocuments(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  methods: {
    getDocument(
      _name: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: string; 2: BN }>;

    setDocument: {
      (
        _name: string,
        _uri: string,
        _documentHash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _name: string,
        _uri: string,
        _documentHash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        _uri: string,
        _documentHash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        _uri: string,
        _documentHash: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeDocument: {
      (_name: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAllDocuments(txDetails?: Truffle.TransactionDetails): Promise<string[]>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
