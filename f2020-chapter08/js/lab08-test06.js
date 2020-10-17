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
    this.marketCap50 = function () {
        return currency(day50MovingAvg * sharesOutstanding);
    };
    this.marketCap200 = function () {
        return currency(day200MovingAvg * sharesOutstanding);
    };
    this.revenue = function () {
        return currency(operatingRevenue - costOfRevenue);
    };
    this.shareHolderEquity = function () {
        return currency(totalAssets - totalLiabilities);
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
    <p>Market Cap (50day avg): <span>$${AcctCalculations.marketCap50}</span></p>
    <p>Market Cap (200day avg): <span>$${AcctCalculations.marketCap200}</span></p>
    <p>Net Revenue: <span>$${AcctCalculations.revenue}</span></p>
    <p>Shareholder Equity: <span>$${AcctCalculations.shareHolderEquity}</span></p>
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