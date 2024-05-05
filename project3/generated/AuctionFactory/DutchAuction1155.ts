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

export class DutchAuction1155__getAuctionInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: boolean;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: boolean,
    value7: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getValue0(): BigInt {
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

  getValue4(): Address {
    return this.value4;
  }

  getValue5(): BigInt {
    return this.value5;
  }

  getValue6(): boolean {
    return this.value6;
  }

  getValue7(): Address {
    return this.value7;
  }
}

export class DutchAuction1155__getNFTInfoResult {
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

export class DutchAuction1155 extends ethereum.SmartContract {
  static bind(address: Address): DutchAuction1155 {
    return new DutchAuction1155("DutchAuction1155", address);
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

  getAuctionInfo(): DutchAuction1155__getAuctionInfoResult {
    let result = super.call(
      "getAuctionInfo",
      "getAuctionInfo():(uint256,uint256,uint256,uint256,address,uint256,bool,address)",
      [],
    );

    return new DutchAuction1155__getAuctionInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toAddress(),
    );
  }

  try_getAuctionInfo(): ethereum.CallResult<DutchAuction1155__getAuctionInfoResult> {
    let result = super.tryCall(
      "getAuctionInfo",
      "getAuctionInfo():(uint256,uint256,uint256,uint256,address,uint256,bool,address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DutchAuction1155__getAuctionInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toAddress(),
      ),
    );
  }

  getNFTInfo(): DutchAuction1155__getNFTInfoResult {
    let result = super.call(
      "getNFTInfo",
      "getNFTInfo():(address[],uint256[],uint256[])",
      [],
    );

    return new DutchAuction1155__getNFTInfoResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray(),
    );
  }

  try_getNFTInfo(): ethereum.CallResult<DutchAuction1155__getNFTInfoResult> {
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
      new DutchAuction1155__getNFTInfoResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
        value[2].toBigIntArray(),
      ),
    );
  }

  isEnded(): boolean {
    let result = super.call("isEnded", "isEnded():(bool)", []);

    return result[0].toBoolean();
  }

  try_isEnded(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isEnded", "isEnded():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minimumPrice(): BigInt {
    let result = super.call("minimumPrice", "minimumPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minimumPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minimumPrice", "minimumPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  numberOfStep(): BigInt {
    let result = super.call("numberOfStep", "numberOfStep():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numberOfStep(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numberOfStep", "numberOfStep():(uint256)", []);
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

  paymentToken(): Address {
    let result = super.call("paymentToken", "paymentToken():(address)", []);

    return result[0].toAddress();
  }

  try_paymentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("paymentToken", "paymentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  startingPrice(): BigInt {
    let result = super.call("startingPrice", "startingPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startingPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "startingPrice",
      "startingPrice():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startingTime(): BigInt {
    let result = super.call("startingTime", "startingTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startingTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startingTime", "startingTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stepDuration(): BigInt {
    let result = super.call("stepDuration", "stepDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stepDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("stepDuration", "stepDuration():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get _bidPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
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
  get minimumPrice(): BigInt {
    return this[0].toBigInt();
  }

  get startingPrice(): BigInt {
    return this[1].toBigInt();
  }

  get numberOfStep(): BigInt {
    return this[2].toBigInt();
  }

  get stepDuration(): BigInt {
    return this[3].toBigInt();
  }

  get paymentToken(): Address {
    return this[4].toAddress();
  }

  get waitBeforeStart(): BigInt {
    return this[5].toBigInt();
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
