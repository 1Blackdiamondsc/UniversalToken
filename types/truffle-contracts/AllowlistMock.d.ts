/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AllowlistMockContract
  extends Truffle.Contract<AllowlistMockInstance> {
  "new"(
    token: string,
    meta?: Truffle.TransactionDetails
  ): Promise<AllowlistMockInstance>;
}

export interface AllowlistAdminAdded {
  name: "AllowlistAdminAdded";
  args: {
    token: string;
    account: string;
    0: string;
    1: string;
  };
}

export interface AllowlistAdminRemoved {
  name: "AllowlistAdminRemoved";
  args: {
    token: string;
    account: string;
    0: string;
    1: string;
  };
}

export interface AllowlistedAdded {
  name: "AllowlistedAdded";
  args: {
    token: string;
    account: string;
    0: string;
    1: string;
  };
}

export interface AllowlistedRemoved {
  name: "AllowlistedRemoved";
  args: {
    token: string;
    account: string;
    0: string;
    1: string;
  };
}

type AllEvents =
  | AllowlistAdminAdded
  | AllowlistAdminRemoved
  | AllowlistedAdded
  | AllowlistedRemoved;

export interface AllowlistMockInstance extends Truffle.ContractInstance {
  addAllowlistAdmin: {
    (
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addAllowlisted: {
    (
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isAllowlistAdmin(
    token: string,
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isAllowlisted(
    token: string,
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  removeAllowlistAdmin: {
    (
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeAllowlisted: {
    (
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceAllowlistAdmin: {
    (token: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(token: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  mockFunction: {
    (
      token: string,
      mockActivated: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      token: string,
      mockActivated: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      token: string,
      mockActivated: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      token: string,
      mockActivated: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    addAllowlistAdmin: {
      (
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    addAllowlisted: {
      (
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isAllowlistAdmin(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isAllowlisted(
      token: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    removeAllowlistAdmin: {
      (
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeAllowlisted: {
      (
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    renounceAllowlistAdmin: {
      (token: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    mockFunction: {
      (
        token: string,
        mockActivated: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        token: string,
        mockActivated: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        token: string,
        mockActivated: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        token: string,
        mockActivated: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
