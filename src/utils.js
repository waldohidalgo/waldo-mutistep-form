import data from "./data.js";

export function addPrefixPlanPrice(price, timely) {
  return timely === "yearly" ? `$${price}/yr` : `$${price}/mo`;
}

export function addPrefixAddonsPrice(price, timely) {
  return timely === "yearly" ? `+$${price}/yr` : `+$${price}/mo`;
}

export function calculateTotal(plan, addons, timely) {
  const planPrice = +data[timely].plan[plan];
  const addonsPriceObject = data[timely].addons;
  const addonsPrice = addons.reduce((acc, addon) => {
    return acc + +addonsPriceObject[addon];
  }, 0);

  return planPrice + addonsPrice;
}

export function addonsSelectedList(addons) {
  const addonList = [];
  for (const addon in addons) {
    if (addons[addon]) {
      addonList.push(addon);
    }
  }
  return addonList;
}
