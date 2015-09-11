'use strict';

var subs = {
  "hello": "hi",
  "to": "2",
  "two": "2",
  "too": "2",
  "for": "4",
  "For": "4",
  "four": "4",
  "be": "b",
  "you": "u",
  "at": "@",
  "and": "&"
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.split(' ').map(function(word){
      return subs[word] || word;
    }).join(' ')
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    return tweet.length > 140 ? tweetShortener.wordSubstituter(tweet) : tweet;
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length > 140){
      return shortenedTweet.substring(0, 137) + '...';
    }
    else {
      return shortenedTweet;
    }
  },
};
