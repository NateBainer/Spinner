let fullSpin = () => {
  let increment = 100;
  let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   " ];

  for (const r of spinner) {
    setTimeout(() => {
      process.stdout.write(r);
    }, increment);
    increment += 200;
  }

  process.stdout.write('hello from spinner2.js... \rheyyy\n');
};

fullSpin();

//Hayyyyy, Jules be da beez neeeezzzzz
//sorry was teaching my fiance how to push to git lol. shes cool.