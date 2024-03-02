import { BigInt, log, Bytes, Address, ethereum, store } from "@graphprotocol/graph-ts"
import {
  AuctionFactory,
  AuctionCreated,
  AuctionFinalized,
  BidAuction,
  Initialized,
  OwnershipTransferred,
  Paused,
  RevealAuction,
  RevealStarted,
  Unpaused,
  UpdateAuction
} from "../generated/AuctionFactory/AuctionFactory"
import { DutchAuction721 } from "../generated/DutchAuction721/DutchAuction721";
import { DutchAuction1155 } from "../generated/DutchAuction1155/DutchAuction1155";
import { EnglishAuction721 } from "../generated/EnglishAuction721/EnglishAuction721";
import { EnglishAuction1155 } from "../generated/EnglishAuction1155/EnglishAuction1155";
import { SealedBidAuctionV1721 } from "../generated/SealedBidAuctionV1721/SealedBidAuctionV1721";
import { SealedBidAuctionV11155 } from "../generated/SealedBidAuctionV11155/SealedBidAuctionV11155";
import { SealedBidAuctionV2721 } from "../generated/SealedBidAuctionV2721/SealedBidAuctionV2721";
import { SealedBidAuctionV21155 } from "../generated/SealedBidAuctionV21155/SealedBidAuctionV21155";
import { VickreyAuction721 } from "../generated/VickreyAuction721/VickreyAuction721";
import { VickreyAuction1155 } from "../generated/VickreyAuction1155/VickreyAuction1155";
import { Collection, AuctionCommonCollection, AuctionCommon, AuctionDetail, 
  Trade, User, AuctionOwnedUser, NFT } from "../generated/schema";

export function handleAuctionCreated(event: AuctionCreated): void {
  let nftAddresses: Array<Address> = [];
  let tokenIds: Array<BigInt> = [];
  let tokenCounts: Array<BigInt> = [];
  let owner: ethereum.CallResult<Address> = new ethereum.CallResult();
  let isFailed = false;
  if(event != null){
    if(event.params.auctionType == BigInt.fromI32(0)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(2)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(4)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(6)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(8)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        tokenCounts = nftInfo.value.getValue2();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        tokenCounts = nftInfo.value.getValue2();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        tokenCounts = nftInfo.value.getValue2();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV11155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        tokenCounts = nftInfo.value.getValue2();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV21155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        tokenIds = nftInfo.value.getValue1();
        tokenCounts = nftInfo.value.getValue2();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    }
  }

  if(isFailed == false){
    for(let i = 0; i < nftAddresses.length; i++){
      let collection = Collection.load(nftAddresses[i]);
      if(!collection){
        collection = new Collection(nftAddresses[i]);
        collection.totalAuctionCount = 1;
        collection.totalAuctionVolume = BigInt.fromI32(0);
        collection.save();
      } else {
        collection.totalAuctionCount += 1;
        collection.save();
      }
      let auctionCommonCollection = AuctionCommonCollection.load(`0_${nftAddresses[i].toHexString()}`);
      if(!auctionCommonCollection) {
        auctionCommonCollection = new AuctionCommonCollection(`0_${nftAddresses[i].toHexString()}`);
        auctionCommonCollection.auctionType = 0;
        auctionCommonCollection.auctionCount = 1;
        auctionCommonCollection.volume = BigInt.fromI32(0);
        auctionCommonCollection.collection = nftAddresses[i];
        auctionCommonCollection.save();
      } else {
        auctionCommonCollection.auctionCount += 1;
        auctionCommonCollection.save();
      }
    }
    let auctionCommon = AuctionCommon.load("0");
    if(!auctionCommon) {
      auctionCommon = new AuctionCommon("0");
      auctionCommon.auctionCount = 1;
      auctionCommon.collectionCount = 1;
      auctionCommon.creatorCount = 1;
      auctionCommon.volume = BigInt.fromI32(0);
      auctionCommon.creatorList = [owner.value];
      auctionCommon.collectionList = changetype<Bytes[]>(nftAddresses);
      auctionCommon.save();
    } else {
      auctionCommon.auctionCount += 1;
      let creatorIndex = auctionCommon.creatorList.indexOf(owner.value);
      if (creatorIndex == -1) {
        let creatorList = auctionCommon.creatorList;
        creatorList.push(owner.value);
        auctionCommon.creatorCount += 1;
        auctionCommon.creatorList = creatorList;
      }
      let collectionList = auctionCommon.collectionList;
      for(let i = 0; i < nftAddresses.length; i++){
        if (!collectionList.includes(nftAddresses[i])) {
          collectionList.push(nftAddresses[i]);
          auctionCommon.collectionCount += 1;
        }
      }
      auctionCommon.collectionList = collectionList;
      auctionCommon.save();
    }
    let auctionDetail = new AuctionDetail(event.params.auction);
    auctionDetail.auctionType = 0;
    auctionDetail.auctionCreator = owner.value;
    auctionDetail.status = 0;
    auctionDetail.collectionAddress = changetype<Bytes[]>(nftAddresses);
    auctionDetail.nftIds = tokenIds;
    auctionDetail.nftCount = tokenCounts;
    auctionDetail.hash = event.transaction.hash;
    auctionDetail.timestamp = event.block.timestamp;

    auctionDetail.minimumPrice = BigInt.fromI32(0);
    auctionDetail.startingPrice = BigInt.fromI32(0);
    auctionDetail.stepDuration = BigInt.fromI32(0);
    auctionDetail.paymentToken = Bytes.empty();
    auctionDetail.isEnded = false;
    auctionDetail.currentBidder = Bytes.empty();
    auctionDetail.currentBid = BigInt.fromI32(0);
    auctionDetail.startTime = BigInt.fromI32(0);
    auctionDetail.endTime = BigInt.fromI32(0);
    auctionDetail.remainingBidTime = BigInt.fromI32(0);
    auctionDetail.remainingRevealTime = BigInt.fromI32(0);
    auctionDetail.revealBlockNum = BigInt.fromI32(0);
    auctionDetail.bidStep = BigInt.fromI32(0);
    auctionDetail.revealStep = BigInt.fromI32(0);
    auctionDetail.sndBid = BigInt.fromI32(0);

    if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.currentBidder = auctionInfo.value.getValue2();
        auctionDetail.currentBid = auctionInfo.value.getValue3();
        auctionDetail.startTime = auctionInfo.value.getValue4();
        auctionDetail.endTime = auctionInfo.value.getValue5();
        auctionDetail.bidStep = auctionInfo.value.getValue6();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
        auctionDetail.paymentToken = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(2) || event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.sndBid = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.minimumPrice = auctionInfo.value.getValue0();
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.bidStep = auctionInfo.value.getValue2();
        auctionDetail.stepDuration = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.startTime = auctionInfo.value.getValue5();
        auctionDetail.isEnded = auctionInfo.value.getValue6();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(6) || event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.isEnded = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(8) || event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue2();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.bidStep = auctionInfo.value.getValue5();
        auctionDetail.revealStep = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.currentBidder = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    }
    auctionDetail.save();

    let user = User.load(owner.value);
    if(!user){
      user = new User(owner.value);
      user.auctionOwnedCount = 1;
      user.auctionBiddedCount = 0;
      user.auctionVolume = BigInt.fromI32(0);
      user.auctionBidded = [];
      user.bidVolume = BigInt.fromI32(0);
      user.ownedCollection = changetype<Bytes[]>(nftAddresses);
      user.biddedCollection = [];
    } else {
      let ownedCollection = user.ownedCollection;
      for(let i = 0; i < nftAddresses.length; i++){
        if (!ownedCollection.includes(nftAddresses[i])) {
          ownedCollection.push(nftAddresses[i]);
        }
      }
      user.ownedCollection = ownedCollection;
      user.auctionOwnedCount += 1;
    }
    user.save();
    let auctionOwnedUser = AuctionOwnedUser.load(`0_${owner.value.toHexString()}`);
    if(!auctionOwnedUser){
      auctionOwnedUser = new AuctionOwnedUser(`0_${owner.value.toHexString()}`);
      auctionOwnedUser.user = owner.value;
      auctionOwnedUser.auctionType = 0;
      auctionOwnedUser.auctionCount = 1;
      auctionOwnedUser.volume = BigInt.fromI32(0);
    }else {
      auctionOwnedUser.auctionCount += 1;
    }
    auctionOwnedUser.save();
    for(let i = 0; i < nftAddresses.length; i++){
      let nft = NFT.load(`${nftAddresses[i].toHexString()}_${tokenIds[i].toString()}`);
      if(!nft){
        nft = new NFT(`${nftAddresses[i].toHexString()}_${tokenIds[i].toString()}`);
        nft.address = nftAddresses[i];
        nft.tokenId = tokenIds[i];
        nft.auctionDetail = [event.params.auction];
      } else {
        let nftAuctionDetail = nft.auctionDetail;
        nftAuctionDetail.push(nftAddresses[i]);
        nft.auctionDetail = nftAuctionDetail;
      }
      nft.save();
    }
  }
}

export function handleBidAuction(event: BidAuction): void {
  let nftAddresses: Array<Address> = [];
  let owner: ethereum.CallResult<Address> = new ethereum.CallResult();
  let isFailed = false;
  if(event != null){
    if(event.params.auctionType == BigInt.fromI32(0)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(2)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(4)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(6)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(8)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV11155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV21155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
        owner = auctionContract.try_owner();
        if(owner.reverted){
          log.warning("Cannot get owner", []);
          isFailed = true;
        }
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    }
  }
  

  if(isFailed == false){
    let trade = Trade.load(`${event.params.bidder.toHexString()}_${event.params.auction.toHexString()}`);
    if(!trade){
      trade = new Trade(`${event.params.bidder.toHexString()}_${event.params.auction.toHexString()}`);
      trade.isWin = false;
      trade.hash = [event.transaction.hash];
      trade.auctioneer = owner.value;
      trade.bidder = owner.value;
      trade.price = [event.params.amount];
      trade.auctionDetail = event.params.auction;
      trade.timestamp = [event.block.timestamp];
    } else {
      let price = trade.price;
      price.push(event.params.amount);
      trade.price = price;
      let hash = trade.hash;
      hash.push(event.transaction.hash);
      trade.hash = hash;
      let timestamp = trade.timestamp;
      timestamp.push(event.block.timestamp);
      trade.timestamp = timestamp;
    }
    trade.save();

    let user = User.load(owner.value);
    if(!user) {
      user = new User(owner.value);
      user.auctionOwnedCount = 0;
      user.auctionBiddedCount = 1;
      user.auctionVolume = BigInt.fromI32(0);
      user.bidVolume = event.params.amount;
      user.auctionBidded = [event.params.auction];
      user.biddedCollection = changetype<Bytes[]>(nftAddresses);
      user.ownedCollection = [];
    } else {
      user.auctionBiddedCount += 1;
      user.bidVolume = user.bidVolume.plus(event.params.amount);
      let auctionBidded = user.auctionBidded;
      if (!auctionBidded.includes(event.params.auction)) {
        auctionBidded.push(event.params.auction);
      }
      user.auctionBidded = auctionBidded;
      let biddedCollection = user.biddedCollection;
      for(let i = 0; i < nftAddresses.length; i++){
        if(!biddedCollection.includes(nftAddresses[i])){
          biddedCollection.push(nftAddresses[i]); 
        }
      }
      user.biddedCollection = biddedCollection;
    }
    user.save();
    let auctionDetail = AuctionDetail.load(event.params.auction);
    if(auctionDetail){
      if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
        let auctionContract = EnglishAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.currentBidder = auctionInfo.value.getValue2();
          auctionDetail.currentBid = auctionInfo.value.getValue3();
          auctionDetail.startTime = auctionInfo.value.getValue4();
          auctionDetail.endTime = auctionInfo.value.getValue5();
          auctionDetail.bidStep = auctionInfo.value.getValue6();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
          auctionDetail.paymentToken = auctionInfo.value.getValue8();
        } else {
          log.warning("Cannot get auctionInfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(2) || event.params.auctionType == BigInt.fromI32(3)) {
        let auctionContract = VickreyAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.stepDuration = auctionInfo.value.getValue2();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
          auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
          auctionDetail.currentBidder = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.sndBid = auctionInfo.value.getValue8();
          auctionDetail.isEnded = auctionInfo.value.getValue9();
        } else {
          log.warning("Cannot get auctionInfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)) {
        let auctionContract = DutchAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.minimumPrice = auctionInfo.value.getValue0();
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.bidStep = auctionInfo.value.getValue2();
          auctionDetail.stepDuration = auctionInfo.value.getValue3();
          auctionDetail.paymentToken = auctionInfo.value.getValue4();
          auctionDetail.startTime = auctionInfo.value.getValue5();
          auctionDetail.isEnded = auctionInfo.value.getValue6();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(6) || event.params.auctionType == BigInt.fromI32(7)) {
        let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.stepDuration = auctionInfo.value.getValue2();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
          auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
          auctionDetail.currentBidder = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.isEnded = auctionInfo.value.getValue8();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(8) || event.params.auctionType == BigInt.fromI32(9)) {
        let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue2();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue3();
          auctionDetail.paymentToken = auctionInfo.value.getValue4();
          auctionDetail.bidStep = auctionInfo.value.getValue5();
          auctionDetail.revealStep = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.currentBidder = auctionInfo.value.getValue8();
          auctionDetail.isEnded = auctionInfo.value.getValue9();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      }
      if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)){
        auctionDetail.currentBid = event.params.amount;
        auctionDetail.currentBidder = event.params.bidder;
      }
      auctionDetail.save();
    }
  }
}

export function handleAuctionFinalized(event: AuctionFinalized): void {
  let nftAddresses: Array<Address> = [];
  let isFailed = false;
  if(event != null){
    if(event.params.auctionType == BigInt.fromI32(0)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(2)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(4)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(6)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(8)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction1155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV11155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    } else if(event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV21155.bind(event.params.auction);
      let nftInfo = auctionContract.try_getNFTInfo();
      if(!nftInfo.reverted){
        nftAddresses = nftInfo.value.getValue0();
      } else {
        log.warning("Cannot get nftinfo", []);
        isFailed = true;
      }
    }
  }
  if(!isFailed){
    let auctionDetail = AuctionDetail.load(event.params.auction);
    if(auctionDetail){
      for(let i = 0; i < nftAddresses.length; i++){
        let collection = Collection.load(nftAddresses[i]);
        if(collection){
          collection.totalAuctionVolume = auctionDetail.currentBid.plus(collection.totalAuctionVolume);
          collection.save();
        }
        let auctionCommonCollection = AuctionCommonCollection.load(`${event.params.auctionType}_${nftAddresses[i]}`);
        if(auctionCommonCollection){
          auctionCommonCollection.volume = auctionCommonCollection.volume.plus(auctionDetail.currentBid);
          auctionCommonCollection.save();
        }
      }
      let auctionCommon = AuctionCommon.load(`${event.params.auctionType}`);
      if(auctionCommon){
        auctionCommon.volume = auctionCommon.volume.plus(auctionDetail.currentBid);
        auctionCommon.save();
      }
      auctionDetail.status = 1;
      
      if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
        let auctionContract = EnglishAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.currentBidder = auctionInfo.value.getValue2();
          auctionDetail.currentBid = auctionInfo.value.getValue3();
          auctionDetail.startTime = auctionInfo.value.getValue4();
          auctionDetail.endTime = auctionInfo.value.getValue5();
          auctionDetail.bidStep = auctionInfo.value.getValue6();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
          auctionDetail.paymentToken = auctionInfo.value.getValue8();
        } else {
          log.warning("Cannot get auctionInfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(2) || event.params.auctionType == BigInt.fromI32(3)) {
        let auctionContract = VickreyAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.stepDuration = auctionInfo.value.getValue2();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
          auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
          auctionDetail.currentBidder = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.sndBid = auctionInfo.value.getValue8();
          auctionDetail.isEnded = auctionInfo.value.getValue9();
        } else {
          log.warning("Cannot get auctionInfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)) {
        let auctionContract = DutchAuction721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.minimumPrice = auctionInfo.value.getValue0();
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.bidStep = auctionInfo.value.getValue2();
          auctionDetail.stepDuration = auctionInfo.value.getValue3();
          auctionDetail.paymentToken = auctionInfo.value.getValue4();
          auctionDetail.startTime = auctionInfo.value.getValue5();
          auctionDetail.isEnded = auctionInfo.value.getValue6();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(6) || event.params.auctionType == BigInt.fromI32(7)) {
        let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.stepDuration = auctionInfo.value.getValue2();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
          auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
          auctionDetail.currentBidder = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.isEnded = auctionInfo.value.getValue8();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      } else if(event.params.auctionType == BigInt.fromI32(8) || event.params.auctionType == BigInt.fromI32(9)) {
        let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
        let auctionInfo = auctionContract.try_getAuctionInfo();
        if(!auctionInfo.reverted){
          auctionDetail.startingPrice = auctionInfo.value.getValue1();
          auctionDetail.remainingBidTime = auctionInfo.value.getValue2();
          auctionDetail.remainingRevealTime = auctionInfo.value.getValue3();
          auctionDetail.paymentToken = auctionInfo.value.getValue4();
          auctionDetail.bidStep = auctionInfo.value.getValue5();
          auctionDetail.revealStep = auctionInfo.value.getValue6();
          auctionDetail.currentBid = auctionInfo.value.getValue7();
          auctionDetail.currentBidder = auctionInfo.value.getValue8();
          auctionDetail.isEnded = auctionInfo.value.getValue9();
        } else {
          log.warning("Cannot get nftinfo", []);
        }
      }
      auctionDetail.save();

      if(auctionDetail.currentBidder != Bytes.fromHexString("0x0000000000000000000000000000000000000000")) {
        let trade = Trade.load(`${auctionDetail.currentBidder}_${event.params.auction.toHexString()}`);
        if(trade){
          trade.isWin = true;
          trade.save();
        }
      }
    }
  }
}

export function handleRevealAuction(event: RevealAuction): void {
  let auctionDetail = AuctionDetail.load(event.params.auction);
  if(auctionDetail){
    if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.currentBidder = auctionInfo.value.getValue2();
        auctionDetail.currentBid = auctionInfo.value.getValue3();
        auctionDetail.startTime = auctionInfo.value.getValue4();
        auctionDetail.endTime = auctionInfo.value.getValue5();
        auctionDetail.bidStep = auctionInfo.value.getValue6();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
        auctionDetail.paymentToken = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(2) || event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.sndBid = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.minimumPrice = auctionInfo.value.getValue0();
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.bidStep = auctionInfo.value.getValue2();
        auctionDetail.stepDuration = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.startTime = auctionInfo.value.getValue5();
        auctionDetail.isEnded = auctionInfo.value.getValue6();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(6) || event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.isEnded = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(8) || event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue2();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.bidStep = auctionInfo.value.getValue5();
        auctionDetail.revealStep = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.currentBidder = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    }
    auctionDetail.save();
  }
}

export function handleRevealStarted(event: RevealStarted): void {
  let auctionDetail = AuctionDetail.load(event.params.auction);
  if(auctionDetail){
    if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.currentBidder = auctionInfo.value.getValue2();
        auctionDetail.currentBid = auctionInfo.value.getValue3();
        auctionDetail.startTime = auctionInfo.value.getValue4();
        auctionDetail.endTime = auctionInfo.value.getValue5();
        auctionDetail.bidStep = auctionInfo.value.getValue6();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
        auctionDetail.paymentToken = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(2) || event.params.auctionType == BigInt.fromI32(3)) {
      let auctionContract = VickreyAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.sndBid = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(4) || event.params.auctionType == BigInt.fromI32(5)) {
      let auctionContract = DutchAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.minimumPrice = auctionInfo.value.getValue0();
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.bidStep = auctionInfo.value.getValue2();
        auctionDetail.stepDuration = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.startTime = auctionInfo.value.getValue5();
        auctionDetail.isEnded = auctionInfo.value.getValue6();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(6) || event.params.auctionType == BigInt.fromI32(7)) {
      let auctionContract = SealedBidAuctionV1721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.stepDuration = auctionInfo.value.getValue2();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue3();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue4();
        auctionDetail.revealBlockNum = auctionInfo.value.getValue5();
        auctionDetail.currentBidder = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.isEnded = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    } else if(event.params.auctionType == BigInt.fromI32(8) || event.params.auctionType == BigInt.fromI32(9)) {
      let auctionContract = SealedBidAuctionV2721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue2();
        auctionDetail.remainingRevealTime = auctionInfo.value.getValue3();
        auctionDetail.paymentToken = auctionInfo.value.getValue4();
        auctionDetail.bidStep = auctionInfo.value.getValue5();
        auctionDetail.revealStep = auctionInfo.value.getValue6();
        auctionDetail.currentBid = auctionInfo.value.getValue7();
        auctionDetail.currentBidder = auctionInfo.value.getValue8();
        auctionDetail.isEnded = auctionInfo.value.getValue9();
      } else {
        log.warning("Cannot get nftinfo", []);
      }
    }
    auctionDetail.save();
  }
}

export function handleUpdateAuction(event: UpdateAuction): void {
  let auctionDetail = AuctionDetail.load(event.params.auction);
  if(auctionDetail){
    if(event.params.auctionType == BigInt.fromI32(0) || event.params.auctionType == BigInt.fromI32(1)) {
      let auctionContract = EnglishAuction721.bind(event.params.auction);
      let auctionInfo = auctionContract.try_getAuctionInfo();
      if(!auctionInfo.reverted){
        auctionDetail.startingPrice = auctionInfo.value.getValue1();
        auctionDetail.currentBidder = auctionInfo.value.getValue2();
        auctionDetail.currentBid = auctionInfo.value.getValue3();
        auctionDetail.startTime = auctionInfo.value.getValue4();
        auctionDetail.endTime = auctionInfo.value.getValue5();
        auctionDetail.bidStep = auctionInfo.value.getValue6();
        auctionDetail.remainingBidTime = auctionInfo.value.getValue7();
        auctionDetail.paymentToken = auctionInfo.value.getValue8();
      } else {
        log.warning("Cannot get auctionInfo", []);
      }
    }
    auctionDetail.save();
  }
}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handlePaused(event: Paused): void {}
