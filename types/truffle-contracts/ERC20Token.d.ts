/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ERC20TokenContract
  extends Truffle.Contract<ERC20TokenInstance> {
  "new"(
    name: string,
    symbol: string,
    __decimals: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC20TokenInstance>;
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    spender: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface MinterAdded {
  name: "MinterAdded";
  args: {
    account: string;
    0: string;
  };
}

export interface MinterRemoved {
  name: "MinterRemoved";
  args: {
    account: string;
    0: string;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface Paused {
  name: "Paused";
  args: {
    account: string;
    0: string;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Unpaused {
  name: "Unpaused";
  args: {
    account: string;
    0: string;
  };
}

type AllEvents =
  | Approval
  | MinterAdded
  | MinterRemoved
  | OwnershipTransferred
  | Paused
  | Transfer
  | Unpaused;

export interface ERC20TokenInstance extends Truffle.ContractInstance {
  addMinter: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC20-allowance}.
   */
  allowance(
    owner: string,
    spender: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
   */
  approve: {
    (
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC20-balanceOf}.
   */
  balanceOf(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Destroys `amount` tokens from the caller. See {ERC20-_burn}.
   */
  burn: {
    (
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.
   */
  burnFrom: {
    (
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
   */
  decreaseAllowance: {
    (
      spender: string,
      subtractedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      subtractedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      subtractedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      subtractedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  domainSeparator: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<string>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  generateDomainSeparator(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
   */
  increaseAllowance: {
    (
      spender: string,
      addedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      addedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      addedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      addedValue: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isMinter(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Returns the name of the token.
   */
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns true if the contract is paused, and false otherwise.
   */
  paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  removeMinter: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceMinter: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Returns the symbol of the token, usually a shorter version of the name.
   */
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * See {IERC20-totalSupply}.
   */
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
   */
  transfer: {
    (
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
   */
  transferFrom: {
    (
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string,
      recipient: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
   */
  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Function to mint tokens
   * @param to The address that will receive the minted tokens.
   * @param value The amount of tokens to mint.
   */
  mint: {
    (
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  domainName(txDetails?: Truffle.TransactionDetails): Promise<string>;

  domainVersion(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    addMinter: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    approve: {
      (
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC20-balanceOf}.
     */
    balanceOf(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Destroys `amount` tokens from the caller. See {ERC20-_burn}.
     */
    burn: {
      (
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.
     */
    burnFrom: {
      (
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    canImplementInterfaceForAddress(
      interfaceHash: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance: {
      (
        spender: string,
        subtractedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        subtractedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        subtractedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        subtractedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    domainSeparator: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<string>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    generateDomainSeparator(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    increaseAllowance: {
      (
        spender: string,
        addedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        addedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        addedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        addedValue: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isMinter(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Returns the name of the token.
     */
    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    removeMinter: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    renounceMinter: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IERC20-totalSupply}.
     */
    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer: {
      (
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    transferFrom: {
      (
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        sender: string,
        recipient: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param value The amount of tokens to mint.
     */
    mint: {
      (
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    domainName(txDetails?: Truffle.TransactionDetails): Promise<string>;

    domainVersion(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
