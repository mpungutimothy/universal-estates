export const getImagePath = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const localImages = {
  csr: {
    bloodDonation: [
      'csr/blood1.jpeg',
      'csr/blood2.jpeg',
      'csr/blood3.jpeg',
      'csr/blood4.jpeg',
    ],
    churchOutreach: [
      'csr/church1.jpeg',
      'csr/church2.jpeg',
      'csr/church3.jpeg',
      'csr/church4.jpeg',
    ],
    policeSupport: [
      'csr/police1.jpeg',
      'csr/police2.jpeg',
      'csr/police3.jpeg',
      'csr/police4.jpeg',
    ],
    communityDev: [
      'csr/community1.jpeg',
      'csr/community2.jpeg',
      'csr/community3.jpeg',
      'csr/community4.jpeg',
    ],
  },

  projects: {
    craneHeights: [
      'siteupdates/craneupdates1.jpg',
      'siteupdates/craneupdates2.jpg',
      'siteupdates/craneupdates3.jpg',
      'siteupdates/craneupdates4.jpg',
      'siteupdates/craneupdates5.jpg',
      'siteupdates/craneupdates6.jpg',
      'siteupdates/craneupdates7.jpg',
      'siteupdates/craneupdates8.jpg',
    ],
    macawTowers: [
      'siteupdates/macawupdates1.jpeg',
      'siteupdates/macawupdates2.jpeg',
      'siteupdates/macawupdates3.jpeg',
      'siteupdates/macawupdates4.jpeg',
      'siteupdates/macawupdates5.jpeg',
      'siteupdates/macawupdates6.jpeg',
      'siteupdates/macawupdates7.jpeg',
      'siteupdates/macawupdates8.jpeg',
    ],
    rubyCourts: [
      'siteupdates/rubyupdate1.jpeg',
      'siteupdates/rubyupdate2.jpeg',
      'siteupdates/rubyupdate3.jpeg',
      'siteupdates/rubyupdate4.jpeg',
      'siteupdates/rubyupdate5.jpeg',
      'siteupdates/rubyupdate6.jpeg',
      'siteupdates/rubyupdate7.jpeg',
      'siteupdates/rubyupdate8.jpeg',
    ],
    storkElegance: [
      'siteupdates/eleganceupdate1.jpeg',
      'siteupdates/eleganceupdate2.jpeg',
      'siteupdates/eleganceupdate3.jpeg',
      'siteupdates/eleganceupdate4.jpeg',
      'siteupdates/eleganceupdate5.jpeg',
      'siteupdates/eleganceupdate6.jpeg',
      'siteupdates/eleganceupdate7.jpeg',
      'siteupdates/eleganceupdate8.jpeg',
    ],
    oliveEnclave: [
      'properties/olive-enclave1.jpg',
      'properties/olive-enclave4.jpg',
      'properties/olive-enclave6.jpg',
      'properties/olive-enclave8.jpg',
    ],
    dwellingDoves: [
      'properties/dwellingdoves1.jpg',
      'properties/dwellingdoves2.jpg',
      'properties/dwellingdoves3.jpg',
    ],
  },

  // properties: {
  //   defaultFallback: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  // },
};
