import { getServerSideSitemapIndex } from 'next-sitemap'
export const getServerSideProps = async (ctx: any) => {
    return getServerSideSitemapIndex(ctx, [
        'https://2btech.us/server-sitemap.xml',
    ])
}

export default function SitemapIndex() {}
