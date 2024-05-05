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

export class EnglishAuction721__getAuctionInfoResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
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
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): Address {
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

  getValue6(): BigInt {
    return this.value6;
  }

  getValue7(): Address {
    return this.value7;
  }
}

export class EnglishAuction721__getNFTInfoResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  getValue0(): Array<Address> {
    return this.value0;
  }

  getValue1(): Array<BigInt> {
    return this.value1;
  }
}

export class EnglishAuction721 extends ethereum.SmartContract {
  static bind(address: Address): EnglishAuction721 {
    return new EnglishAuction721("EnglishAuction721", address);
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

  bidStepPercent(): BigInt {
    let result = super.call("bidStepPercent", "bidStepPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bidStepPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bidStepPercent",
      "bidStepPercent():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bidSteps(): BigInt {
    let result = super.call("bidSteps", "bidSteps():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bidSteps(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bidSteps", "bidSteps():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentBid(): BigInt {
    let result = super.call("currentBid", "currentBid():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentBid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentBid", "currentBid():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentBidder(): Address {
    let result = super.call("currentBidder", "currentBidder():(address)", []);

    return result[0].toAddress();
  }

  try_currentBidder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "currentBidder",
      "currentBidder():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  endTime(): BigInt {
    let result = super.call("endTime", "endTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTime", "endTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feePercentage(): BigInt {
    let result = super.call("feePercentage", "feePercentage():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feePercentage",
      "feePercentage():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAuctionInfo(): EnglishAuction721__getAuctionInfoResult {
    let result = super.call(
      "getAuctionInfo",
      "getAuctionInfo():(address,uint256,address,uint256,uint256,uint256,uint256,address)",
      [],
    );

    return new EnglishAuction721__getAuctionInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
    );
  }

  try_getAuctionInfo(): ethereum.CallResult<EnglishAuction721__getAuctionInfoResult> {
    let result = super.tryCall(
      "getAuctionInfo",
      "getAuctionInfo():(address,uint256,address,uint256,uint256,uint256,uint256,address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EnglishAuction721__getAuctionInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
      ),
    );
  }

  getNFTInfo(): EnglishAuction721__getNFTInfoResult {
    let result = super.call(
      "getNFTInfo",
      "getNFTInfo():(address[],uint256[])",
      [],
    );

    return new EnglishAuction721__getNFTInfoResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
    );
  }

  try_getNFTInfo(): ethereum.CallResult<EnglishAuction721__getNFTInfoResult> {
    let result = super.tryCall(
      "getNFTInfo",
      "getNFTInfo():(address[],uint256[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EnglishAuction721__getNFTInfoResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
      ),
    );
  }

  isAuctionOngoing(): boolean {
    let result = super.call(
      "isAuctionOngoing",
      "isAuctionOngoing():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_isAuctionOngoing(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAuctionOngoing",
      "isAuctionOngoing():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCanceled(): boolean {
    let result = super.call("isCanceled", "isCanceled():(bool)", []);

    return result[0].toBoolean();
  }

  try_isCanceled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isCanceled", "isCanceled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minimumRemainingTime(): BigInt {
    let result = super.call(
      "minimumRemainingTime",
      "minimumRemainingTime():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_minimumRemainingTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minimumRemainingTime",
      "minimumRemainingTime():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  startTime(): BigInt {
    let result = super.call("startTime", "startTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startTime", "startTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startingBid(): BigInt {
    let result = super.call("startingBid", "startingBid():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startingBid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startingBid", "startingBid():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenId(param0: BigInt): BigInt {
    let result = super.call("tokenId", "tokenId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_tokenId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenId", "tokenId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class EditAuctionCall extends ethereum.Call {
  get inputs(): EditAuctionCall__Inputs {
    return new EditAuctionCall__Inputs(this);
  }

  get outputs(): EditAuctionCall__Outputs {
    return new EditAuctionCall__Outputs(this);
  }
}

export class EditAuctionCall__Inputs {
  _call: EditAuctionCall;

  constructor(call: EditAuctionCall) {
    this._call = call;
  }

  get _newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newDuration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EditAuctionCall__Outputs {
  _call: EditAuctionCall;

  constructor(call: EditAuctionCall) {
    this._call = call;
  }
}

export class FinalizeAuctionCall extends ethereum.Call {
  get inputs(): FinalizeAuctionCall__Inputs {
    return new FinalizeAuctionCall__Inputs(this);
  }

  get outputs(): FinalizeAuctionCall__Outputs {
    return new FinalizeAuctionCall__Outputs(this);
  }
}

export class FinalizeAuctionCall__Inputs {
  _call: FinalizeAuctionCall;

  constructor(call: FinalizeAuctionCall) {
    this._call = call;
  }
}

export class FinalizeAuctionCall__Outputs {
  _call: FinalizeAuctionCall;

  constructor(call: FinalizeAuctionCall) {
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

  get _tokenId(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get params(): InitializeCallParamsStruct {
    return changetype<InitializeCallParamsStruct>(
      this._call.inputValues[4].value.toTuple(),
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
  get startingBid(): BigInt {
    return this[0].toBigInt();
  }

  get bidDuration(): BigInt {
    return this[1].toBigInt();
  }

  get paymentToken(): Address {
    return this[2].toAddress();
  }

  get waitBeforeStart(): BigInt {
    return this[3].toBigInt();
  }
}

export class MakeBidCall extends ethereum.Call {
  get inputs(): MakeBidCall__Inputs {
    return new MakeBidCall__Inputs(this);
  }

  get outputs(): MakeBidCall__Outputs {
    return new MakeBidCall__Outputs(this);
  }
}

export class MakeBidCall__Inputs {
  _call: MakeBidCall;

  constructor(call: MakeBidCall) {
    this._call = call;
  }

  get _bidPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MakeBidCall__Outputs {
  _call: MakeBidCall;

  constructor(call: MakeBidCall) {
    this._call = call;
  }
}
