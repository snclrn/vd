import bouquet from "../assets/bouquet.png";

const Flower = () => {
  return (
    <div class="px-8 image flex flex-col items-center justify-center">
      <img src={bouquet} alt="" class="h-64 w-max mb-8" />
      <p class="font-ds text-2xl text-center text-white">
        flowers for the most beautiful girl I know ♡
      </p>
    </div>
  );
};

export default Flower;
