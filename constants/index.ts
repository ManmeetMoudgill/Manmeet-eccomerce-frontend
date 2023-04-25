interface ICategory {
  [key: string]: string[];
}

export const informaticaCategories: ICategory = Object.freeze({
  computerPortatili: [
    "Notebook",
    "Notebook 2 in 1",
    "Notebook Gaming",
    "Notebook Apple",
  ],
  tabletEdReader: [
    "Tablet",
    "E-Reader",
    "Accessori Tablet",
    "Accessori E-Reader",
  ],
  mac: ["MacBook", "iMac", "Mac Mini", "Mac Pro", "Accessori Mac"],
  workStationServer: [
    "Workstation",
    "Server",
    "Accessori Workstation",
    "Accessori Server",
  ],
  pcDesktop: [
    "Pc Desktop",
    "Pc All in One",
    "Accessori Pc Desktop",
    "Accessori Pc All in One",
  ],
  stampantiScanner: [
    "Stampanti",
    "Scanner",
    "Accessori Stampanti",
    "Accessori Scanner",
  ],
  monitor: ["Monitor", "Accessori Monitor"],
  hardDiskStorage: [
    "Hard Disk",
    "SSD",
    "Nas",
    "Accessori Hard Disk",
    "Accessori SSD",
    "Accessori Nas",
  ],
});
