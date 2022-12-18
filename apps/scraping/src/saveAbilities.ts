import { AbilitiesDao } from 'store';
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
        if (name && description && href)
          return { name, description, href: href.replace('.', '/sv') };
        else return null;
      }),
    ),
  ).then(excludeNull);

  for (let i = 0; i < 1; i++) {
    const { name, description, href } = abilities[i];
    await page.goto(getFullUrl(abilities[i].href));
    const englishName = await page
      .$('p.narrow.small.right')
      .then((elementHandler) => elementHandler?.innerText())
      .then((innerText) => innerText?.replace('英語名：', ''));
    if (!englishName) {
      console.error(`english name of ability：${name} can't get`);
      continue;
    }
    await AbilitiesDao().add({
      name,
      englishName,
      description,
      referenceUrl: getFullUrl(href),
    });
  }
});

saveAbilities();
