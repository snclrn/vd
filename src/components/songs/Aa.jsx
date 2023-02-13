import aa from "../../assets/aa.jpeg";

const Aa = () => {
  return (
    <div class="h-screen sticky top-0 bg-cyan-300 p-5 pt-28">
      <div>
        <div class="flex items-center text-cyan-900 space-x-4">
          <img src={aa} alt="" class="w-14 h-14 rounded-full" />
          <div>
            <p class="font-bold text-lg leading-none">Araw-Araw</p>
            <p class="text-cyan-900/60">Ben&Ben</p>
          </div>
        </div>

        <div class="mt-6">
          <h1 class="font-jakarta text-2xl leading-relaxed text-cyan-900 font-extrabold">
            Kay tagal ko nang nag-iisa <br />
            Andiyan ka lang pala <br />
            Mahiwaga <br />
            Pipiliin ka sa araw-araw <br />
            Mahiwaga <br />
            Ang nadarama sa yo'y malinaw <br />
          </h1>
        </div>
      </div>

      <div class="mt-10">
        <div class="h-1 w-full rounded-full bg-cyan-200">
          <div class="w-[20%] h-full rounded-full bg-cyan-900"></div>
        </div>
        <div class="font-semibold text-cyan-900 flex justify-between mt-3">
          <p>1:23</p>
          <div class="bg-cyan-900 h-12 w-12 rounded-full flex items-center justify-center">
            <i class="text-2xl ai-heart text-cyan-200 -mb-1"></i>
          </div>
          <p>5:28</p>
        </div>
      </div>
    </div>
  );
};

export default Aa;
