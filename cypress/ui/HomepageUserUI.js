const SEARCH_TXT = '//input[@id="search"]';
const SEARCH_LIST = '//ul[@class="list-group list-group-raw"]//a[1]';
//const CATEGORIES_SEARCH_RESULT = '//div[@class="text-left"]/following-sibling::div//a[contains(text(),"Gaming Desktop")]';
const CATEGORIES_SEARCH_RESULT = '//div[@class="text-left"]/following-sibling::div//a[contains(text(),"{text}")]'; 
module.exports= {SEARCH_TXT,SEARCH_LIST,CATEGORIES_SEARCH_RESULT};
