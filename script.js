const words = [
  'footwear',
  'perfume',
  'light',
  'beauty',
  'baby',
  'music',
  'furniture',
  'appliances',
  'personal care',
  'groceries',
  'automotive',
  'office',
  'mobile',
  'electronics devices',
  'bathing',
  'clothing accessories',
  'software',
  'cosmetics',
  'home',
  'kitchen',
  'bed room',
  'mobile accesories',
  'skin care',
  'medical'


];

const ProductsScraper = require('@scrapingant/amazon-proxy-scraper');

const runTheScript = async () => {
  for (let i = 20; i < words.length; ) {
    console.log(
      'This is the letter being taken as the keyword',
      'At Index: ',
      i
    );
    const scraper = new ProductsScraper({
      apiKey: '43c14e782be24dd2a3ba0883841d00de',
      keyword: words[i],
      host: 'www.amazon.in',
      number: 500,
      save: true,
      fileType: 'csv',
    });
    await scraper.startScraping().then(() => {
      i++;
    }, console.error);

    console.log('chaning this back to normal', words[i]);
  }
};

runTheScript();
