let movies = {
  movie1: {
    id: "movie1",
    title: "Stranger Things",
    year: 2016,
    numberOfSeasons: 4,
    poster: require("../movie_posters/movie_1/movie1.jpeg"),
    IMDb: "87%",

    plot: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    cast: "Millie Bobby Brown, Finn Wolfhard, Noah Schnapp, Gaten Matarazzo, Caleb McLaughlin",
    creator: "Matt Duffer, Ross Duffer",
    age: 12,

    seasons: {
      items: [
        {
          id: "0",
          name: "Season 1",
          episodes: {
            items: [
              {
                id: "episode1",
                title: "Chapter One: The Vanishing Will Byers",
                poster: require("../movie_posters/movie_1/season_1/ep1.jpeg"),
                duration: "1h 21m",
                plot: "On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
                video:
                  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              },
              {
                id: "episode2",
                title: "Chapter Two: The Weirdo on Maple Street",
                poster: require("../movie_posters/movie_1/season_1/ep2.jpeg"),
                duration: "43m",
                plot: "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.",
                video:
                  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              },
            ],
          },
        },
        {
          id: "1",
          name: "Season 2",
          episodes: {
            items: [
              {
                id: "episode3",
                title: "Chapter One: Madmax",
                poster: require("../movie_posters/movie_1/season_2/ep1.webp"),
                duration: "49m",
                plot: "As the town prepares for Halloween, a high-scoring rival shakes things up at the arcade and skeptical Hopper examines a field of rotting pumpkins.",
                video:
                  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              },
              {
                id: "episode4",
                title: "Chapter Two: Trick or Treat, Freak",
                poster: require("../movie_posters/movie_1/season_2/ep2.webp"),
                duration: "49m",
                plot: "After Will sees something terrible while trick or treating, Mike wonders if Eleven is still alive; Nancy struggles to come to terms with the truth about Barb.",
                video:
                  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              },
            ],
          },
        },
      ],
    },
  },
};

export default movies;
