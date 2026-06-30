// All imagery is sourced from Unsplash (free-to-use license) and is used
// purely to demonstrate the visual quality of Blueprint Studio's web design
// work. None of these images depict real client projects or properties
// represented by Blueprint Studio. See the footer disclaimer for details.

function unsplash(id: string, w = 2400, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  heroNight: unsplash("photo-1748063578185-3d68121b11ff"),
  heroVillaPool: unsplash("photo-1512917774080-9991f1c4c750"),
  poolDetail: unsplash("photo-1613977257363-707ba9348227"),
  villaFacadeDay: unsplash("photo-1580587771525-78b9dba3b914"),
  livingRoomWindow: unsplash("photo-1682184805271-11671b7ecf4c"),
  livingRoomFireplace: unsplash("photo-1638885930125-85350348d266"),
  livingRoomBlackFireplace: unsplash("photo-1615874694520-474822394e73"),
  livingRoomWarm: unsplash("photo-1613545325278-f24b0cae1224"),
  buildingWithPool: unsplash("photo-1670589953882-b94c9cb380f5"),
  waterfrontBuilding: unsplash("photo-1599777560450-e462cffc5368"),
  villaConcrete: unsplash("photo-1613490493576-7fde63acd811"),
  bedroomSuite: unsplash("photo-1562438668-bcf0ca6578f0"),
  tropicalVillaTwilight: unsplash("photo-1759372945658-1e9f56e751bd"),
  largeWhiteBuilding: unsplash("photo-1680874261352-ed1ee3d1cf01"),
  whiteConcreteDaylight: unsplash("photo-1628012209120-d9db7abf7eab"),
} as const;

export type ImageKey = keyof typeof images;
