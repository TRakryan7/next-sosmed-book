interface dataStoryProps {
    name: string;
    image: string;
  }

export const dataStory:dataStoryProps[] = 
   [
    {
        'name': 'Asyanti',
        'image': '/asset/contain/coffee.jpg'
    },
    {
        'name': 'Ryan',
        'image': '/asset/contain/computer.jpg'
    },
    {
        'name': 'Dina',
        'image': '/asset/contain/flower.jpg'
    },
    {
        'name': 'Suti',
        'image': '/asset/contain/mountain.jpg'
    },
    {
        'name': 'Farhan',
        'image': '/asset/contain/modern.jpg'
    },
    {
        'name': 'Dista',
        'image': '/asset/contain/food.jpg'
    },
    {
        'name': 'Catharina',
        'image': '/asset/contain/pasta.jpg'
    },
    {
        'name': 'Liam',
        'image': '/asset/contain/code.jpg'
    },
    {
        'name': 'Sumina',
        'image': '/asset/contain/books.jpg'
    },
    {
        'name': 'Asghar',
        'image': '/asset/contain/library.jpg'
    },
    {
        'name': 'Ian',
        'image': '/asset/contain/beach.jpg'
    },
    {
        'name': 'Wanlong',
        'image': '/asset/contain/river.jpg'
    },
    {
        'name': 'Tishka',
        'image': '/asset/contain/halloween.jpg'
    },
    {
        'name': 'Dart',
        'image': '/asset/contain/night.jpg'
    },
    {
        'name': 'Faizal',
        'image': '/asset/contain/galaxy.jpg'
    },
   ];

interface dataContainProps {
    name: string;
    image: string;
    active: string;
    contain: string;
    likes: number;
    comments: number;
}
  
export const dataContain: dataContainProps[] = [
    {
        'name': 'Tomi',
        'image': '/asset/card/hanzi.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur esse sint impedit necessitatibus quo eligendi aliquid officia, magnam mollitia at sapiente vero? Pariatur, fugit.',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Santo Rini',
        'image': '/asset/card/kanji.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur esse sint impedit necessitatibus quo eligendi aliquid officia',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Gulpa dian',
        'image': '/asset/card/duck.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  fugit.',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Asyanti',
        'image': '/asset/card/hangeul.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  magnam mollitia at sapiente vero? Pariatur, fugit.',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Ryan',
        'image': '/asset/card/panda.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor. Non aspernatur esse sint impedit necessitatibus quo eligendi aliquid officia, magnam mollitia at sapiente vero? Pariatur, fugit.',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Dina',
        'image': '/asset/card/pray.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit, magnam mollitia at sapiente vero? Pariatur, fugit.',
        'likes': 255,
        'comments':234
    },
    {
        'name': 'Tishka',
        'image': '/asset/card/china.jpg',
        'active': '56 minutes ago',
        'contain': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur esse sint impedit necessitatibus quo eligendi aliquid officia, magnam mollitia at sapiente vero? Pariatur, fugit.',
        'likes': 255,
        'comments':234
    },
]

interface datCategoryProps{
    title: string;
    image: string;
    type: number;
}

export const dataCategory: datCategoryProps[] = [
    {
        'title': 'Makanan',
        'image': '/asset/category/foods.jpg',
        'type':1
    },
    {
        'title': 'Minuman',
        'image': '/asset/category/drink.jpg',
        'type':0
    },
    {
        'title': 'Melancong',
        'image': '/asset/category/traveling.jpg',
        'type':0
    },
    {
        'title': 'Zen',
        'image': '/asset/category/zen.jpg',
        'type':1
    },
    {
        'title': 'Budaya',
        'image': '/asset/category/culture.jpg',
        'type':1
    },
    {
        'title': 'Kehidupan',
        'image': '/asset/category/lifestyle.jpg',
        'type':0
    },
    {
        'title': 'Alam',
        'image': '/asset/category/mountain.jpg',
        'type':0
    },
    {
        'title': 'Hewan',
        'image': '/asset/category/animal.jpg',
        'type':1
    },
    {
        'title': 'Bahasa',
        'image': '/asset/category/language.jpg',
        'type':1
    },
    {
        'title': 'Keseimbangan',
        'image': '/asset/category/balance.jpg',
        'type':0
    },
    {
        'title': 'Lelucon',
        'image': '/asset/category/humor.jpg',
        'type':0
    },
    {
        'title': 'Programming',
        'image': '/asset/category/programming.jpg',
        'type':1
    },
    {
        'title': 'Agama',
        'image': '/asset/category/religion.jpg',
        'type':1
    },
    {
        'title': 'Cinta',
        'image': '/asset/category/romace.jpg',
        'type':0
    },
    {
        'title': 'Anime',
        'image': '/asset/category/anime.jpg',
        'type':0
    },
    {
        'title': 'Kartun',
        'image': '/asset/category/cartoon.jpg',
        'type':1
    },
    {
        'title': 'Thailand',
        'image': '/asset/category/thailand.jpg',
        'type':1
    },
    {
        'title': 'Bali',
        'image': '/asset/category/bali.jpg',
        'type':0
    },
    {
        'title': 'Jepang',
        'image': '/asset/category/japan.jpg',
        'type':0
    },
    {
        'title': 'Kemanusiaan',
        'image': '/asset/category/philanthropy.jpg',
        'type':1
    },
    
]