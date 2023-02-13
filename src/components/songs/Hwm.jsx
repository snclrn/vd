import hwm from "../../assets/hwm.jpeg";

const Hwm = () => {
  return (
    <div class="h-screen sticky top-0 bg-orange-200 p-5 pt-28">
      <div>
        <div class="flex items-center text-orange-900 space-x-4">
          <img src={hwm} alt="" class="w-14 h-14 rounded-full" />
          <div>
            <p class="font-bold text-lg leading-none">Here with me</p>
            <p class="text-orange-900/60">d4vd</p>
          </div>
        </div>

        <div class="mt-6">
          <h1 class="font-jakarta text-2xl leading-relaxed text-orange-900 font-extrabold">
            I don't care how long it takes <br />
            As long as I'm with you, I've got a smile on my face <br />
            Save your tears, it'll be okay <br />
            You're here with me <br />
          </h1>
        </div>
      </div>

      <div class="mt-10">
        <div class="h-1 w-full rounded-full bg-orange-100">
          <div class="w-[70%] h-full rounded-full bg-orange-900"></div>
        </div>
        <div class="font-semibold text-orange-900 flex justify-between mt-3">
          <p>2:31</p>
          <div class="bg-orange-900 h-12 w-12 rounded-full flex items-center justify-center">
            <i class="text-2xl ai-heart text-orange-200 -mb-1"></i>
          </div>
          <p>4:03</p>
        </div>
      </div>
    </div>
  );
};

export default Hwm;
