/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface BatchReaderContract
  extends Truffle.Contract<BatchReaderInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BatchReaderInstance>;
}

type AllEvents = never;

export interface BatchReaderInstance extends Truffle.ContractInstance {
  canImplementInterfaceForAddress(
    interfaceHash: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Get batch of token supplies.
   */
  batchTokenSuppliesInfos(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: BN[]; 2: string[]; 3: BN[]; 4: BN[]; 5: string[] }>;

  /**
   * Get batch of token roles.
   */
  batchTokenRolesInfos(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[]; 2: string[]; 3: BN[]; 4: string[] }>;

  /**
   * Get batch of token controllers.
   */
  batchControllers(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[] }>;

  /**
   * Get batch of token extension controllers.
   */
  batchExtensionControllers(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[] }>;

  /**
   * Get batch of token extension setup.
   */
  batchTokenExtensionSetup(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: string[];
    1: BN[];
    2: boolean[];
    3: boolean[];
    4: boolean[];
    5: boolean[];
  }>;

  /**
   * Get batch of token extension setup (part 1).
   */
  batchTokenExtensionSetup1(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[]; 2: boolean[]; 3: boolean[] }>;

  /**
   * Get batch of token extension setup (part 2).
   */
  batchTokenExtensionSetup2(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: boolean[]; 1: boolean[] }>;

  /**
   * Get batch of ERC1400 balances.
   */
  batchERC1400Balances(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: BN[]; 2: BN[]; 3: string[]; 4: BN[]; 5: BN[] }>;

  /**
   * Get batch of ERC20 balances.
   */
  batchERC20Balances(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: BN[] }>;

  /**
   * Get batch of ETH balances.
   */
  batchEthBalance(
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  /**
   * Get batch of token balances.
   */
  batchBalanceOf(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  /**
   * Get batch of partition balances.
   */
  batchBalanceOfByPartition(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

  /**
   * Get batch of spendable partition balances.
   */
  batchSpendableBalanceOfByPartition(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

  /**
   * Get batch of token partitions.
   */
  batchTotalPartitions(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

  /**
   * Get batch of token default partitions.
   */
  batchDefaultPartitions(
    tokens: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN[]; 1: string[] }>;

  /**
   * Get batch of validation status.
   */
  batchValidations(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: boolean[]; 1: boolean[] }>;

  /**
   * Get batch of allowlisted status.
   */
  batchAllowlisted(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean[]>;

  /**
   * Get batch of blocklisted status.
   */
  batchBlocklisted(
    tokens: string[],
    tokenHolders: string[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean[]>;

  methods: {
    canImplementInterfaceForAddress(
      interfaceHash: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Get batch of token supplies.
     */
    batchTokenSuppliesInfos(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: BN[];
      1: BN[];
      2: string[];
      3: BN[];
      4: BN[];
      5: string[];
    }>;

    /**
     * Get batch of token roles.
     */
    batchTokenRolesInfos(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[]; 2: string[]; 3: BN[]; 4: string[] }>;

    /**
     * Get batch of token controllers.
     */
    batchControllers(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[] }>;

    /**
     * Get batch of token extension controllers.
     */
    batchExtensionControllers(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[] }>;

    /**
     * Get batch of token extension setup.
     */
    batchTokenExtensionSetup(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: string[];
      1: BN[];
      2: boolean[];
      3: boolean[];
      4: boolean[];
      5: boolean[];
    }>;

    /**
     * Get batch of token extension setup (part 1).
     */
    batchTokenExtensionSetup1(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[]; 2: boolean[]; 3: boolean[] }>;

    /**
     * Get batch of token extension setup (part 2).
     */
    batchTokenExtensionSetup2(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: boolean[]; 1: boolean[] }>;

    /**
     * Get batch of ERC1400 balances.
     */
    batchERC1400Balances(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: BN[]; 2: BN[]; 3: string[]; 4: BN[]; 5: BN[] }>;

    /**
     * Get batch of ERC20 balances.
     */
    batchERC20Balances(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: BN[] }>;

    /**
     * Get batch of ETH balances.
     */
    batchEthBalance(
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    /**
     * Get batch of token balances.
     */
    batchBalanceOf(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    /**
     * Get batch of partition balances.
     */
    batchBalanceOfByPartition(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

    /**
     * Get batch of spendable partition balances.
     */
    batchSpendableBalanceOfByPartition(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

    /**
     * Get batch of token partitions.
     */
    batchTotalPartitions(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[]; 2: BN[] }>;

    /**
     * Get batch of token default partitions.
     */
    batchDefaultPartitions(
      tokens: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN[]; 1: string[] }>;

    /**
     * Get batch of validation status.
     */
    batchValidations(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: boolean[]; 1: boolean[] }>;

    /**
     * Get batch of allowlisted status.
     */
    batchAllowlisted(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean[]>;

    /**
     * Get batch of blocklisted status.
     */
    batchBlocklisted(
      tokens: string[],
      tokenHolders: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean[]>;
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
