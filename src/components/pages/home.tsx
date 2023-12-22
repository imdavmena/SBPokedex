import BannerComplete from "../../assets/home/BannerComplete.png";
import { Button } from "../ui/button";
import { H1 } from "../ui/h1";
import { H2 } from "../ui/h2";

export const Home = () => {
  return (
    <section className="h-[calc(100vh-20px)] bg-gradient-to-t from-[rgba(242,184,7,1)] to-[rgba(245,219,19,1)] flex flex-col justify-center items-center">
      <div className="relative">
        <img
          src={BannerComplete}
          alt="Banner completo mostrando a pikachu celebrando con pokebolas de fondo"
          className="max-w-[556px] w-full"
        />
      </div>
      <div className="flex flex-col text-center">
        <H1>
          Find
          <span className="font-medium"> all your favorite</span> Pokemon
        </H1>
        <H2 className="text-[24px] my-3">
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </H2>
        <Button
          className="bg-[#73D677] text-[#212121] hover:bg-[#73D677] text-base font-bold rounded-[11px]  shadow-[inset_0px_-6px_1px_0px_rgba(0,0,0,0.18)]"
          asChild
        >
            <a href="/pokedex/list">
                See pokemon
            </a>
        </Button>
      </div>
    </section>
  );
};
