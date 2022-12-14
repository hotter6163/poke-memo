import { excludeNull } from 'utilities';
import { getFullUrl } from './utils/getFullUrl';
import { scraper } from './utils/scraper';

const saveAbilities = scraper(async (page) => {
  await page.goto(getFullUrl('/sv/ability_list.htm'));
  const trHandlers = await page.$$('table.list tr');
  const abilities = await Promise.all(
    trHandlers.map((handler) =>
      Promise.all([
        handler
          .$('a')
          .then((aElement) =>
            aElement ? Promise.all([aElement.getAttribute('href'), aElement.innerText()]) : null,
          ),
        handler.$$('td').then((trElements) => (trElements[1] ? trElements[1].innerText() : null)),
      ]).then((data) => {
        const [aData, description] = data;
        const [href, name] = aData ?? [];
        if (name && description && href) return { name, description, href };
        else return null;
      }),
    ),
  ).then(excludeNull);
  console.log(abilities);
  console.log(abilities.length, trHandlers.length);
});

saveAbilities();
