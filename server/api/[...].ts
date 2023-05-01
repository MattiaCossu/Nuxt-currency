import { Currency } from '~/types/Currency';

export default defineEventHandler(async (event): Promise<Currency> => {
    return $fetch(`https://api.coinlore.net${event.node.req.url}`);
  });