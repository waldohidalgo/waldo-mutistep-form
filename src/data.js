const data = {
  monthly: {
    plan: { arcade: "9", advanced: "12", pro: "15" },
    addons: {
      onlineService: "1",
      largerStorage: "2",
      customizableProfile: "2",
    },
  },
  yearly: {
    plan: { arcade: "90", advanced: "120", pro: "150" },
    addons: {
      onlineService: "10",
      largerStorage: "20",
      customizableProfile: "20",
    },
  },
  plans: ["arcade", "advanced", "pro"],
  addons: ["onlineService", "largerStorage", "customizableProfile"],
  descriptionAddons: {
    onlineService: "Access to multiplayer games",
    largerStorage: "Extra 1TB of cloud save",
    customizableProfile: "Custom theme on your profile",
  },
  reemplazoTextAddons: {
    onlineService: "Online service",
    largerStorage: "Larger storage",
    customizableProfile: "Customizable profile",
  },
};

export default data;
