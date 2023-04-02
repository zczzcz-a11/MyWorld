import { formateSongsAuthor } from '.';

export function mapSongs(songs:any[]) {
  return songs.map((item:any) => {
    const target = item.song
      ? item.song
      : item;
   
    item.dt = target.duration;//时长
    item.al = target.album;//所属专辑
    item.ar = target.artists;//歌手
    item.formatAuthor = formateSongsAuthor(target.artists);
    return item;
  });
} 