import { getFullUrl } from './utils/getFullUrl';
import { scraper } from './utils/scraper';

const savePokemons = scraper(async (page) => {
  await page.goto(getFullUrl('/sv/zukan/'));
  const haszukanHandles = await page.$$('li.haszukan');

  const pokemons = await Promise.all(
    haszukanHandles.map((handle) =>
      Promise.all([
        handle.getAttribute('data-no'),
        handle.getAttribute('data-paldea-no'),
        handle.$('a').then((aElement) => {
          if (!aElement) return;
          return Promise.all([aElement.getAttribute('href'), aElement.innerText()]);
        }),
      ]).then((data) => {
        const [number, paldeaNumber, aData] = data;
        const [href, name] = aData ?? [];
        return {
          number,
          paldeaNumber,
          name,
          href,
        };
      }),
    ),
  );
  console.log(pokemons);
});

savePokemons();
