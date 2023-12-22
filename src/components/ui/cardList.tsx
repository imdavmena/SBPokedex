import { useEffect, useState } from "react";
import { PokemonClient, Pokemon } from "pokenode-ts";

import pikachu from "@/assets/home/BannerComplete.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./badge";

const CardList = ({ name }: { name: string }) => {
  const [data, setData] = useState<Pokemon>();
  useEffect(() => {
    const fetchData = async () => {
      const api = new PokemonClient();

      await api
        .getPokemonByName(name)
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    };

    fetchData();
  }, [name]);
  return (
    <>
      <Card key={name ?? "unique"} className="flex-[0_1_280px]">
        <CardHeader>
          <CardTitle>{data?.name ?? "Pikachu"}</CardTitle>
          <CardDescription className="space-x-2 pt-4">
            {data?.abilities &&
              data?.abilities
                .slice(0, 2)
                .map((item) => (
                  <Badge variant="outline">{item?.ability.name}</Badge>
                ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <span className="absolute top-0 right-6 border w-10 h-10 flex justify-center items-center border-black rounded-full">
            {data?.base_experience ?? "*"}
          </span>
          <img
            src={data?.sprites.front_default ?? pikachu}
            className="w-full h-auto"
            alt={data?.species.name ?? "pikachu"}
          />
        </CardContent>
        <CardFooter className="space-x-2">
          {data?.types.slice(0, 2).map((item) => (
            <Badge variant="outline">{item?.type.name ?? "*"}</Badge>
          ))}
        </CardFooter>
      </Card>
    </>
  );
};

export default CardList;
