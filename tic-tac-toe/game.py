class Game:
        
        def __init__(self):
                self.end = False 
                self.board = [
                        ['-','-','-'],
                        ['-','-','-'],
                        ['-','-','-'] 
                        ]

                
        def move(self, row, col):
                self.board[row][col] = 'o'