var playlist = {key: 'value'}

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, {artistName: songTitle})
}
