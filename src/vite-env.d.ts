/// <reference types="vite/client" />
// declare module "email" {
//     export interface send {
//         SecureToken: string,
//         To: string,
//         From: string,
//         Subject: string,
//         Body: string
//     }
// }

declare module "url" {
    export interface Url {
      protocol?: string;
      hostname?: string;
      pathname?: string;
    }
    export function parse(
      urlStr: string,
      parseQueryString?,
      slashesDenoteHost?
    ): Url;
  }