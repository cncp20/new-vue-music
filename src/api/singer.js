import { get } from "./../utils/axios";
import { singer } from "./index";
export function getSingers() {
    return get(singer.singers);
}
export function getSingerSongs(id) {
    return get(singer.songs + id);
}
export function getSingerDetail(id) {
    return get(singer.detail + id);
}