// declare namespace Email {
//     interface send {
        // SecureToken: string,
        // To: string,
        // From: string,
        // Subject: string,
        // Body: string
//     }
// }

// export = Email

// declare namespace Example {
//     export function Foo(): void 
// }  

// declare namespace ThirdParty {
//     interface User {
//       id: string;
//       getID(): string;
//     }
//   }
//   export = ThirdParty;

declare module "Email" {
    export interface send {
        SecureToken: string,
        To: string,
        From: string,
        Subject: string,
        Body: string
    }
    // export function parse(
    //     urlStr: string,
    //     parseQueryString?,
    //     slashesDenoteHost?
    // ): send;
}
