const Wimy = () => {
  const wimy =
    "https://i.scdn.co/image/ab67616d0000b2738c41f9ec5e60833fd59da8b8";

  return (
    <div class="h-screen sticky top-0 bg-stone-200 p-5 pt-28">
      <div>
        <div class="flex items-center text-stone-900 space-x-4">
          <img src={wimy} alt="" class="w-14 h-14 rounded-full" />
          <div>
            <p class="font-bold text-lg leading-none">When I Met You</p>
            <p class="text-stone-900/60">Apo Hiking Society</p>
          </div>
        </div>

        <div class="mt-6">
          <h1 class="font-jakarta text-2xl leading-relaxed text-stone-900 font-extrabold">
            You gave me a reason for my being <br />
            And I love what I'm feeling <br />
            You gave me a meaning to my life <br />
            Yes, I've gone beyond existing <br />
            And it all began when I met you <br />
          </h1>
        </div>
      </div>

      <div class="mt-10">
        <div class="h-1 w-full rounded-full bg-stone-100">
          <div class="w-[13%] h-full rounded-full bg-stone-900"></div>
        </div>
        <div class="font-semibold text-stone-900 flex justify-between mt-3">
          <p>0:45</p>
          <div class="bg-stone-900 h-12 w-12 rounded-full flex items-center justify-center">
            <i class="text-2xl ai-heart text-stone-200 -mb-1"></i>
          </div>
          <p>4:19</p>
        </div>
      </div>
    </div>
  );
};

export default Wimy;
