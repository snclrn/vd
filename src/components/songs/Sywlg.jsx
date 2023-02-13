import sywlg from "../../assets/sywlg.jpeg";

const Sywlg = () => {
  return (
    <div class="h-screen sticky top-0 bg-slate-300 p-5 pt-28">
      <div>
        <div class="flex items-center text-slate-800 space-x-4">
          <img src={sywlg} alt="" class="w-14 h-14 rounded-full" />
          <div>
            <p class="font-bold text-lg leading-none">Say you won't let go</p>
            <p class="text-slate-500">James Arthur</p>
          </div>
        </div>

        <div class="mt-6">
          <h1 class="font-jakarta text-2xl leading-relaxed text-slate-800 font-extrabold">
            I'm so in love with you <br />
            And I hope you know <br />
            Darling, your love is more than worth its weight in gold <br />
            We've come so far, my dear <br />
            Look how we've grown
          </h1>
        </div>
      </div>

      <div class="mt-10">
        <div class="h-1 w-full rounded-full bg-slate-200">
          <div class="w-[60%] h-full rounded-full bg-slate-900"></div>
        </div>
        <div class="font-semibold text-slate-900 flex justify-between mt-3">
          <p>2:01</p>
          <div class="bg-slate-900 h-12 w-12 rounded-full flex items-center justify-center">
            <i class="text-2xl ai-heart text-slate-200 -mb-1"></i>
          </div>
          <p>3:30</p>
        </div>
      </div>
    </div>
  );
};

export default Sywlg;
