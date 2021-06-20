var songList = [
    ["Well, good for you, I guess you moved on really easily You found a new girl and it only took a couple weeks Remember when you said that you wanted to give me the world? (Ah-ah-ah-ah) And good for you, I guess that you've been workin' on yourself I guess that therapist I found for you, she really helped Now you can be a better man for your brand new girl Well, good for you, you look happy and healthy, not me If you ever cared to ask Good for you, you're doin' great out there without me, baby God",
    "https://genius.com/songs/6702232/apple_music_player"],

    ["If you wanna run away with me, I know a galaxy And I can take you for a ride I had a premonition that we fell into a rhythm Where the music don't stop for life Glitter in the sky, glitter in my eyes Shining just the way I like If you're feeling like you need a little bit of company You met me at the perfect time You want me, I want you, baby My sugarboo, I'm levitating The Milky Way, we're renegading Yeah-yeah-yeah-yeah I got you, moonlight, you're my starlight I need you all night, come on, dance",
    "https://genius.com/songs/5215007/apple_music_player"],
    
    ["Smooth like butter Like a criminal undercover Gon' pop like trouble Breakin' into your heart like that Cool shade stunner Yeah, I owe it all to my mother Hot like summer Yeah, I'm makin' you sweat like that Break it down Ooh, when I look in the mirror I'll melt your heart into two I got that superstar glow so Do the boogie like Side step, right, left to my beat High like the moon, rock with me, baby Know that I got that heat Let me show you 'cause talk is cheap Side step, right, left to my beat", 
    "https://genius.com/songs/6746160/apple_music_player"]
]

function getRandomSong(){
    let randomIndex = Math.floor(Math.random() * songList.length)
    let myLyric = songList[randomIndex][0]
    let myLink = songList[randomIndex][1]
    
    return {
        first: myLyric,
        second: myLink,
    }
}
