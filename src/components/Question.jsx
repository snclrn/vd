import { createSignal, Show } from "solid-js";
import Letter from "./Letter";

const Question = ({ closeQuestion }) => {
  const [answer, setAnswer] = createSignal("");
  const wrongAnswerMessage = "Hmppp, wrongggggg";
  const messageStyles =
    "font-medium absolute shadow-xl bg-white rounded-xl top-5 px-4 py-2";

  return (
    <div class="px-5 flex items-center justify-center fixed h-screen bg-black/20 inset-0">
      <Show when={answer() === "incorrect"}>
        <div class={messageStyles}>{wrongAnswerMessage}</div>
      </Show>

      <Show when={answer() === "correct"}>
        <Letter />
      </Show>

      <div class="shadow-xl bg-white rounded-3xl p-4">
        <div class="flex items-center mb-4 pb-2 justify-between border-b border-slate-100">
          <p class="font-semibold text-slate-700 text-lg">Question</p>

          <button onclick={closeQuestion}>
            <i class="ai-cross"></i>
          </button>
        </div>
        <p class="text-lg text-slate-700">Who is my favorite music artist?</p>

        <div class="gap-2 flex flex-wrap mt-6">
          <button
            onclick={() => setAnswer("incorrect")}
            class="border border-black/10 px-3 py-1 rounded-xl"
          >
            Zack Tabudlo
          </button>
          <button
            onclick={() => setAnswer("incorrect")}
            class="border border-black/10 px-3 py-1 rounded-xl"
          >
            Taylor Swift
          </button>
          <button
            onclick={() => setAnswer("correct")}
            class="border border-black/10 px-3 py-1 rounded-xl"
          >
            Ricky Montgomery
          </button>
          <button
            onclick={() => setAnswer("incorrect")}
            class="border border-black/10 px-3 py-1 rounded-xl"
          >
            Arthur Nery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
