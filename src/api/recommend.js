import { get } from "./../utils/axios";
import { recommend } from "./index";
export function getBanner() {
    return get(recommend.banner)
}
export function getDisk() {
    return get(recommend.disk)
}