import React from 'react'

function ReadRules() {
  const rules = `
A work in progress.
A party game for 3+ people inspired on the TV panel show 'Would I Lie To You?' by the BBC.

The game is played in rounds, with each player having a turn in a round. When it is a player's turn they enter a true statement about themselves in the box. They will then be given a statement to read out to the group - Half the time they are given the true statement they typed, and half the time they are given a lie from the database. After they read this out to the group, the group can question the statement giver. The statement giver wants to answer the questions trying to convince the group that the statement was true, regardless of if it was a truth or a lie.

After the group is satisfied, or after a sufficient amount of time has passed (recommended: 10 minutes), each person in the group should say if they think it was a truth or a lie. The statement giver then reveals, and each person that guessed correctly receives a point. The statement giver gets one point for every person who said it was true (and so, they always have an incentive to make it seem like they are telling the truth).

Here are some guidelines to creating your true statements:

- It should be something that the other players do not know about you.
- It should be about you, not about another person, or about another thing.
- It should be something strange or unexpected, not something normal.

If the other players feel that your true statement was too boring, too ordinary, or irrelevant to you, they can decide to penalize you by deducting a point. You don't receive any points for that round. If the other players have already guessed they can receive points if they guessed correctly.

This is a game - Have fun with it! Try and remember a crazy story about your life. The more unbelievable your truth, the better the game will be.

The game ends after a number of rounds - make sure that every person has had the same amount of turns. The winner is the person with the most points and is crowned 'The best liar'.

Tips:
- Maybe have some preparation beforehand thinking about truths for yourself.
- Bend the rules to your liking - how about making it a drinking game?
  `
  return <div>{rules.split('\n').map(line => <p>{line}</p>)}</div>
}

export default ReadRules
