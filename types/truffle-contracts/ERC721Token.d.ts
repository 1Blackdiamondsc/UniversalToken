/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ERC721TokenContract
  extends Truffle.Contract<ERC721TokenInstance> {
  "new"(
    name: string,
    symbol: string,
    baseUri: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC721TokenInstance>;
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    approved: string;
    tokenId: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface ApprovalForAll {
  name: "ApprovalForAll";
  args: {
    owner: string;
    operator: string;
    approved: boolean;
    0: string;
    1: string;
    2: boolean;
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

export interface RoleAdminChanged {
  name: "RoleAdminChanged";
  args: {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface RoleGranted {
  name: "RoleGranted";
  args: {
    role: string;
    account: string;
    sender: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface RoleRevoked {
  name: "RoleRevoked";
  args: {
    role: string;
    account: string;
    sender: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    tokenId: BN;
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
  | ApprovalForAll
  | MinterAdded
  | MinterRemoved
  | OwnershipTransferred
  | Paused
  | RoleAdminChanged
  | RoleGranted
  | RoleRevoked
  | Transfer
  | Unpaused;

export interface ERC721TokenInstance extends Truffle.ContractInstance {
  DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

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
   * See {IERC721-approve}.
   */
  approve: {
    (
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC721-balanceOf}.
   */
  balanceOf(owner: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
   */
  burn: {
    (
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

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
   * See {IERC721-getApproved}.
   */
  getApproved(
    tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
   */
  getRoleAdmin(
    role: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
   */
  getRoleMember(
    role: string,
    index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  /**
   * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
   */
  getRoleMemberCount(
    role: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Overload {grantRole} to track enumerable memberships
   */
  grantRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns `true` if `account` has been granted `role`.
   */
  hasRole(
    role: string,
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * See {IERC721-isApprovedForAll}.
   */
  isApprovedForAll(
    owner: string,
    operator: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isMinter(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * See {IERC721Metadata-name}.
   */
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * See {IERC721-ownerOf}.
   */
  ownerOf(
    tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

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
   * Overload {renounceRole} to track enumerable memberships
   */
  renounceRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Overload {revokeRole} to track enumerable memberships
   */
  revokeRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC721-setApprovalForAll}.
   */
  setApprovalForAll: {
    (
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC721Metadata-symbol}.
   */
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * See {IERC721Enumerable-tokenByIndex}.
   */
  tokenByIndex(
    index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * See {IERC721Enumerable-tokenOfOwnerByIndex}.
   */
  tokenOfOwnerByIndex(
    owner: string,
    index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * See {IERC721Enumerable-totalSupply}.
   */
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * See {IERC721-transferFrom}.
   */
  transferFrom: {
    (
      from: string,
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      tokenId: number | BN | string,
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
   * Function to mint tokens
   * @param to The address that will receive the minted tokens.
   * @param tokenId The token id to mint.
   */
  mint: {
    (
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  tokenURI(
    tokenId: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setTokenURI: {
    (
      tokenId: number | BN | string,
      uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      tokenId: number | BN | string,
      uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      tokenId: number | BN | string,
      uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      tokenId: number | BN | string,
      uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  domainName(txDetails?: Truffle.TransactionDetails): Promise<string>;

  domainVersion(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

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
     * See {IERC721-approve}.
     */
    approve: {
      (
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
     */
    burn: {
      (
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    canImplementInterfaceForAddress(
      interfaceHash: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

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
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(
      role: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(
      role: string,
      index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(
      role: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Overload {grantRole} to track enumerable memberships
     */
    grantRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isMinter(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

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
     * Overload {renounceRole} to track enumerable memberships
     */
    renounceRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Overload {revokeRole} to track enumerable memberships
     */
    revokeRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll: {
      (
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: string,
      index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom: {
      (
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        tokenId: number | BN | string,
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
     * Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param tokenId The token id to mint.
     */
    mint: {
      (
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    tokenURI(
      tokenId: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setTokenURI: {
      (
        tokenId: number | BN | string,
        uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        tokenId: number | BN | string,
        uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        tokenId: number | BN | string,
        uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        tokenId: number | BN | string,
        uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    domainName(txDetails?: Truffle.TransactionDetails): Promise<string>;

    domainVersion(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)": {
      (
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        tokenId: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)": {
      (
        from: string,
        to: string,
        tokenId: number | BN | string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        tokenId: number | BN | string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        tokenId: number | BN | string,
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        tokenId: number | BN | string,
        _data: string,
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
