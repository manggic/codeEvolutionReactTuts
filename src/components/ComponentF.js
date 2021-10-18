import React from "react";
import { UserConsumer, ChannelConsumer } from "./UserContext";

function ComponentF() {
  return (
    <UserConsumer>
      {(username) => {
        return (
          <ChannelConsumer>
            {(channel) => {
              return (
                <div>
                  Hello {username} channel {channel}{" "}
                </div>
              );
            }}
          </ChannelConsumer>
        );
      }}
    </UserConsumer>
  );
}

export default ComponentF;
