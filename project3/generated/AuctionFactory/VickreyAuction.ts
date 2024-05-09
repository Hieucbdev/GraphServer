// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class VickreyAuction__getAuctionInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Address;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Address,
    value7: BigInt,
    value8: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }

  getValue5(): BigInt {
    return this.value5;
  }

  getValue6(): Address {
    return this.value6;
  }

  getValue7(): BigInt {
    return this.value7;
  }

  getValue8(): BigInt {
    return this.value8;
  }
}

export class VickreyAuction__getBidDepositAddrResult {
  value0: Bytes;
  value1: Address;

  constructor(value0: Bytes, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getSalt(): Bytes {
    return this.value0;
  }

  getDepositAddr(): Address {
    return this.value1;
  }
}

export class VickreyAuction__getNFTInfoResult {
  value0: Array<Address>;
  value1: Array<BigInt>;
  value2: Array<BigInt>;

  constructor(
    value0: Array<Address>,
    value1: Array<BigInt>,
    value2: Array<BigInt>,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    return map;
  }

  getValue0(): Array<Address> {
    return this.value0;
  }

  getValue1(): Array<BigInt> {
    return this.value1;
  }

  getValue2(): Array<BigInt> {
    return this.value2;
  }
}

export class VickreyAuction__revealInput_headerStruct extends ethereum.Tuple {
  get hash(): Bytes {
    return this[0].toBytes();
  }

  get parentHash(): Bytes {
    return this[1].toBytes();
  }

  get sha3Uncles(): Bytes {
    return this[2].toBytes();
  }

  get miner(): Address {
    return this[3].toAddress();
  }

  get stateRoot(): Bytes {
    return this[4].toBytes();
  }

  get transactionsRoot(): Bytes {
    return this[5].toBytes();
  }

  get receiptsRoot(): Bytes {
    return this[6].toBytes();
  }

  get logsBloom(): Bytes {
    return this[7].toBytes();
  }

  get difficulty(): BigInt {
    return this[8].toBigInt();
  }

  get number(): BigInt {
    return this[9].toBigInt();
  }

  get gasLimit(): BigInt {
    return this[10].toBigInt();
  }

  get gasUsed(): BigInt {
    return this[11].toBigInt();
  }

  get timestamp(): BigInt {
    return this[12].toBigInt();
  }

  get extraData(): Bytes {
    return this[13].toBytes();
  }

  get mixHash(): Bytes {
    return this[14].toBytes();
  }

  get nonce(): BigInt {
    return this[15].toBigInt();
  }

  get baseFeePerGas(): BigInt {
    return this[16].toBigInt();
  }

  get withdrawalsRoot(): Bytes {
    return this[17].toBytes();
  }

  get blobGasUsed(): BigInt {
    return this[18].toBigInt();
  }

  get excessBlobGas(): BigInt {
    return this[19].toBigInt();
  }

  get parentBeaconBlockRoot(): Bytes {
    return this[20].toBytes();
  }

  get backupForFuture(): Array<Bytes> {
    return this[21].toBytesArray();
  }
}

export class VickreyAuction__revealInput_accountDataProofStruct extends ethereum.Tuple {
  get expectedRoot(): Bytes {
    return this[0].toBytes();
  }

  get key(): Bytes {
    return this[1].toBytes();
  }

  get proof(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get keyIndex(): BigInt {
    return this[3].toBigInt();
  }

  get proofIndex(): BigInt {
    return this[4].toBigInt();
  }

  get expectedValue(): Bytes {
    return this[5].toBytes();
  }
}

export class VickreyAuction extends ethereum.SmartContract {
  static bind(address: Address): VickreyAuction {
    return new VickreyAuction("VickreyAuction", address);
  }

  NFTContractAddress(param0: BigInt): Address {
    let result = super.call(
      "NFTContractAddress",
      "NFTContractAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_NFTContractAddress(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "NFTContractAddress",
      "NFTContractAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  basePrice(): BigInt {
    let result = super.call("basePrice", "basePrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_basePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("basePrice", "basePrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bidEndTime(): BigInt {
    let result = super.call("bidEndTime", "bidEndTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bidEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bidEndTime", "bidEndTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAuctionInfo(): VickreyAuction__getAuctionInfoResult {
    let result = super.call(
      "getAuctionInfo",
      "getAuctionInfo():(address,uint256,uint256,uint256,uint256,uint256,address,uint256,uint256)",
      [],
    );

    return new VickreyAuction__getAuctionInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toBigInt(),
      result[8].toBigInt(),
    );
  }

  try_getAuctionInfo(): ethereum.CallResult<VickreyAuction__getAuctionInfoResult> {
    let result = super.tryCall(
      "getAuctionInfo",
      "getAuctionInfo():(address,uint256,uint256,uint256,uint256,uint256,address,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VickreyAuction__getAuctionInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toBigInt(),
        value[8].toBigInt(),
      ),
    );
  }

  getBidDepositAddr(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
  ): VickreyAuction__getBidDepositAddrResult {
    let result = super.call(
      "getBidDepositAddr",
      "getBidDepositAddr(address,uint256,bytes32):(bytes32,address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );

    return new VickreyAuction__getBidDepositAddrResult(
      result[0].toBytes(),
      result[1].toAddress(),
    );
  }

  try_getBidDepositAddr(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
  ): ethereum.CallResult<VickreyAuction__getBidDepositAddrResult> {
    let result = super.tryCall(
      "getBidDepositAddr",
      "getBidDepositAddr(address,uint256,bytes32):(bytes32,address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VickreyAuction__getBidDepositAddrResult(
        value[0].toBytes(),
        value[1].toAddress(),
      ),
    );
  }

  getNFTInfo(): VickreyAuction__getNFTInfoResult {
    let result = super.call(
      "getNFTInfo",
      "getNFTInfo():(address[],uint256[],uint256[])",
      [],
    );

    return new VickreyAuction__getNFTInfoResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray(),
    );
  }

  try_getNFTInfo(): ethereum.CallResult<VickreyAuction__getNFTInfoResult> {
    let result = super.tryCall(
      "getNFTInfo",
      "getNFTInfo():(address[],uint256[],uint256[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VickreyAuction__getNFTInfoResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
        value[2].toBigIntArray(),
      ),
    );
  }

  isClaimed(): boolean {
    let result = super.call("isClaimed", "isClaimed():(bool)", []);

    return result[0].toBoolean();
  }

  try_isClaimed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isClaimed", "isClaimed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lateReveal(_bidder: Address, _bid: BigInt, _subSalt: Bytes): Address {
    let result = super.call(
      "lateReveal",
      "lateReveal(address,uint256,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );

    return result[0].toAddress();
  }

  try_lateReveal(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lateReveal",
      "lateReveal(address,uint256,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nftIds(param0: BigInt): BigInt {
    let result = super.call("nftIds", "nftIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_nftIds(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nftIds", "nftIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftValues(param0: BigInt): BigInt {
    let result = super.call("nftValues", "nftValues(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_nftValues(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nftValues", "nftValues(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerClaimNoBidder(): boolean {
    let result = super.call(
      "ownerClaimNoBidder",
      "ownerClaimNoBidder():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_ownerClaimNoBidder(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "ownerClaimNoBidder",
      "ownerClaimNoBidder():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  reveal(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
    _balAtSnapshot: BigInt,
    _header: VickreyAuction__revealInput_headerStruct,
    _accountDataProof: VickreyAuction__revealInput_accountDataProofStruct,
  ): Address {
    let result = super.call(
      "reveal",
      "reveal(address,uint256,bytes32,uint256,(bytes32,bytes32,bytes32,address,bytes32,bytes32,bytes32,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes32,uint64,uint256,bytes32,uint256,uint256,bytes32,bytes32[5]),(bytes32,bytes,bytes[],uint256,uint256,bytes)):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
        ethereum.Value.fromUnsignedBigInt(_balAtSnapshot),
        ethereum.Value.fromTuple(_header),
        ethereum.Value.fromTuple(_accountDataProof),
      ],
    );

    return result[0].toAddress();
  }

  try_reveal(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
    _balAtSnapshot: BigInt,
    _header: VickreyAuction__revealInput_headerStruct,
    _accountDataProof: VickreyAuction__revealInput_accountDataProofStruct,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "reveal",
      "reveal(address,uint256,bytes32,uint256,(bytes32,bytes32,bytes32,address,bytes32,bytes32,bytes32,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes32,uint64,uint256,bytes32,uint256,uint256,bytes32,bytes32[5]),(bytes32,bytes,bytes[],uint256,uint256,bytes)):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
        ethereum.Value.fromUnsignedBigInt(_balAtSnapshot),
        ethereum.Value.fromTuple(_header),
        ethereum.Value.fromTuple(_accountDataProof),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  revealBlockNum(): BigInt {
    let result = super.call("revealBlockNum", "revealBlockNum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_revealBlockNum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "revealBlockNum",
      "revealBlockNum():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  revealDuration(): BigInt {
    let result = super.call("revealDuration", "revealDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_revealDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "revealDuration",
      "revealDuration():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  revealNoVerify(_bidder: Address, _bid: BigInt, _subSalt: Bytes): Address {
    let result = super.call(
      "revealNoVerify",
      "revealNoVerify(address,uint256,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );

    return result[0].toAddress();
  }

  try_revealNoVerify(
    _bidder: Address,
    _bid: BigInt,
    _subSalt: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "revealNoVerify",
      "revealNoVerify(address,uint256,bytes32):(address)",
      [
        ethereum.Value.fromAddress(_bidder),
        ethereum.Value.fromUnsignedBigInt(_bid),
        ethereum.Value.fromFixedBytes(_subSalt),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  revealStartTime(): BigInt {
    let result = super.call(
      "revealStartTime",
      "revealStartTime():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_revealStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "revealStartTime",
      "revealStartTime():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sndBid(): BigInt {
    let result = super.call("sndBid", "sndBid():(uint128)", []);

    return result[0].toBigInt();
  }

  try_sndBid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("sndBid", "sndBid():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  storedBlockHash(): Bytes {
    let result = super.call(
      "storedBlockHash",
      "storedBlockHash():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_storedBlockHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "storedBlockHash",
      "storedBlockHash():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  topBid(): BigInt {
    let result = super.call("topBid", "topBid():(uint128)", []);

    return result[0].toBigInt();
  }

  try_topBid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("topBid", "topBid():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  topBidder(): Address {
    let result = super.call("topBidder", "topBidder():(address)", []);

    return result[0].toAddress();
  }

  try_topBidder(): ethereum.CallResult<Address> {
    let result = super.tryCall("topBidder", "topBidder():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ClaimWinCall extends ethereum.Call {
  get inputs(): ClaimWinCall__Inputs {
    return new ClaimWinCall__Inputs(this);
  }

  get outputs(): ClaimWinCall__Outputs {
    return new ClaimWinCall__Outputs(this);
  }
}

export class ClaimWinCall__Inputs {
  _call: ClaimWinCall;

  constructor(call: ClaimWinCall) {
    this._call = call;
  }
}

export class ClaimWinCall__Outputs {
  _call: ClaimWinCall;

  constructor(call: ClaimWinCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _NFTContractAddress(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _nftIds(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _nftValues(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get params(): InitializeCallParamsStruct {
    return changetype<InitializeCallParamsStruct>(
      this._call.inputValues[5].value.toTuple(),
    );
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCallParamsStruct extends ethereum.Tuple {
  get basePrice(): BigInt {
    return this[0].toBigInt();
  }

  get bidDuration(): BigInt {
    return this[1].toBigInt();
  }

  get revealDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class LateRevealCall extends ethereum.Call {
  get inputs(): LateRevealCall__Inputs {
    return new LateRevealCall__Inputs(this);
  }

  get outputs(): LateRevealCall__Outputs {
    return new LateRevealCall__Outputs(this);
  }
}

export class LateRevealCall__Inputs {
  _call: LateRevealCall;

  constructor(call: LateRevealCall) {
    this._call = call;
  }

  get _bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _subSalt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class LateRevealCall__Outputs {
  _call: LateRevealCall;

  constructor(call: LateRevealCall) {
    this._call = call;
  }

  get bidAddr(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OwnerClaimNoBidderCall extends ethereum.Call {
  get inputs(): OwnerClaimNoBidderCall__Inputs {
    return new OwnerClaimNoBidderCall__Inputs(this);
  }

  get outputs(): OwnerClaimNoBidderCall__Outputs {
    return new OwnerClaimNoBidderCall__Outputs(this);
  }
}

export class OwnerClaimNoBidderCall__Inputs {
  _call: OwnerClaimNoBidderCall;

  constructor(call: OwnerClaimNoBidderCall) {
    this._call = call;
  }
}

export class OwnerClaimNoBidderCall__Outputs {
  _call: OwnerClaimNoBidderCall;

  constructor(call: OwnerClaimNoBidderCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RevealCall extends ethereum.Call {
  get inputs(): RevealCall__Inputs {
    return new RevealCall__Inputs(this);
  }

  get outputs(): RevealCall__Outputs {
    return new RevealCall__Outputs(this);
  }
}

export class RevealCall__Inputs {
  _call: RevealCall;

  constructor(call: RevealCall) {
    this._call = call;
  }

  get _bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _subSalt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _balAtSnapshot(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _header(): RevealCall_headerStruct {
    return changetype<RevealCall_headerStruct>(
      this._call.inputValues[4].value.toTuple(),
    );
  }

  get _accountDataProof(): RevealCall_accountDataProofStruct {
    return changetype<RevealCall_accountDataProofStruct>(
      this._call.inputValues[5].value.toTuple(),
    );
  }
}

export class RevealCall__Outputs {
  _call: RevealCall;

  constructor(call: RevealCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RevealCall_headerStruct extends ethereum.Tuple {
  get hash(): Bytes {
    return this[0].toBytes();
  }

  get parentHash(): Bytes {
    return this[1].toBytes();
  }

  get sha3Uncles(): Bytes {
    return this[2].toBytes();
  }

  get miner(): Address {
    return this[3].toAddress();
  }

  get stateRoot(): Bytes {
    return this[4].toBytes();
  }

  get transactionsRoot(): Bytes {
    return this[5].toBytes();
  }

  get receiptsRoot(): Bytes {
    return this[6].toBytes();
  }

  get logsBloom(): Bytes {
    return this[7].toBytes();
  }

  get difficulty(): BigInt {
    return this[8].toBigInt();
  }

  get number(): BigInt {
    return this[9].toBigInt();
  }

  get gasLimit(): BigInt {
    return this[10].toBigInt();
  }

  get gasUsed(): BigInt {
    return this[11].toBigInt();
  }

  get timestamp(): BigInt {
    return this[12].toBigInt();
  }

  get extraData(): Bytes {
    return this[13].toBytes();
  }

  get mixHash(): Bytes {
    return this[14].toBytes();
  }

  get nonce(): BigInt {
    return this[15].toBigInt();
  }

  get baseFeePerGas(): BigInt {
    return this[16].toBigInt();
  }

  get withdrawalsRoot(): Bytes {
    return this[17].toBytes();
  }

  get blobGasUsed(): BigInt {
    return this[18].toBigInt();
  }

  get excessBlobGas(): BigInt {
    return this[19].toBigInt();
  }

  get parentBeaconBlockRoot(): Bytes {
    return this[20].toBytes();
  }

  get backupForFuture(): Array<Bytes> {
    return this[21].toBytesArray();
  }
}

export class RevealCall_accountDataProofStruct extends ethereum.Tuple {
  get expectedRoot(): Bytes {
    return this[0].toBytes();
  }

  get key(): Bytes {
    return this[1].toBytes();
  }

  get proof(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get keyIndex(): BigInt {
    return this[3].toBigInt();
  }

  get proofIndex(): BigInt {
    return this[4].toBigInt();
  }

  get expectedValue(): Bytes {
    return this[5].toBytes();
  }
}

export class RevealBatchCall extends ethereum.Call {
  get inputs(): RevealBatchCall__Inputs {
    return new RevealBatchCall__Inputs(this);
  }

  get outputs(): RevealBatchCall__Outputs {
    return new RevealBatchCall__Outputs(this);
  }
}

export class RevealBatchCall__Inputs {
  _call: RevealBatchCall;

  constructor(call: RevealBatchCall) {
    this._call = call;
  }

  get _bidder(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _bid(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _subSalt(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _balAtSnapshot(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _header(): RevealBatchCall_headerStruct {
    return changetype<RevealBatchCall_headerStruct>(
      this._call.inputValues[4].value.toTuple(),
    );
  }

  get _accountDataProof(): RevealBatchCall_accountDataProofStruct {
    return changetype<RevealBatchCall_accountDataProofStruct>(
      this._call.inputValues[5].value.toTuple(),
    );
  }
}

export class RevealBatchCall__Outputs {
  _call: RevealBatchCall;

  constructor(call: RevealBatchCall) {
    this._call = call;
  }
}

export class RevealBatchCall_headerStruct extends ethereum.Tuple {
  get hash(): Bytes {
    return this[0].toBytes();
  }

  get parentHash(): Bytes {
    return this[1].toBytes();
  }

  get sha3Uncles(): Bytes {
    return this[2].toBytes();
  }

  get miner(): Address {
    return this[3].toAddress();
  }

  get stateRoot(): Bytes {
    return this[4].toBytes();
  }

  get transactionsRoot(): Bytes {
    return this[5].toBytes();
  }

  get receiptsRoot(): Bytes {
    return this[6].toBytes();
  }

  get logsBloom(): Bytes {
    return this[7].toBytes();
  }

  get difficulty(): BigInt {
    return this[8].toBigInt();
  }

  get number(): BigInt {
    return this[9].toBigInt();
  }

  get gasLimit(): BigInt {
    return this[10].toBigInt();
  }

  get gasUsed(): BigInt {
    return this[11].toBigInt();
  }

  get timestamp(): BigInt {
    return this[12].toBigInt();
  }

  get extraData(): Bytes {
    return this[13].toBytes();
  }

  get mixHash(): Bytes {
    return this[14].toBytes();
  }

  get nonce(): BigInt {
    return this[15].toBigInt();
  }

  get baseFeePerGas(): BigInt {
    return this[16].toBigInt();
  }

  get withdrawalsRoot(): Bytes {
    return this[17].toBytes();
  }

  get blobGasUsed(): BigInt {
    return this[18].toBigInt();
  }

  get excessBlobGas(): BigInt {
    return this[19].toBigInt();
  }

  get parentBeaconBlockRoot(): Bytes {
    return this[20].toBytes();
  }

  get backupForFuture(): Array<Bytes> {
    return this[21].toBytesArray();
  }
}

export class RevealBatchCall_accountDataProofStruct extends ethereum.Tuple {
  get expectedRoot(): Bytes {
    return this[0].toBytes();
  }

  get key(): Bytes {
    return this[1].toBytes();
  }

  get proof(): Array<Bytes> {
    return this[2].toBytesArray();
  }

  get keyIndex(): BigInt {
    return this[3].toBigInt();
  }

  get proofIndex(): BigInt {
    return this[4].toBigInt();
  }

  get expectedValue(): Bytes {
    return this[5].toBytes();
  }
}

export class RevealNoVerifyCall extends ethereum.Call {
  get inputs(): RevealNoVerifyCall__Inputs {
    return new RevealNoVerifyCall__Inputs(this);
  }

  get outputs(): RevealNoVerifyCall__Outputs {
    return new RevealNoVerifyCall__Outputs(this);
  }
}

export class RevealNoVerifyCall__Inputs {
  _call: RevealNoVerifyCall;

  constructor(call: RevealNoVerifyCall) {
    this._call = call;
  }

  get _bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _subSalt(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class RevealNoVerifyCall__Outputs {
  _call: RevealNoVerifyCall;

  constructor(call: RevealNoVerifyCall) {
    this._call = call;
  }

  get bidAddr(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class StartRevealCall extends ethereum.Call {
  get inputs(): StartRevealCall__Inputs {
    return new StartRevealCall__Inputs(this);
  }

  get outputs(): StartRevealCall__Outputs {
    return new StartRevealCall__Outputs(this);
  }
}

export class StartRevealCall__Inputs {
  _call: StartRevealCall;

  constructor(call: StartRevealCall) {
    this._call = call;
  }
}

export class StartRevealCall__Outputs {
  _call: StartRevealCall;

  constructor(call: StartRevealCall) {
    this._call = call;
  }
}
