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

      <RenderPropsCounter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </RenderPropsCounter>
      <RenderPropsCounter
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      />

      {/* <ErrorBoundary>
        <Hero heroName={"joker"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Hero"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Army"} />
      </ErrorBoundary> */}
    </div>
  );
};

export default App;
