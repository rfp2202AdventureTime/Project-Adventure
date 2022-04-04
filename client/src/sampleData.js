const sampleData = {
  products: [
    {
      id: 65631,
      campus: 'rfp',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2022-03-29T15:08:08.445Z',
      updated_at: '2022-03-29T15:08:08.445Z',
    },
    {
      id: 65632,
      campus: 'rfp',
      name: 'Bright Future Sunglasses',
      slogan: "You've got to wear shades",
      description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      category: 'Accessories',
      default_price: '69.00',
      created_at: '2022-03-29T15:08:08.445Z',
      updated_at: '2022-03-29T15:08:08.445Z',
    },
    {
      id: 65633,
      campus: 'rfp',
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      category: 'Pants',
      default_price: '40.00',
      created_at: '2022-03-29T15:08:08.445Z',
      updated_at: '2022-03-29T15:08:08.445Z',
    },
    {
      id: 65634,
      campus: 'rfp',
      name: "Slacker's Slacks",
      slogan: 'Comfortable for everything, or nothing',
      description: "I'll tell you how great they are after I nap for a bit.",
      category: 'Pants',
      default_price: '65.00',
      created_at: '2022-03-29T15:08:08.445Z',
      updated_at: '2022-03-29T15:08:08.445Z',
    },
    {
      id: 65635,
      campus: 'rfp',
      name: 'Heir Force Ones',
      slogan: 'A sneaker dynasty',
      description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      category: 'Kicks',
      default_price: '99.00',
      created_at: '2022-03-29T15:08:08.445Z',
      updated_at: '2022-03-29T15:08:08.445Z',
    },
  ],
  // sample is for product_id = 65632
  reviews: [
    {
      review_id: 1136188,
      rating: 4,
      summary: 'I am liking these glasses',
      recommend: true,
      response: "Glad you're enjoying the product!",
      body: "They are very dark. But that's good because I'm in very sunny spots",
      date: '2019-06-23T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: 11,
      photos: [],
    },
    {
      review_id: 1136189,
      rating: 4,
      summary: 'They look good on me',
      recommend: true,
      response: '',
      body: 'I so stylish and just my aesthetic.',
      date: '2019-03-12T00:00:00.000Z',
      reviewer_name: 'fashionperson',
      helpfulness: 3,
      photos: [],
    },
    {
      review_id: 1136192,
      rating: 2,
      summary: 'This product was ok!',
      recommend: false,
      response: '',
      body: "They're fine but I wouldn't buy again.",
      date: '2019-05-23T00:00:00.000Z',
      reviewer_name: 'anyone',
      helpfulness: 1,
      photos: [],
    },
    {
      review_id: 1136191,
      rating: 5,
      summary: "I'm not a fan!",
      recommend: false,
      response: "Sorry to hear. Is there anything in particular you don't like?",
      body: "I don't like them",
      date: '2019-06-16T00:00:00.000Z',
      reviewer_name: 'negativity',
      helpfulness: 1,
      photos: [],
    },
    {
      review_id: 1155740,
      rating: 5,
      summary: 'This is a really nice product',
      recommend: true,
      response: null,
      body: 'I love this. It is way better than I think.',
      date: '2022-03-31T00:00:00.000Z',
      reviewer_name: 'Trytry',
      helpfulness: 0,
      photos: [],
    },
  ],

  reviewMeta: {
    product_id: '65632',
    ratings: {
      2: '1', 3: '1', 4: '2', 5: '9',
    },
    recommended: { false: '2', true: '11' },
    characteristics: {
      Quality: { id: 220234, value: '4.2000000000000000' },
    },
  },
  // sample is for product_id = 65632

  questions: {
    product_id: '65632',
    results: [
      {
        question_id: 573876,
        question_body: 'Where does this product ship from?',
        question_date: '2018-01-06T00:00:00.000Z',
        asker_name: 'jbilas',
        question_helpfulness: 25,
        reported: false,
        answers: {
          5361377: {
            id: 5361377,
            body: 'It ships from the facility in Tulsa',
            date: '2018-01-06T00:00:00.000Z',
            answerer_name: 'dschulman',
            helpfulness: 25,
            photos: [],
          },
          5361385: {
            id: 5361385,
            body: 'Mine was delivered from Oklahoma',
            date: '2018-01-06T00:00:00.000Z',
            answerer_name: 'dschulman',
            helpfulness: 23,
            photos: [],
          },
        },
      },
    ],
  },
  // sample is for product_id = 65632

  productStyles:
  {
    product_id: '65632',
    results: [
      {
        style_id: 404880,
        name: 'Black Lenses & Black Frame',
        original_price: '69.00',
        sale_price: null,
        'default?': false,
        photos: [
          {
            thumbnail_url: null,
            url: null,
          },
        ],
        skus: {
          null: {
            quantity: null,
            size: null,
          },
        },
      },
      {
        style_id: 404881,
        name: 'Black Lenses & Gold Frame',
        original_price: '69.00',
        sale_price: null,
        'default?': true,
        photos: [
          {
            thumbnail_url: null,
            url: null,
          },
        ],
        skus: {
          null: {
            quantity: null,
            size: null,
          },
        },
      },
    ],
  },
  // sample is for product_id = 65632

  relatedProducts: [
    65633,
    65637,
    65636,
    65635,
  ],
};

export default sampleData;
