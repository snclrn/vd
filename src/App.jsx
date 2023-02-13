import Widgets from "./components/Widgets";
import Sywlg from "./components/songs/Sywlg";
import Hwm from "./components/songs/Hwm";
import Pr from "./components/songs/Pr";
import Flower from "./components/Flower";
import Aa from "./components/songs/Aa";
import Wimy from "./components/songs/Wimy";
import { createSignal, Show } from "solid-js";
import Question from "./components/Question";

function App() {
  const [openQuestion, setOpenQuestion] = createSignal(false);

  return (
    <div>
      <div class="h-screen sticky top-0">
        <div class="radiant pt-8">
          <p class="text-[#DF3C63] mb-6 text-center">02 - 14 - 23</p>
          <h1 class="font-ds text-[#8C122F] text-5xl text-center font-bold">
            Happy Valentines Day, Love
          </h1>
        </div>

        <Flower />
      </div>

      <Widgets />

      {/* Songs */}
      <Sywlg />
      <Hwm />
      <Aa />
      <Wimy />
      <Pr />

      <div class="h-screen sticky top-0">
        <div class="shadow-[0_-20px_60px_20px] shadow-black/20 bg-white absolute bottom-0 w-full rounded-t-xl p-6">
          <p class="mb-6 font-bold font-ds text-2xl text-center">
            My letter of appreciation
          </p>

          <button
            onclick={() => setOpenQuestion(true)}
            class="w-full py-2 font-medium bg-gradient-to-br from-rose-500 to-rose-400 font-medium rounded-xl text-white"
          >
            Click to open
          </button>
        </div>
      </div>

      <Show when={openQuestion()}>
        <Question closeQuestion={() => setOpenQuestion(false)} />
      </Show>
    </div>
  );
}

export default App;
