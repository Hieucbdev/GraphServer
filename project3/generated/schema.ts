// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Collection extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Collection must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Collection", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Collection | null {
    return changetype<Collection | null>(
      store.get_in_block("Collection", id.toHexString()),
    );
  }

  static load(id: Bytes): Collection | null {
    return changetype<Collection | null>(
      store.get("Collection", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }
}

export class Stat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Stat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Stat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Stat", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Stat | null {
    return changetype<Stat | null>(store.get_in_block("Stat", id));
  }

  static load(id: string): Stat | null {
    return changetype<Stat | null>(store.get("Stat", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionType(): i64 {
    let value = this.get("auctionType");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set auctionType(value: i64) {
    this.set("auctionType", Value.fromI64(value));
  }

  get entityAddress(): Bytes {
    let value = this.get("entityAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set entityAddress(value: Bytes) {
    this.set("entityAddress", Value.fromBytes(value));
  }

  get auctionCount(): i32 {
    let value = this.get("auctionCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set auctionCount(value: i32) {
    this.set("auctionCount", Value.fromI32(value));
  }

  get statType(): i64 {
    let value = this.get("statType");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set statType(value: i64) {
    this.set("statType", Value.fromI64(value));
  }

  get volume(): Array<string> {
    let value = this.get("volume");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set volume(value: Array<string>) {
    this.set("volume", Value.fromStringArray(value));
  }
}

export class Volume extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Volume entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Volume must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Volume", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Volume | null {
    return changetype<Volume | null>(store.get_in_block("Volume", id));
  }

  static load(id: string): Volume | null {
    return changetype<Volume | null>(store.get("Volume", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class AuctionCommon extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AuctionCommon entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AuctionCommon must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AuctionCommon", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AuctionCommon | null {
    return changetype<AuctionCommon | null>(
      store.get_in_block("AuctionCommon", id),
    );
  }

  static load(id: string): AuctionCommon | null {
    return changetype<AuctionCommon | null>(store.get("AuctionCommon", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionCount(): i32 {
    let value = this.get("collectionCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set collectionCount(value: i32) {
    this.set("collectionCount", Value.fromI32(value));
  }

  get collectionList(): Array<Bytes> {
    let value = this.get("collectionList");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set collectionList(value: Array<Bytes>) {
    this.set("collectionList", Value.fromBytesArray(value));
  }

  get creatorCount(): i32 {
    let value = this.get("creatorCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set creatorCount(value: i32) {
    this.set("creatorCount", Value.fromI32(value));
  }

  get creatorList(): Array<Bytes> {
    let value = this.get("creatorList");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set creatorList(value: Array<Bytes>) {
    this.set("creatorList", Value.fromBytesArray(value));
  }

  get auctionCount(): i32 {
    let value = this.get("auctionCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set auctionCount(value: i32) {
    this.set("auctionCount", Value.fromI32(value));
  }

  get volume(): Array<string> {
    let value = this.get("volume");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set volume(value: Array<string>) {
    this.set("volume", Value.fromStringArray(value));
  }
}

export class AuctionDetail extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AuctionDetail entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AuctionDetail must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AuctionDetail", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): AuctionDetail | null {
    return changetype<AuctionDetail | null>(
      store.get_in_block("AuctionDetail", id.toHexString()),
    );
  }

  static load(id: Bytes): AuctionDetail | null {
    return changetype<AuctionDetail | null>(
      store.get("AuctionDetail", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get auctionType(): i64 {
    let value = this.get("auctionType");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set auctionType(value: i64) {
    this.set("auctionType", Value.fromI64(value));
  }

  get status(): i32 {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get auctionCreator(): Bytes {
    let value = this.get("auctionCreator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set auctionCreator(value: Bytes) {
    this.set("auctionCreator", Value.fromBytes(value));
  }

  get collectionAddress(): Array<Bytes> {
    let value = this.get("collectionAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set collectionAddress(value: Array<Bytes>) {
    this.set("collectionAddress", Value.fromBytesArray(value));
  }

  get nftIds(): Array<BigInt> {
    let value = this.get("nftIds");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set nftIds(value: Array<BigInt>) {
    this.set("nftIds", Value.fromBigIntArray(value));
  }

  get nftCount(): Array<BigInt> {
    let value = this.get("nftCount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set nftCount(value: Array<BigInt>) {
    this.set("nftCount", Value.fromBigIntArray(value));
  }

  get trade(): TradeLoader {
    return new TradeLoader(
      "AuctionDetail",
      this.get("id")!.toBytes().toHexString(),
      "trade",
    );
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get minimumPrice(): BigInt {
    let value = this.get("minimumPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set minimumPrice(value: BigInt) {
    this.set("minimumPrice", Value.fromBigInt(value));
  }

  get startingPrice(): BigInt {
    let value = this.get("startingPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startingPrice(value: BigInt) {
    this.set("startingPrice", Value.fromBigInt(value));
  }

  get stepDuration(): BigInt {
    let value = this.get("stepDuration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set stepDuration(value: BigInt) {
    this.set("stepDuration", Value.fromBigInt(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get isEnded(): boolean {
    let value = this.get("isEnded");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isEnded(value: boolean) {
    this.set("isEnded", Value.fromBoolean(value));
  }

  get currentBidder(): Bytes {
    let value = this.get("currentBidder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set currentBidder(value: Bytes) {
    this.set("currentBidder", Value.fromBytes(value));
  }

  get currentBid(): BigInt {
    let value = this.get("currentBid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set currentBid(value: BigInt) {
    this.set("currentBid", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get revealBlockNum(): BigInt {
    let value = this.get("revealBlockNum");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set revealBlockNum(value: BigInt) {
    this.set("revealBlockNum", Value.fromBigInt(value));
  }

  get bidStep(): BigInt {
    let value = this.get("bidStep");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set bidStep(value: BigInt) {
    this.set("bidStep", Value.fromBigInt(value));
  }

  get revealStep(): BigInt {
    let value = this.get("revealStep");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set revealStep(value: BigInt) {
    this.set("revealStep", Value.fromBigInt(value));
  }

  get sndBid(): BigInt {
    let value = this.get("sndBid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sndBid(value: BigInt) {
    this.set("sndBid", Value.fromBigInt(value));
  }
}

export class Trade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Trade entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Trade must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Trade", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Trade | null {
    return changetype<Trade | null>(store.get_in_block("Trade", id));
  }

  static load(id: string): Trade | null {
    return changetype<Trade | null>(store.get("Trade", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get state(): i64 {
    let value = this.get("state");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set state(value: i64) {
    this.set("state", Value.fromI64(value));
  }

  get hash(): Array<Bytes> {
    let value = this.get("hash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set hash(value: Array<Bytes>) {
    this.set("hash", Value.fromBytesArray(value));
  }

  get auctioneer(): Bytes {
    let value = this.get("auctioneer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set auctioneer(value: Bytes) {
    this.set("auctioneer", Value.fromBytes(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get price(): Array<BigInt> {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set price(value: Array<BigInt>) {
    this.set("price", Value.fromBigIntArray(value));
  }

  get auctionDetail(): Bytes {
    let value = this.get("auctionDetail");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set auctionDetail(value: Bytes) {
    this.set("auctionDetail", Value.fromBytes(value));
  }

  get timestamp(): Array<BigInt> {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set timestamp(value: Array<BigInt>) {
    this.set("timestamp", Value.fromBigIntArray(value));
  }
}

export class User extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type User must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("User", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): User | null {
    return changetype<User | null>(
      store.get_in_block("User", id.toHexString()),
    );
  }

  static load(id: Bytes): User | null {
    return changetype<User | null>(store.get("User", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get auctionOwned(): AuctionDetailLoader {
    return new AuctionDetailLoader(
      "User",
      this.get("id")!.toBytes().toHexString(),
      "auctionOwned",
    );
  }

  get auctionBidded(): Array<Bytes> {
    let value = this.get("auctionBidded");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set auctionBidded(value: Array<Bytes>) {
    this.set("auctionBidded", Value.fromBytesArray(value));
  }

  get biddedCollection(): Array<Bytes> {
    let value = this.get("biddedCollection");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set biddedCollection(value: Array<Bytes>) {
    this.set("biddedCollection", Value.fromBytesArray(value));
  }

  get ownedCollection(): Array<Bytes> {
    let value = this.get("ownedCollection");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set ownedCollection(value: Array<Bytes>) {
    this.set("ownedCollection", Value.fromBytesArray(value));
  }

  get ownedCollectionCount(): i32 {
    let value = this.get("ownedCollectionCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set ownedCollectionCount(value: i32) {
    this.set("ownedCollectionCount", Value.fromI32(value));
  }

  get biddedCollectionCount(): i32 {
    let value = this.get("biddedCollectionCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set biddedCollectionCount(value: i32) {
    this.set("biddedCollectionCount", Value.fromI32(value));
  }

  get stats(): Array<string> {
    let value = this.get("stats");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set stats(value: Array<string>) {
    this.set("stats", Value.fromStringArray(value));
  }

  get trade(): TradeLoader {
    return new TradeLoader(
      "User",
      this.get("id")!.toBytes().toHexString(),
      "trade",
    );
  }
}

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("NFT", id.toString(), this);
    }
  }

  static loadInBlock(id: string): NFT | null {
    return changetype<NFT | null>(store.get_in_block("NFT", id));
  }

  static load(id: string): NFT | null {
    return changetype<NFT | null>(store.get("NFT", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get auctionDetail(): Array<Bytes> {
    let value = this.get("auctionDetail");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set auctionDetail(value: Array<Bytes>) {
    this.set("auctionDetail", Value.fromBytesArray(value));
  }
}

export class TradeLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Trade[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Trade[]>(value);
  }
}

export class AuctionDetailLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): AuctionDetail[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<AuctionDetail[]>(value);
  }
}
