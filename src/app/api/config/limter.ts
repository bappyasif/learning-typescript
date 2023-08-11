import {RateLimiter} from "limiter"
export const limiter = new RateLimiter({
    tokensPerInterval: 4,
    interval: "min",
    fireImmediately: true
})