import Head from 'next/head';

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | 선인장</title>
            <meta name="description" content="선택장애를 가진 인간들의 장소" />
            <link rel="icon" href="/asset/image/favicon.ico" />
        </Head>
    );
}