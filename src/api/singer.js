import { get } from "./../utils/axios";
import { singer } from "./index";
export function getSingers() {
    return get(singer.singers)
}