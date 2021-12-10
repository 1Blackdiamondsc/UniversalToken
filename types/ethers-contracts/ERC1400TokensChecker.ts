/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC1400TokensCheckerInterface extends utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "canTransferByPartition(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canTransferByPartition",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canTransferByPartition",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC1400TokensChecker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1400TokensCheckerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Know the reason on success or failure based on the EIP-1066 application-specific status codes.
     * @param data Information attached to the transfer. [CAN CONTAIN THE DESTINATION PARTITION]
     * @param from Token holder.
     * @param operator The address performing the transfer.
     * @param operatorData Information attached to the transfer, by the operator (if any).
     * @param partition Name of the partition.
     * @param payload Payload of the initial transaction.
     * @param to Token recipient.
     * @param value Number of tokens to transfer.
     */
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Know the reason on success or failure based on the EIP-1066 application-specific status codes.
   * @param data Information attached to the transfer. [CAN CONTAIN THE DESTINATION PARTITION]
   * @param from Token holder.
   * @param operator The address performing the transfer.
   * @param operatorData Information attached to the transfer, by the operator (if any).
   * @param partition Name of the partition.
   * @param payload Payload of the initial transaction.
   * @param to Token recipient.
   * @param value Number of tokens to transfer.
   */
  canTransferByPartition(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, string]>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Know the reason on success or failure based on the EIP-1066 application-specific status codes.
     * @param data Information attached to the transfer. [CAN CONTAIN THE DESTINATION PARTITION]
     * @param from Token holder.
     * @param operator The address performing the transfer.
     * @param operatorData Information attached to the transfer, by the operator (if any).
     * @param partition Name of the partition.
     * @param payload Payload of the initial transaction.
     * @param to Token recipient.
     * @param value Number of tokens to transfer.
     */
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Know the reason on success or failure based on the EIP-1066 application-specific status codes.
     * @param data Information attached to the transfer. [CAN CONTAIN THE DESTINATION PARTITION]
     * @param from Token holder.
     * @param operator The address performing the transfer.
     * @param operatorData Information attached to the transfer, by the operator (if any).
     * @param partition Name of the partition.
     * @param payload Payload of the initial transaction.
     * @param to Token recipient.
     * @param value Number of tokens to transfer.
     */
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Know the reason on success or failure based on the EIP-1066 application-specific status codes.
     * @param data Information attached to the transfer. [CAN CONTAIN THE DESTINATION PARTITION]
     * @param from Token holder.
     * @param operator The address performing the transfer.
     * @param operatorData Information attached to the transfer, by the operator (if any).
     * @param partition Name of the partition.
     * @param payload Payload of the initial transaction.
     * @param to Token recipient.
     * @param value Number of tokens to transfer.
     */
    canTransferByPartition(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
