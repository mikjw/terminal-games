describe("Board", function() {
      
        beforeEach(function() {
                board = new Board();
        });
      
        it("should display the board", function() {
                expect(board.show()).toEqual(
                        [
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"],
                        ["-","-","-","-","-","-","-","-"]
                        ]
                );
        })
});