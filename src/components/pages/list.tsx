import { useCallback, useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";

import { ResponseDataModel } from "@/model/response";
import { H1 } from "@/components/ui/h1";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Filter } from "lucide-react";
import Combobox from "../ui/combobox";
import { ComboboxModel } from "@/model/combobox";
import CardList from "../ui/cardList";

const List = () => {
  const [data, setData] = useState<ResponseDataModel>();
  const [abilitiesValue, setAbilitiesValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [genderValue, setGenderValue] = useState("");

  const [boxAbilities, setBoxAbilities] = useState<ComboboxModel[]>();
  const [boxType, setBoxType] = useState<ComboboxModel[]>();
  const [boxGender, setBoxGender] = useState<ComboboxModel[]>();

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const api = new PokemonClient();

      await api
        .listPokemons()
        .then((res: ResponseDataModel) => setData(res))
        .catch((error) => console.error(error));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const api = new PokemonClient();

      await api
        .listTypes()
        .then((res: ResponseDataModel) => {
          const xy: ComboboxModel[] = res.results.map((item) => {
            return { value: item.name, label: item.name };
          });
          setBoxType(xy);
        })
        .catch((error) => console.error(error));

      await api
        .listAbilities()
        .then((res: ResponseDataModel) => {
          res.results.map((item) =>
            setBoxAbilities((currentValue) => [
              ...((currentValue as ComboboxModel[]) || []),
              { value: item.name, label: item.name },
            ])
          );
        })
        .catch((error) => console.error(error));

      await api
        .listGenders()
        .then((res: ResponseDataModel) => {
          res.results.map((item) =>
            setBoxGender((currentValue) => [
              ...((currentValue as ComboboxModel[]) || []),
              { value: item.name, label: item.name },
            ])
          );
        })
        .catch((error) => console.error(error));
    };
    if (trigger) {
      fetchData();
    }

  }, [trigger]);

  const handleFilter = useCallback(() => {
    alert(`${abilitiesValue} ${typeValue} ${genderValue}`);
  }, [abilitiesValue, typeValue, genderValue]);

  return (
    <section className="px-2">
      <div className="text-center mt-2">
        <H1>
          <span className="font-normal">{data?.count}</span> Pokemons{" "}
          <span className="font-normal">for you to choose your favorite</span>
        </H1>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" onClick={() => setTrigger(!trigger)}>
              <Filter />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-start">Filter</SheetTitle>
              <SheetDescription className="text-start">
                Make changes to your pokemon search here. Click save when you're
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-start">
                  Abilities
                </Label>
                <Combobox
                  setValue={setAbilitiesValue}
                  value={abilitiesValue}
                  box={boxAbilities || []}
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-start">
                  Type
                </Label>
                <Combobox
                  setValue={setTypeValue}
                  value={typeValue}
                  box={boxType || []}
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-start">
                  Gender
                </Label>
                <Combobox
                  setValue={setGenderValue}
                  value={genderValue}
                  box={boxGender || []}
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="button" onClick={handleFilter}>
                  Save filter
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="max-h-[calc(100vh-290px)] overflow-hidden overflow-y-auto space-y-2 mt-2 lg:flex lg:flex-wrap lg:space-x-2 lg:justify-center lg:content-start">
        {data?.results &&
          data?.results.map((item, idx) => (
            <CardList key={idx} name={item.name} />
          ))}
      </div>
    </section>
  );
};

export default List;
