import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'

export default NextAuth({
    providers: [
        KakaoProvider({
            clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({token, account}) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            return session;
        },
    }
})

//카카오 acess Token 가져오는 로직
export const getAccessToken = async (req) => {
    const session = await getSession({ req });
    return session?.accessToken;
};
