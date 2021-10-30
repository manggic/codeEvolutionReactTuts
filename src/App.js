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
import DataFetching from "./hookComponent/DataFetching";
import UseReducerCounter1 from "./hookComponent/UseReducerCounter1";
import UseReducerCounter2 from "./hookComponent/UseReducerCounter2";
import UseReducerCounter3 from "./hookComponent/UseReducerCounter3";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import React, { useReducer, useState, forwardRef } from "react";
import DataFetching2 from "./hookComponent/DataFetching2";
import Parent from "./hookComponent/Parent";
import UseMemoCounter from "./hookComponent/UseMemoCounter";
import FocusInput from "./hookComponent/FocusInput";
import HookTimer from "./hookComponent/HookTimer";
import CakeContainer from "./reactRedux/CakeContainer";
import { Provider } from "react-redux";
import store from "./reactRedux/store";
import HooksCakeConatainer from "./reactRedux/HooksCakeConatainer";
import IceCreamContainer from "./reactRedux/IceCreamContainer";
import ItemContainer from "./reactRedux/ItemContainer";
import UserContainer from "./reactRedux/UserContainer";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";

import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import CountUp from "react-countup";
import { ChromePicker } from "react-color";
import ReactPlayer from "react-player";
import LineChart from "./chartComponents.js/LineChart";
export const CountContext = React.createContext();

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;

    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;

    default:
      return currentState;
  }
};

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong !!
      <button onClick={closeToast}>closed</button>
    </div>
  );
};

toast.configure();

Modal.setAppElement("#root");

const ColoredTooltip = () => {
  return <span style={{ color: "blue" }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const notify = () => {
    toast("basic notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(CustomToast, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Error notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("basic notification", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <div className="App">
      {/* <Greek name={"manish Mahto"} age="23"/>
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
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetching2 /> */}
      {/* <UseReducerCounter1 /> */}
      {/* <UseReducerCounter2 /> */}
      {/* <UseReducerCounter3 /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <Parent /> */}
      {/* <UseMemoCounter /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      <Provider store={store}>
        {/* <CakeContainer /> */}
        {/* <HooksCakeConatainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
        {/* <UserContainer /> */}
      </Provider>
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        {/* <FaReact />
        <MdAlarm /> */}
      </IconContext.Provider>
      {/* react-toastify */}
      {/* <button onClick={notify}>Notify!!</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { background: "grey" },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>hello</h2>
        <p>hi</p>
        <button onClick={() => setModalIsOpen(false)}>close</button>
      </Modal>
      {/* <button onClick={() => setModalIsOpen(true)}>open Modal</button> */}
      {/* <div style={{ paddingBottom: "20px" }}>
        <Tippy
          arrow={false}
          delay={1000}
          placement={"right"}
          content="Basic tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-start" content={<ColoredTooltip />}>
          <CustomChild />
          <button>Hover</button>
        </Tippy>
      </div> */}

      {/* <CountUp end={200} />
      <br />
      <CountUp end={200} duration={5} />
      <br />
      <CountUp end={1000} start={500} prefix={"$"} decimal={2} duration={5} /> */}

      {/* <button onClick={() => setShowColorPicker((prev) => !prev)}>
        {showColorPicker ? "hide color picker " : "show Color Picker"}
      </button>

      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h2>You Picked : {color}</h2> */}
      {/* <ReactPlayer
        controls
        width="480px"
        height="240px"
        url={"http://yes.com"}
        onReady={() => console.log("onReady")}
        onEnded={() => console.log("onEnded")}
        onError={() => console.log("onError")}
        onStart={() => console.log("onStart")}
        onPause={() => console.log("onPause")}
      /> */}
      <LineChart />
    </div>
  );
};

export default App;
