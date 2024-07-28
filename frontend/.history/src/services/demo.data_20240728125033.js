export const dataService = {
  getDataBooks,
}

const dataBooks = [
  {
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
    authors: ['Barbara Cartland'],
    publishedDate: 1999,
    description:
      'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
    pageCount: 713,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    language: 'en',
    listPrice: {
      amount: 109,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'JYOJa2NpSCq',
    title: 'morbi',
    subtitle: 'lorem euismod dictumst inceptos mi',
    authors: ['Barbara Cartland'],
    publishedDate: 1978,
    description:
      'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
    pageCount: 129,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'sp',
    listPrice: {
      amount: 44,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: '1y0Oqts35DQ',
    title: 'at viverra venenatis',
    subtitle: 'gravida libero facilisis rhoncus urna etiam',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
    pageCount: 972,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
    language: 'he',
    listPrice: {
      amount: 108,
      currencyCode: 'ILS',
      isOnSale: false,
    },
  },
  {
    id: 'kSnfIJyikTP',
    title: 'dictum',
    subtitle:
      'augue eu consectetur class curabitur conubia ligula in ullamcorper',
    authors: ['Danielle Steel'],
    publishedDate: 1978,
    description:
      'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
    pageCount: 303,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
    language: 'en',
    listPrice: {
      amount: 30,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: 'f4iuVmbuKCC',
    title: 'sem himenaeos aptent',
    subtitle: 'interdum per habitasse luctus purus est',
    authors: ['Dr. Seuss'],
    publishedDate: 2011,
    description:
      'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
    pageCount: 337,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
    language: 'sp',
    listPrice: {
      amount: 19,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: 'U2rfZO6oBZf',
    title: 'mi ante posuere',
    subtitle:
      'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
    authors: ['Leo Tolstoy'],
    publishedDate: 1978,
    description:
      'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
    pageCount: 748,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
    language: 'en',
    listPrice: {
      amount: 91,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'xI0wrXaaAcq',
    title: 'non',
    subtitle:
      'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
      'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
    pageCount: 65,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'he',
    listPrice: {
      amount: 90,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: '9laHCEdSpFy',
    title: 'tristique',
    subtitle: 'consectetur a eu tincidunt condimentum amet nisi',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
    pageCount: 299,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/11.jpg',
    language: 'he',
    listPrice: {
      amount: 176,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
]

function getDataBooks() {
  return dataBooks
}
