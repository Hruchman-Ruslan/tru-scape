export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 347,
    categories: 4,
    newCompanies: 40,
    activeCompanies: 620,
  });
};

export const getSummarySales = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: 'Costco Wholesale',
      sold: 304,
      income: 605,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryPromotions = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      promotionId: i + 1,
      promotionName: 'Lorem ipsum dolor',
      companyTitle: 'Costco Wholesale',
      discount: 40,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryCategories = () => {
  return Promise.resolve([
    {
      categoryId: 1,
      categoryTitle: 'Products',
      count: 4,
    },
    {
      categoryId: 2,
      categoryTitle: 'Products',
      count: 8,
    },
    {
      categoryId: 3,
      categoryTitle: 'Products',
      count: 24,
    },
    {
      categoryId: 4,
      categoryTitle: 'Products',
      count: 1,
    },
    {
      categoryId: 5,
      categoryTitle: 'Products',
      count: 34,
    },
    {
      categoryId: 6,
      categoryTitle: 'Products',
      count: 22,
    },
    {
      categoryId: 7,
      categoryTitle: 'Products',
      count: 44,
    },
    {
      categoryId: 8,
      categoryTitle: 'Products',
      count: 2,
    },
  ]);
};

export const getSummaryCountries = () => {
  return Promise.resolve([
    {
      countryId: 1,
      countryTitle: 'Canada',
      count: 5,
    },
    {
      countryId: 2,
      countryTitle: 'USA',
      count: 37,
    },
    {
      countryId: 3,
      countryTitle: 'Italy',
      count: 22,
    },
    {
      countryId: 4,
      countryTitle: 'Ukraine',
      count: 53,
    },
    {
      countryId: 5,
      countryTitle: 'Spain',
      count: 5,
    },
  ]);
};
