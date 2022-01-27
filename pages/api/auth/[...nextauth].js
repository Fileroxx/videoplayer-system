import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: '378860685390-9npq27jmses781jm4s53c11ec50vel3q.apps.googleusercontent.com',
            clientSecret: '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',
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?promt=consent&access_type=offline&response_type=code',
        })
    ],

    
    callbacks: {
        async jwt(token, account) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken;
            }
            return token;
        },
        redirect: async (url, _baseUrl) => {
            if (url === '/profile') {
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
    }
});