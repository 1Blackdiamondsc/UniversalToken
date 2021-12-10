/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IERC1400TokensCheckerContract
  extends Truffle.Contract<IERC1400TokensCheckerInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IERC1400TokensCheckerInstance>;
}

type AllEvents = never;

export interface IERC1400TokensCheckerInstance
  extends Truffle.ContractInstance {
  canTransferByPartition(
    payload: string,
    partition: string,
    operator: string,
    from: string,
    to: string,
    value: number | BN | string,
    data: string,
    operatorData: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: string; 2: string }>;

  methods: {
    canTransferByPartition(
      payload: string,
      partition: string,
      operator: string,
      from: string,
      to: string,
      value: number | BN | string,
      data: string,
      operatorData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: string; 2: string }>;
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
