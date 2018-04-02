//인기로내 1-5위 노래 정보 작성

/*
* Best Song Top 5
인기 노래 Top5 정보를 다루는 코드를 작성하려고 한다.
각 음원 사이트를 이용해서 1-5위까지 노래 정보를 작성하시오.
3위의 곡을 삭제하고 새로운 노래를 2위가 되도록 코드를 작성하시오.
* */

var songs = [
    {
        song_name: 'jenga',
        singer: '헤이즈',
        album: '바람',
        like: 500
    },
    {
        song_name: '사랑을 했다',
        singer: 'IKON',
        album: 'Return',
        like: 400
    },
    {
        song_name: '별이 빛나는 밤',
        singer: '마마무',
        album: 'Yellow Florwer',
        like: 300
    },
    {
        song_name: '뿜뿜',
        singer: '모모랜드',
        album: 'GREAT!',
        like: 200
    },
    {
        song_name: '니가 더 나',
        singer: '헤이즈',
        album: '바람',
        like: 100
    }
];

songs.splice(2, 1);


//songs.pop('rank', 3);

songs.push({
    song_name: '내가 더 나빠',
    singer: '헤이즈',
    album: '바람',
    like: 450
});

songs.sort(function (song_a, song_b) {
    return song_a.like > song_b.like ? 0 : song_b.like > song_a.like ? 1 : -1;
});

var i = 1;
for(song of songs){
    song.rank = i ++;
}

console.log(songs);
