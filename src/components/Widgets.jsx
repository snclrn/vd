import gf from "../assets/mylove.jpg";
import cheers from "../assets/cheers.jpg";
import chill from "../assets/chill.jpg";
import roblox from "../assets/roblox.jpg";

const Widgets = () => {
  return (
    <div class="bg-white h-screen sticky top-0 p-3 shadow-[0_-20px_60px_20px] shadow-black/20 flex items-center">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-gradient-to-b from-slate-100 to-slate-50 text-slate-800 text-center text-7xl h-max font-extrabold rounded-3xl p-2">
          <p>06</p>
          <p>02</p>
        </div>
        <div>
          <img
            src={cheers}
            alt="Cheers"
            class="h-40 object-cover rounded-3xl"
          />
        </div>
        <div class="col-span-2">
          <img src={gf} alt="Gf" class="rounded-3xl h-40 w-full object-cover" />
        </div>
        <div>
          <img src={chill} alt="Chill" class="h-40 object-cover rounded-3xl" />
        </div>
        <div class="bg-gradient-to-b from-amber-400 to-yellow-500 text-white text-center text-7xl h-max font-extrabold rounded-3xl p-2">
          <p>11</p>
          <p>17</p>
        </div>
        <div class="col-span-2">
          <img
            src={roblox}
            alt="Roblox"
            class="rounded-3xl h-40 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
