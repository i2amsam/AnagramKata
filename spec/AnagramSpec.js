describe("Anagram", function() {

    var calculator = undefined;
    beforeEach(function() {
        calculator = new AnagramCalculator();
    });

    it("should be an empty list initially", function() {
        expect(calculator.getAnagrams().length).toEqual(0);
    });

    it("should be empty when two different words are added", function() {
        calculator.addWord("was");
        calculator.addWord("were");
        expect(calculator.getAnagrams().length).toEqual(0);
    });

    it("should be sized 1 when two items match", function() {
        calculator.addWord("was");
        calculator.addWord("saw");
        expect(calculator.getAnagrams().length).toEqual(1);
    });

    it("should be exactly the two items", function() {
        calculator.addWord("was");
        calculator.addWord("saw");
        calculator.addWord("draper");
        expect(calculator.getAnagrams()).toEqual([["was","saw"]]);
    });

    it("should accumulate two sets", function() {
        var words = ["tea","eat","peal","leap"];
        $.each(words,function(index,word) {
           calculator.addWord(word);
        });
        expect(calculator.getAnagrams()).toEqual([["tea","eat"],["peal","leap"]]);
    });



});