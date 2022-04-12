document.querySelector('#drawCard').addEventListener('click', drawCard)

function drawCard(){
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#card').innerText = `${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`
            document.querySelector('img').src = data.cards[0].image
            switch (data.cards[0].value) {
                case '2':
                    document.querySelector('#instructions').innerText = 'Create a rhyming ABCB rhyme'
                    break
                case '3':
                    document.querySelector('#instructions').innerText = 'Write down a wild card rule that will be in play for the rest of the game'
                    break
                case '4':
                    document.querySelector('#instructions').innerText = 'Make an advertisement for a new exciting product!'
                    break
                case '5':
                    document.querySelector('#instructions').innerText = 'Urban Dictionary Definition: make up a definition for a word you\'d definitely find on Urban Dictionary. \(If you get the real one, the person who gave you the word drinks\)'
                    break
                case '6':
                    document.querySelector('#instructions').innerText = 'Give a rousing, intense, inspiring speech on a one word topic given to you by the person on your right. If inspired, all cheer and drink'
                    break
                case '7':
                    document.querySelector('#instructions').innerText = 'The person accross from you gives you a bunch of random letters. Make an acronym out of them'
                    break
                case '8':
                    document.querySelector('#instructions').innerText = 'Randomized Wikipedia Article: Given a random wikipedia article title, you must create a proper and convincing story for whatever the article\'s title is! \(If it\s the real reason, choose someone to drink\)'
                    break
                case '9':
                    document.querySelector('#instructions').innerText = 'TRUTH IS STRANGER THAN FICTION: Create a story for a random wikipedia article (again), but if the article is more outlandish than the real truth, then chug drink'
                    break
                case '10':
                    document.querySelector('#instructions').innerText = 'Create a 10 second movie pitch'
                    break
                case 'JACK':
                    document.querySelector('#instructions').innerText = 'Give a convincing plea of love to someone on your left'
                    break
                case 'QUEEN':
                    document.querySelector('#instructions').innerText = 'M. Knight Shamalamadingdong: Make a story and provide a twist ending'
                    break
                case 'KING':
                    document.querySelector('#instructions').innerText = 'Make someone do one of the other rules. If you can\t remember any, chug'
                    break
                case 'ACE':
                    document.querySelector('#instructions').innerText = 'Drink. Screw you.'
                    break
            }
        })
}