export const forEach = (items: any[], callback: (item: any) => void) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};
