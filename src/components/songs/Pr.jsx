const Pr = () => {
  const e = "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647";

  return (
    <div class="h-screen sticky top-0 bg-pink-200 p-5 pt-28">
      <div>
        <div class="flex items-center text-pink-900 space-x-4">
          <img src={e} alt="" class="w-14 h-14 rounded-full" />
          <div>
            <p class="font-bold text-lg leading-none">Paper Rings</p>
            <p class="text-pink-900/60">Taylor Swift</p>
          </div>
        </div>

        <div class="mt-6">
          <h1 class="font-jakarta text-2xl leading-relaxed text-pink-900 font-extrabold">
            I like shiny things, but I'd marry you with paper rings <br />
            Uh huh, that's right <br />
            Darling, you're the one I want <br />
          </h1>
        </div>
      </div>

      <div class="mt-10">
        <div class="h-1 w-full rounded-full bg-pink-100">
          <div class="w-[10%] h-full rounded-full bg-pink-900"></div>
        </div>
        <div class="font-semibold text-pink-900 flex justify-between mt-3">
          <p>0:31</p>
          <div class="bg-pink-900 h-12 w-12 rounded-full flex items-center justify-center">
            <i class="text-2xl ai-heart text-pink-200 -mb-1"></i>
          </div>
          <p>3:43</p>
        </div>
      </div>
    </div>
  );
};

export default Pr;
