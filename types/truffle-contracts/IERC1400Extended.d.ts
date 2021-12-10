/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IERC1400ExtendedContract
  extends Truffle.Contract<IERC1400ExtendedInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC1400ExtendedInstance>;
}

type AllEvents = never;

export interface IERC1400ExtendedInstance extends Truffle.ContractInstance {
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  controllers(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  totalPartitions(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getDefaultPartitions(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  totalSupplyByPartition(
    partition: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    controllers(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    totalPartitions(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getDefaultPartitions(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;

    totalSupplyByPartition(
      partition: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
