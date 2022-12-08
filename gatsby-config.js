module.exports = {
  siteMetadata: {
    title: `Sam Lin Lee`,
    author: `Sam Lin Lee`,
    firstName: `Sam`,
    lastName: `Lee`,
    description: `Sam Lin Lee's portfolio`,
    occupation: `Student`,
    keywords: [
      `Samantha`,
      `Sam`,
      `Lee`,
      `Personal`,
      `Portfolio`,
      `Resume`,
      `Projects`,
      `Work`,
      "Tech",
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    statusCommon: [
      "improving this site's accessibility!",
      "accepting seattle food recs 🥘",
      "AMOGR (add me on goodreads) 📚",
      "RU, RAH, RAH!",
      "1% software, 99% development",
      "what's your favorite video essay?",
      "currently getting back into reading",
      "a learning enthusiast",
      "do good things, write good code",
      "professional beep-boop-er",
      "i'd tell you a UDP joke, but you might not get it",
      "welcome to my public static void",
      "amender of git commits",
    ],
    statusUncommon: [
      "You're telling me trauma is just a Hidden Markov Model?",
      "Sometimes, I consider going to law school. You should talk me into or out of it.",
    ],
    statusRare: [
      "This blurb has a 1% chance of showing up, and you've seen it. Congratulations!",
    ],
    designations: [`Student`, `Activist`, `Teacher`, `Thinker`],
    interests: [
      "Fandom & pop culture analysis",
      "HCI research",
      "Public policy",
    ],
    passions: [`Ethical tech`, "LGBTQIA visibility", "Sustainability"],
    dabblings: [`Graphic design`, `Prose`, "UI/UX"],
    eager: ["Build a closed ecosystem", "Get another tattoo", "Boulder V5"],
    learnings: [
      "Cybersecurity",
      "Tech policy",
      "Algorithmic bias",
      "Mutual aid",
    ],
    hobbies: ["DIY", `Pokémon GO`, "Sewing & embroidery", "Ice skating"],
    advanced: ["Java", "Python", "C"],
    intermediate: ["JavaScript"],
    basic: ["C#", "React", "PHP"],
    conferences: [
      {
        title: `O4U Tech Conference (2021)`,
        link: "http://www.outforundergrad.org/tech",
      },
      {
        title: `Civis Data for Good Summit (2021)`,
        link: "https://hopin.com/events/dataforgood_june2021",
      },
      {
        title: `oSTEM Conference (2020)`,
        link: "https://ostem.org/page/conference-2020",
      },
      {
        title: `Impact Summit (2020)`,
        link: "https://www.impactlabs.io/summit/",
      },
      {
        title: `Grace Hopper Celebration (2019-2021)`,
        link: "https://ghc.anitab.org/",
      },
      {
        title: `Bit by Bit (2018)`,
        link: "https://blogs.dalton.org/bitbybit/",
      },
    ],
    readingList: [
      {
        title: `Algorithms of Oppression`,
        author: `Safiya Umoja Noble`,
        link: `https://www.goodreads.com/book/show/34762552-algorithms-of-oppression`,
      },
      {
        title: `Freakonomics`,
        author: `Steven D. Levitt, Stephen J. Dubner`,
        link: `https://www.goodreads.com/book/show/1202.Freakonomics`,
      },
      {
        title: `Oranges Are Not the Only Fruit`,
        author: `Jeanette Winterson`,
        link: `https://www.goodreads.com/book/show/15055.Oranges_Are_Not_the_Only_Fruit`,
      },
      {
        title: `Passing`,
        author: `Nella Larson`,
        link: `https://www.goodreads.com/book/show/349929.Passing`,
      },
      {
        title: `Politics Is for Power`,
        author: `Eitan Hersh`,
        link: `https://www.goodreads.com/book/show/49556729-politics-is-for-power`,
      },
      {
        title: `The Book Thief`,
        author: `Markus Zusak`,
        link: `https://www.goodreads.com/book/show/19063.The_Book_Thief`,
      },
      {
        title: `This is How You Lose the Time War`,
        author: `Amal El-Mohtar, Max Gladstone`,
        link: `https://www.goodreads.com/book/show/43352954-this-is-how-you-lose-the-time-war`,
      },
      {
        title: `Weapons of Math Destruction`,
        author: `Cathy O'Neil`,
        link: `https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction`,
      },
    ],
    showsList: [
      {
        title: `Everything, Everywhere, All at Once`,
        author: `Daniels`,
        link: `https://www.imdb.com/title/tt6710474/`,
        year: "2022",
      },
      {
        title: `Hereditary`,
        author: `Ari Aster`,
        link: `https://www.imdb.com/title/tt7784604/`,
        year: "2018",
      },
      {
        title: `Inception`,
        author: `Christopher Nolan`,
        link: `https://www.imdb.com/title/tt1375666/`,
        year: "2010",
      },
      {
        title: `Jojo Rabbit`,
        author: `Taika Waititi`,
        link: `https://www.imdb.com/title/tt2584384/`,
        year: "2019",
      },
      {
        title: `Knives Out`,
        author: `Rian Johnson`,
        link: `https://www.imdb.com/title/tt8946378/`,
        year: "2019",
      },
      {
        title: `Moulin Rouge!`,
        author: `Baz Luhrmann, Craig Pearce`,
        link: `https://www.imdb.com/title/tt0203009/`,
        year: "2001",
      },
      {
        title: `Portrait of a Lady on Fire`,
        author: `Céline Sciamma`,
        link: `https://www.imdb.com/title/tt8613070/`,
        year: "2019",
      },
      {
        title: `The Silence of the Lambs`,
        author: `Jonathan Demme`,
        link: `https://www.imdb.com/title/tt0102926/`,
        year: "1991",
      },
      {
        title: `The Sixth Sense`,
        author: `M. Night Shyamalan`,
        link: `https://www.imdb.com/title/tt0167404/`,
        year: "1999",
      },
      {
        title: `The Social Network`,
        author: `David Fincher`,
        link: `https://www.imdb.com/title/tt1285016/`,
        year: "2010",
      },
    ],
    essayList: [
      {
        title: `Charles Darwin Vs Karl Marx`,
        author: `Philosophy Tube`,
        link: `https://www.youtube.com/watch?v=rfYvLlbXj_8`,
      },
      {
        title: `Femininity and the Intersection of Race and Class`,
        author: `Shanspeare`,
        link: `https://www.youtube.com/watch?v=2Jiw_AxFy1w`,
      },
      {
        title: `Facts DO Care About Your Feelings`,
        author: `Zoe Bee`,
        link: `https://www.youtube.com/watch?v=E8ISzmBBTvo`,
      },
      {
        title: `The Lotus Blossom Stereotype - Dangers of the Asian Fetish`,
        author: `The Take`,
        link: `https://www.youtube.com/watch?v=NXvertLlhW8`,
      },
      {
        title: `Why Avatar has the Most Ironic Soundtrack of All Time`,
        author: `Sideways`,
        link: `https://www.youtube.com/watch?v=tL5sX8VmvB8`,
      },
    ],
    animeList: [
      {
        title: `Attack on Titan`,
        link: `https://myanimelist.net/anime/16498/Shingeki_no_Kyojin`,
        year: "2013",
      },
      {
        title: `Beastars`,
        link: `https://myanimelist.net/anime/39195/Beastars`,
        year: "2019",
      },
      {
        title: `Devilman: Crybaby`,
        link: `https://myanimelist.net/anime/35120/Devilman__Crybaby`,
        year: "2018",
      },
      {
        title: `Haikyuu!!`,
        link: `https://myanimelist.net/anime/20583/Haikyuu`,
        year: "2014",
      },
      {
        title: `Mob Psycho 100`,
        link: `https://myanimelist.net/anime/32182/Mob_Psycho_100`,
        year: "2016",
      },
      {
        title: `Perfect Blue`,
        link: `https://myanimelist.net/anime/437/Perfect_Blue`,
        year: "1998",
      },
      {
        title: `Puella Magi Madoka Magica`,
        link: `https://myanimelist.net/anime/9756/Mahou_Shoujo_Madoka%E2%98%85Magica`,
        year: "2011",
      },
      {
        title: `Spirited Away`,
        link: `https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi`,
        year: "2001",
      },
      {
        title: `Steins;Gate`,
        link: `https://myanimelist.net/anime/9253/Steins_Gate`,
        year: "2011",
      },
      {
        title: `The Wolf Children Ame and Yuki`,
        link: `https://myanimelist.net/anime/12355/Ookami_Kodomo_no_Ame_to_Yuki`,
        year: "2012",
      },
    ],
    features: [
      {
        title: `Greenpeace Toolkit: Data Activist Co-op Sessions`,
        link: `https://www.greenpeace.org/usa/toolkits/data-activist-co-op-sessions/`,
        year: "2022",
      },
      {
        title: `Political Analysis of Fossil Fuel Projects`,
        link: `https://www.youtube.com/watch?v=myacoy0q1a4`,
        year: "2022",
      },
      {
        title: `Rutgers University SAS Honors Program Senior Spotlight`,
        link: `https://rutgershonorsblog.wordpress.com/2022/05/09/senior-spotlight-spring-2022-samantha-lee/`,
        year: "2022",
      },
      {
        title: `Congratulations to our 2021-22 CS Award Winners`,
        link: `https://www.cs.rutgers.edu/news-events/news/news-item/cs-2021-22-award-winners`,
        year: "2022",
      },
      {
        title: `Rutgers University Women's History Month Feature`,
        link: `https://www.linkedin.com/feed/update/urn:li:activity:6910706444946259968/`,
        year: "2022",
      },
      {
        title: `Sentiment Analysis in R Workshop`,
        link: `https://github.com/SamanthaLLee/R_sentiment_analysis`,
        year: "2022",
      },
      {
        title: `Pre-HackHERS Series: Interactive Visualization with R`,
        link: `https://www.youtube.com/watch?v=Q1OXnOy5bSo`,
        year: "2022",
      },
      {
        title: `Hylite of the Day (LinkedIn Feature)`,
        link: `https://www.linkedin.com/feed/update/urn:li:activity:6877354580028465153/`,
        year: "2022",
      },
      {
        title: `Pre-HackHERS Series 2021 Workshop #4: Chrome Extensions`,
        link: `https://www.youtube.com/watch?v=V6h5_wEqiRw`,
        year: "2021",
      },
      {
        title: `Announcing the LastPass STEM Scholarship Finalists`,
        link: `https://blog.lastpass.com/2019/06/announcing-lastpass-stem-scholarship-finalists.html/`,
        year: "2019",
      },
    ],
    hackathons: [
      {
        title: `HackHERS 2022 (Director)`,
        link: `https://hackhers-2022.devpost.com/`,
      },
      {
        title: `HackRU Spring 2021 (Winner)`,
        link: `https://hackru-s21.devpost.com/`,
      },
      {
        title: `HackHERS 2021 (Director)`,
        link: `https://hackhers-2021.devpost.com/`,
      },
      {
        title: `HackRU Fall 2020 (Winner)`,
        link: `https://hackru-f20.devpost.com/`,
      },
      {
        title: `Estée Lauder Hack for Pink 2020 (Winner)`,
        link: `https://elchackathon2020.devpost.com/`,
      },
      {
        title: `HackHERS 2020 (Director)`,
        link: `https://hackhers-2020.devpost.com/`,
      },
    ],
    resources: [
      {
        title: `BLM/Anti-Racism Primer`,
        category: `Education`,
        link: `https://bit.ly/BLMandANTIRACISM`,
      },
      {
        title: `Central NJ DSA Mutual Aid`,
        category: `Mutual Aid`,
        link: `https://linktr.ee/CNJ_DSA_MA`,
      },
      {
        title: `Educate Urself Carrd`,
        category: `Education`,
        link: `https://educateurself.carrd.co/`,
      },

      {
        title: `Mutual Morris`,
        category: `Mutual Aid`,
        link: `https://mutualmorris.com/`,
      },
      {
        title: `Rutgers Ethitech`,
        category: `Rutgers`,
        link: `https://linktr.ee/RUEthitech`,
      },

      {
        title: `Rutgers HackHERS`,
        category: `Rutgers`,
        link: `http://ruhackhers.org/`,
      },
      {
        title: `Rutgers Mutual Aid`,
        category: `Mutual Aid`,
        link: `https://linktr.ee/RUMutualAid`,
      },
      {
        title: `Rutgers WiCS`,
        category: `Rutgers`,
        link: `https://rutgerswics.org/`,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samantha L. Lee's Portfolio Site`,
        short_name: `Sam Lin Lee`,
        description: `SLL's portfolio site.`,
        start_url: `/`,
        background_color: `#ddd`,
        theme_color: `#ddd`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
        ],
      },
    },
  ],
}
