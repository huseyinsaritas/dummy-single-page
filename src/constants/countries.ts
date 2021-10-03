import i18n from "../i18n";

type Country = {
  id: string;
  name: string;
};

export const countryList = (): Country[] => {
  if (i18n.language === "tr") {
    return [
      { id: "TR", name: "Türkiye" },
      { id: "US", name: "Amerika Birleşik Devletleri" },
      { id: "GB", name: "Birleşik Krallık" },
      { id: "DE", name: "Almanya" },
      { id: "SE", name: "İsveç" },
      { id: "KE", name: "Kenya" },
      { id: "BR", name: "Brezilya" },
      { id: "ZW", name: "Zimbabve" },
    ];
  } else {
    return [
      { id: "TR", name: "Turkey" },
      { id: "US", name: "United States of America" },
      { id: "GB", name: "United Kingdom" },
      { id: "DE", name: "Germany" },
      { id: "SE", name: "Sweden" },
      { id: "KE", name: "Kenya" },
      { id: "BR", name: "Brazil" },
      { id: "ZW", name: "Zimbabwe" },
    ];
  }
};
