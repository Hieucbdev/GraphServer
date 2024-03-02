import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createAuctionCreatedEvent(
  auction: Address,
  auctionType: BigInt
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )

  return auctionCreatedEvent
}

export function createAuctionFinalizedEvent(
  auction: Address,
  auctionType: BigInt
): AuctionFinalized {
  let auctionFinalizedEvent = changetype<AuctionFinalized>(newMockEvent())

  auctionFinalizedEvent.parameters = new Array()

  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )

  return auctionFinalizedEvent
}

export function createBidAuctionEvent(
  auction: Address,
  auctionType: BigInt,
  bidder: Address,
  amount: BigInt
): BidAuction {
  let bidAuctionEvent = changetype<BidAuction>(newMockEvent())

  bidAuctionEvent.parameters = new Array()

  bidAuctionEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  bidAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )
  bidAuctionEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidAuctionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bidAuctionEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRevealAuctionEvent(
  auction: Address,
  auctionType: BigInt,
  revealer: Address,
  actualAmount: BigInt
): RevealAuction {
  let revealAuctionEvent = changetype<RevealAuction>(newMockEvent())

  revealAuctionEvent.parameters = new Array()

  revealAuctionEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  revealAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )
  revealAuctionEvent.parameters.push(
    new ethereum.EventParam("revealer", ethereum.Value.fromAddress(revealer))
  )
  revealAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "actualAmount",
      ethereum.Value.fromUnsignedBigInt(actualAmount)
    )
  )

  return revealAuctionEvent
}

export function createRevealStartedEvent(
  auction: Address,
  auctionType: BigInt
): RevealStarted {
  let revealStartedEvent = changetype<RevealStarted>(newMockEvent())

  revealStartedEvent.parameters = new Array()

  revealStartedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  revealStartedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )

  return revealStartedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpdateAuctionEvent(
  auction: Address,
  auctionType: BigInt
): UpdateAuction {
  let updateAuctionEvent = changetype<UpdateAuction>(newMockEvent())

  updateAuctionEvent.parameters = new Array()

  updateAuctionEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  updateAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "auctionType",
      ethereum.Value.fromUnsignedBigInt(auctionType)
    )
  )

  return updateAuctionEvent
}
