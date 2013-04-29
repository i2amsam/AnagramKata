AnagramCalculator = function() {
    anagramMap = {};
    anagrams=[];
    this.addWord = function(word) {
        //Convert to lowercase, sort all the letters into order
        var wordLCSorted = word.toLowerCase().split("").sort().join("");
        if (! anagramMap[wordLCSorted]) {
            anagramMap[wordLCSorted]=[word];
        } else {
            var arrayOfAnagrams = anagramMap[wordLCSorted];
            arrayOfAnagrams.push(word);
            if (arrayOfAnagrams.length == 2) {
                anagrams.push(anagramMap[wordLCSorted]);
            }
        }
    };

    //Get all anagrams for which they
    this.getAnagrams = function() {
        return anagrams;
    }
};

words=[];
function loadData(wordList) {
    var startTime = new Date().getTime();
    words=wordList["words"];

    var myCalculator = new AnagramCalculator();

    $.each(words,function(index,word) {
       myCalculator.addWord(word);
    });

    var results = myCalculator.getAnagrams();
    var resultList = "";
    $.each(results,function(index,resultSet){
        resultList += "<li>"+resultSet+"</li>";
    })
    $("#resultList").append(resultList);
    var endTime = new Date().getTime();
    $("#timing").append("<span>"+(endTime-startTime)+"ms for "+results.length+" sets.</span>");
}
(function loadData() {

    $.ajax({
//        url: "https://dl.dropboxusercontent.com/spa/7p5o4zyeti0i7ld/words/AWords.jsonp",
        url: "https://dl.dropboxusercontent.com/spa/7p5o4zyeti0i7ld/words/ALL_WORDS.jsonp",
        dataType: 'jsonp',
        jsonp: "loadData"
    });

})(jQuery);


