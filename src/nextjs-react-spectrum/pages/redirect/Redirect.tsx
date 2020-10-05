import * as React from 'react';
import { GetServerSideProps } from 'next';
import { handleRedirects } from '../../helpers/handle-redirects';

function RedirectPage() {
    return <div>Test</div>
}

export default RedirectPage;

export const getServerSideProps: GetServerSideProps = async ({res, req}) => {
    const didRedirect = handleRedirects(res, req);
    if (didRedirect) {
        return null;
    }

    return {
        props: {},
    }
}