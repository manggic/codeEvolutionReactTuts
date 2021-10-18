import React from "react";

// this default only will use when components does not have matching provider above it
const UserContext = React.createContext("CodeEvolution");
const ChannelContext = React.createContext("CodeEvolution");

const ChannelProvider = ChannelContext.Provider;
const ChannelConsumer = ChannelContext.Consumer;

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {
  UserConsumer,
  UserProvider,
  ChannelConsumer,
  ChannelProvider,
  UserContext,
  ChannelContext,
};
