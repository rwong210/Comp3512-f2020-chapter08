/* add code below this */

const companies = JSON.parse(content);

function Company(symbol, companyName, exchange, industry, website, description, CEO, sector, tags, stats) {
    this.symbol = symbol;
    this.companyName = companyName;
    this.exchange = exchange;
    this.industry = industry;
    this.website = website;
    this.description = description;
    this.CEO = CEO;
    this.sector = sector;
    this.tags = [];
    this.stats = {};
}

function AcctCalculations(Company) {

    this.marketCap50 = function (Company) {
        return currency(Company.stats.day50MovingAvg * Company.stats.sharesOutstanding);
    };
    this.marketCap200 = function (Company) {
        return currency(Company.stats.day200MovingAvg * Company.stats.sharesOutstanding);
    };
    this.revenue = function (Company) {
        return currency(Company.stats.operatingRevenue - Company.stats.costOfRevenue);
    };
    this.shareHolderEquity = function (Company) {
        return currency(Company.stats.totalAssets - Company.stats.totalLiabilities);
    };
    const currency = function (num) {
        return new Intl.NumberFormat("en-us", {
            style: 'currency',
            currency: 'USD'
        }).format(num);
    };
}


function outputCard(Company) {
    document.write(`<article class="card"><h2>${Company.symbol}-${Company.companyName}</h2><div>       
    <p>Share Price (50day avg): <span>$${Company.stats.day50MovingAvg}</span></p>
    <p>Share Price (200day avg): <span>$${Company.stats.day200MovingAvg}</span></p>
    <p>Market Cap (50day avg): <span>${new AcctCalculations().marketCap50(Company)}</span></p>
    <p>Market Cap (200day avg): <span>${new AcctCalculations().marketCap200(Company)}</span></p>
    <p>Net Revenue: <span>${new AcctCalculations().revenue(Company)}</span></p>
    <p>Shareholder Equity: <span>${new AcctCalculations().shareHolderEquity(Company)}</span></p>
  </div>
  <footer>
      <small>Technology</small> 
      <small>Consumer Electronics</small>
      <small>Computer Hardware</small>
  </footer>
</article>`);

};

for (let c of companies) {
    outputCard(c);
}