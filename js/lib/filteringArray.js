export const filteringAnArray = (array, filterString) => {
  return array.filter((arrayElement) => {
    return arrayElement.price <= parseInt(filterString);
  });
};
