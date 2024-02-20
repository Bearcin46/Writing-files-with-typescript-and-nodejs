import * as fs from "fs";
import data from "./data/touristPlace.json";

interface district {
  name: string;
  famousFor: string;
  id: number;
}

fs.mkdir("Districts", (error) => console.log(error));

//we are using recursive true to use nested function

data.map((place) => {
  fs.mkdir(`./Districts/${place.district}`, { recursive: true }, (error) =>
    console.log(error)
  );
  place.visit.map((visit: district) => {
    fs.writeFile(
      `./Districts/${place.district}/${visit.name}.txt`,
      ` ss`,
      (error) => {
        console.log(error);
      }
    );
  });
});
