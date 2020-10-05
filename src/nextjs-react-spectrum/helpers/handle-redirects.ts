import { IncomingMessage, ServerResponse } from 'http';

export function handleRedirects(res: ServerResponse, req: IncomingMessage) {
    if (!!res) {
        // Add logic for fetching redirect data from external source.
        const shouldRedirect = true; // Add logic here for determining if current url matches a redirect record.

        if (shouldRedirect) {
            res.writeHead(
                301, // 301 or 302, should be contained in the response from external source for redirects.
                {
                    Location: 'new/url/to/content', // url to redirect to
                }
            );
            res.end();
            return true; // return true so we can terminate
        }
    }

    return false;
}