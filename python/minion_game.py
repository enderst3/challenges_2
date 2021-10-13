"""
Kevin and Stuart want to play the 'The Minion Game'.
Game Rules
Both players are given the same string, .
Both players have to make substrings using the letters of the string  s.
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels. 
The game ends when both players have made all possible substrings. 
Scoring
A player gets +1 point for each occurrence of the substring in the string s.
For Example:
String s = BANANA
Kevin's vowel beginning word = ANA
Here, ANA occurs twice in BANANA. Hence, Kevin will get 2 Points. 


"""
def minion_game(s):
    vowels = "AEIOUaeiou"
    kevin_score = 0
    stuart_score = 0
    
    for i in range(len(s)):
        if s[i] in vowels:
            kevin_score += len(s) - i
        else:
            stuart_score += len(s) - i
    if kevin_score > stuart_score:
        print("Kevin {}".format(kevin_score))
    elif kevin_score < stuart_score:
        print("Stuart {}".format(stuart_score))
    else:
        print("Draw")

minion_game('banana')