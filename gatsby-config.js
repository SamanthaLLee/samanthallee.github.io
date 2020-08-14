module.exports = {
  siteMetadata: {
    title: `Samantha L. Lee`,
    author: `Samantha L. Lee`,
    firstName: `Samantha`,
    lastName: `Lee`,
    description: `Samantha L. Lee's portfolio`,
    occupation: `Student`,
    keywords: [`Samantha`, `Lee`, `Personal`, `Portfolio`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Student`,
      `Activist`,
      `Teacher`,
      `Thinker`,
    ],
		interests: [`Software engineering`, 'Human-centered research'],
		passions: [`Diversity in tech`, `Ethical tech`, `K-12 outreach`, `Social justice`],
		dabblings: [`Graphic design`, `UX/UI`],
		learnings: [`Data science`, 'Data visualization', 'NLP', 'Bias in ML'],
		hobbies: ['DIY',`Pokémon GO`,'Sewing','Skateboarding'],
		advanced: ['Java','C'],
		intermediate: ['Python','JavaScript', 'AWS'],
		basic: ['PHP', 'SQL', 'R'],
		conferences: [
			{
				name: `Grace Hopper Celebration (2020)`,
				link: 'https://ghc.anitab.org/',
      },
			{
        name: `Impact Summit (2020)`,
				link: 'https://www.impactlabs.io/summit/',
      },
			{
        name: `Rewrite Your Future (2020)`,
				link: 'https://rewritingthecode.org/first-rtc-virtual-career-summit-coming-soon/',
      },
			{
        name: `Grace Hopper Celebration (2019)`,
				link: 'https://ghc.anitab.org/',
      },
			{
        name: `Bit by Bit (2018)`,
				link: 'https://blogs.dalton.org/bitbybit/',
      },
		],
    readingList: [
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
        title: `Percy Jackson and Olympians: The Lightning Thief`,
        author: `Rick Riordan`,
        link: `https://www.goodreads.com/book/show/28187.The_Lightning_Thief`,
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
        author: `Cathy O'Niel`,
        link: `https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction`,
      },
    ],
    showsList: [
			{
        title: `Hereditary`,
        author: `Ari Aster`,
        link: `https://www.imdb.com/title/tt7784604/`,
      },
			{
        title: `Inception`,
        author: `Christopher Nolan`,
        link: `https://www.imdb.com/title/tt1375666/`,
      },
			{
        title: `Jojo Rabbit`,
        author: `Taika Waititi`,
        link: `https://www.imdb.com/title/tt2584384/`,
      },
			{
        title: `Moulin Rouge!`,
        author: `Baz Luhrmann, Craig Pearce`,
        link: `https://www.imdb.com/title/tt0203009/`,
      },
			{
        title: `Portrait of a Lady on Fire`,
        author: `Céline Sciamma`,
        link: `https://www.imdb.com/title/tt8613070/`,
      },
      {
        title: `Spirited Away`,
        author: `Hayao Miyazaki`,
        link: `https://www.imdb.com/title/tt0245429/`,
      },
			{
        title: `The Sixth Sense`,
        author: `M. Night Shyamalan`,
        link: `https://www.imdb.com/title/tt0167404/`,
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
  ],
}
