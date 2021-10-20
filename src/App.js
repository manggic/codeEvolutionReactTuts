import logo from "./logo.svg";
import "./App.css";
import Greek from "./Greek";
import Counter from "./components/Counter";
import ParentCompontent from "./components/ParentCompontent";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import ParComp from "./components/ParComp";
import RefDemo from "./components/RefDemo";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import RenderPropsCounter from "./components/RenderPropsCounter";
import ComponentC from "./components/ComponentC";
import { ChannelProvider, UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HookCounter from "./hookComponent/HookCounter";
import HookCounterTwo from "./hookComponent/HookCounterTwo";
import HookCounterThree from "./hookComponent/HookCounterThree";
import HookMouse from "./hookComponent/HookMouse";
import MouseContainer from "./hookComponent/MouseContainer";
import IntervalHookCounter from "./hookComponent/IntervalHookCounter";

const App = () => {
  return (
    <div className="App">
      {/* <Greek name={"manish Mahto"} age="23" />
      <Greek name={"umesh Jain"} />
      <Greek name={"sameer Shinde"} /> */}
      {/* <Counter /> */}
      {/* <ParentCompontent /> */}
      {/* <Form /> */}
      {/* <ParComp /> */}
      {/* <LifeCycleA /> */}
      {/* <RefDemo /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}

      {/* <ClickCounter name="vishwas" /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User name={(isLoggedIn) => (isLoggedIn ? "vishwas" : "Guest")} /> */}

      {/* <RenderPropsCounter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </RenderPropsCounter>
      <RenderPropsCounter
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <UserProvider value={"manish"}>
        <ChannelProvider value="CodeEvolution">
          <ComponentC />
        </ChannelProvider>
      </UserProvider> */}
      {/* <ErrorBoundary>
        <Hero heroName={"joker"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Hero"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Army"} />
      </ErrorBoundary> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}

      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}

      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalHookCounter />
    </div>
  );
};

export default App;
